import markdownitDocutils from "markdown-it-docutils";
import purify from "dompurify";
import markdownIt from "markdown-it";
import { markdownReplacer, useCustomRoles } from "./markdownReplacer";
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
import IMurMurHash from "imurmurhash";
import { backslashLineBreakPlugin } from "./markdownLineBreak";
import markdownSourceMap from "./markdownSourceMap";
import { StateEffect } from "@codemirror/state";
import markdownMermaid from "./markdownMermaid";
import { EditorView, ViewUpdate } from "@codemirror/view";
import { addFoldUI } from "./markdownFoldButtons";
import { foldedRanges } from "@codemirror/language";

const countOccurences = (str, pattern) => (str?.match(pattern) || []).length;
const getUnfoldedMarkdown = (src, /** @type {EditorView} */ view) => {
  const folded = foldedRanges(view.state);
  const ranges = [];
  const cursor = folded.iter();
  for (let r = cursor; r.value != null; cursor.next()) {
    ranges.push({ from: r.from, to: r.to });
  }

  let unfoldedMarkdown = src;
  if (ranges.length > 0) {
    unfoldedMarkdown = ranges.reduce(
      (acc, { from, to }, idx) => {
        if (from > acc.lastPos) {
          acc.result += src.slice(acc.lastPos, from);
        }
        acc.lastPos = Math.max(acc.lastPos, to);
        if (idx == ranges.length - 1 && acc.lastPos < src.length) {
          // add remaining part
          acc.result += src.slice(acc.lastPos, src.length);
        }
        return acc;
      },
      { result: "", lastPos: 0 },
    ).result;
  }

  const foldedLines = ranges.map((r) => ({ start: view.state.doc.lineAt(r.from).number + 1, end: view.state.doc.lineAt(r.to).number }));

  return [unfoldedMarkdown, foldedLines];
};

const exposeText = (text) => () => {
  if (!window.myst_editor) {
    window.myst_editor = {};
  }
  window.myst_editor.text = text;
};

const copyHtmlAsRichText = (/** @type {string} */ txt) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(txt, "text/html");
  doc.querySelectorAll("[data-line-id]").forEach((n) => n.removeAttribute("data-line-id"));
  // This removes spans added for source mapping purposes.
  doc.querySelectorAll("span").forEach((n) => {
    if (n.attributes.length === 0) {
      n.insertAdjacentHTML("afterend", n.innerHTML);
      n.remove();
    }
  });
  doc.querySelectorAll("[data-remove]").forEach((n) => n.remove());
  const sanitized = doc.body.innerHTML;

  navigator.clipboard.write([
    new ClipboardItem({
      "text/plain": new Blob([sanitized], { type: "text/plain" }),
      "text/html": new Blob([sanitized], { type: "text/html" }),
    }),
  ]);
};

export const markdownUpdatedStateEffect = StateEffect.define();

/** @param {{preview: { current: Element } }} */
export const useText = ({ initialText, transforms, customRoles, preview, backslashLineBreak, parent }) => {
  const [text, setText] = useState(initialText);
  const [readyToRender, setReadyToRender] = useState(false);
  const [syncText, setSyncText] = useState(false);
  const [onSync, setOnSync] = useState({ action: (text) => {} });
  const lineMap = useRef(new Map());
  /**
   * Split the document into chunks and re-render only the chunks which were changed
   *
   * @type {[{ md: string, html: string }[], Dispatch<{newMarkdown: string, force: boolean }>]}
   */
  const [htmlChunks, updateHtmlChunks] = useReducer((oldChunks, { newMarkdown, force = false, view, foldedLines }) => {
    let htmlLookup = {};
    if (!force) {
      htmlLookup = oldChunks.reduce((lookup, { hash, html }) => {
        lookup[hash] = html;
        return lookup;
      }, {});
    }
    const newChunks = splitIntoChunks(newMarkdown, htmlLookup, foldedLines);

    if (newChunks.length !== oldChunks.length || force) {
      // We can't infer which chunks were modified, so we update the entire document
      const toRemove = [...preview.current.childNodes].filter((c) => !c.classList || !c.classList.contains("cm-previewFocus"));
      toRemove.forEach((c) => preview.current.removeChild(c));

      preview.current.innerHTML += newChunks.map((c) => `<html-chunk id="html-chunk-${c.id}">` + c.html + "</html-chunk>").join("");
      return newChunks;
    }

    newChunks // Go through every modified chunk and update its content
      .filter((newChunk, idx) => newChunk.hash !== oldChunks[idx].hash)
      .forEach((chunk) => (preview.current.querySelector("html-chunk#html-chunk-" + chunk.id).innerHTML = chunk.html));

    view?.dispatch({
      effects: markdownUpdatedStateEffect.of(null),
    });

    return newChunks;
  }, []);

  const markdown = useMemo(() => {
    const md = markdownIt({ breaks: true, linkify: true })
      .use(markdownitDocutils)
      .use(markdownReplacer(transforms, parent))
      .use(useCustomRoles(customRoles, parent))
      .use(markdownMermaid, { lineMap, parent })
      .use(markdownSourceMap, addFoldUI);
    if (backslashLineBreak) md.use(backslashLineBreakPlugin);
    return md;
  }, []);

  const shiftLineMap = useCallback((/** @type {ViewUpdate} */ update) => {
    if (update.startState.doc.lines === update.state.doc.lines) return;
    let shiftStart = 0;
    let shiftAmount = 0;
    update.changes.iterChangedRanges((fromA, toA, fromB, toB) => {
      const startLine = update.startState.doc.lineAt(fromA).number;
      const endLine = update.startState.doc.lineAt(toA).number;
      const startLineB = update.state.doc.lineAt(fromB).number;
      const endLineB = update.state.doc.lineAt(toB).number;

      shiftStart = endLine;
      if (startLine === endLine) {
        shiftAmount = endLineB - startLineB;
      } else {
        shiftAmount = -(endLine - startLine);
      }
    });

    const newMap = new Map(lineMap.current);
    for (const [line, id] of lineMap.current.entries()) {
      if (line < shiftStart) continue;
      if (id === newMap.get(line)) {
        newMap.delete(line);
      }
      newMap.set(line + shiftAmount, id);
    }
    lineMap.current = newMap;
  });

  /** Split and parse markdown into chunks of HTML. If `lookup` is not provided then every chunk will be parsed */
  const splitIntoChunks = useCallback(
    (newMarkdown, lookup = {}, foldedLines) =>
      newMarkdown
        .split(/(?=\n#{1,3} )/g) // Perform a split without removing the delimeter
        .reduce(
          // Check if a chunk has a non-closed code section. If yes - join this and the next chunk
          (chunks, newChunk) => {
            const lastChunkIdx = chunks.length - 1;
            const lastChunk = chunks[lastChunkIdx];
            /** Markdown-it gets passed small chunks of `newMarkdown` so when we get the line number of a token, it is relative to that chunk.
             * In order to get the line number relative to the whole document, we need to keep track of which line a chunk begins at.*/
            const startLine = !lastChunk ? 1 : lastChunk.startLine + lastChunk.md.trimLeft().split("\n").length;
            const endLine = startLine + newChunk.trimLeft().split("\n").length - 1;
            if (countOccurences(lastChunk?.md, /\n```/g) % 2 != 0) {
              chunks[lastChunkIdx] = { md: lastChunk.md + newChunk, startLine: lastChunk.startLine, endLine };
            } else {
              chunks.push({ md: newChunk, startLine, endLine });
            }
            return chunks;
          },
          [],
        )
        .map(({ md, startLine, endLine }, id) => {
          const hash = new IMurMurHash(md, 42).result();

          // Clear source mappings for chunk we are rerendering
          if (!lookup[hash]) {
            let unfoldedStart = startLine;
            let unfoldedEnd = endLine;
            for (const range of foldedLines ?? []) {
              if (range.start < unfoldedStart) {
                unfoldedStart += range.end - range.start + 1;
              }
              if (range.start < unfoldedEnd) {
                unfoldedEnd += range.end - range.start + 1;
              }
            }
            for (let l = unfoldedStart; l <= unfoldedEnd; l++) {
              lineMap.current.delete(l);
            }
          }

          const html =
            lookup[hash] ||
            purify.sanitize(markdown.render(md, { chunkId: id, startLine, lineMap, foldedLines }), {
              // Taken from Mermaid JS settings: https://github.com/mermaid-js/mermaid/blob/dd0304387e85fc57a9ebb666f89ef788c012c2c5/packages/mermaid/src/mermaidAPI.ts#L50
              ADD_TAGS: ["foreignobject"],
              ADD_ATTR: ["dominant-baseline"],
            });
          return { md, hash, id, html };
        }),
    [markdown],
  );

  useEffect(() => readyToRender && updateHtmlChunks({ newMarkdown: text }), [readyToRender]);
  useEffect(exposeText(text), [text]);
  useEffect(() => {
    if (syncText) {
      onSync.action(text);
      setSyncText(false);
    }
  }, [syncText]);

  return {
    set(newMarkdown, /** @type {ViewUpdate} */ update) {
      if (update) {
        shiftLineMap(update);
      }
      let unfoldedMarkdown = newMarkdown;
      let foldedLines = [];
      if (update?.state) {
        [unfoldedMarkdown, foldedLines] = getUnfoldedMarkdown(newMarkdown, update.view);
      }

      setText(unfoldedMarkdown);
      setTimeout(() => {
        try {
          updateHtmlChunks({ newMarkdown: unfoldedMarkdown, view: update?.view, foldedLines });
        } catch (e) {
          console.warn(e);
          updateHtmlChunks({ newMarkdown: unfoldedMarkdown, force: true, view: update?.view, foldedLines });
        }
      });
    },
    get() {
      return text;
    },
    sync() {
      setSyncText(true);
    },
    refresh() {
      const [unfoldedMarkdown, foldedLines] = getUnfoldedMarkdown(window.myst_editor.text, window.myst_editor.main_editor);
      updateHtmlChunks({ newMarkdown: unfoldedMarkdown, force: true, foldedLines });
    },
    onSync(action) {
      setOnSync({ action });
    },
    readyToRender() {
      setReadyToRender(true);
    },
    copy() {
      copyHtmlAsRichText(
        splitIntoChunks(window.myst_editor.text, {}, [])
          .map((c) => c.html)
          .join("\n"),
      );
    },
    lineMap,
  };
};
