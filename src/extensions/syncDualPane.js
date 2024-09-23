import { EditorView } from "codemirror";
import { markdownUpdatedStateEffect } from "../hooks/useText";
import { findNearestElementForLine, getLineById } from "../hooks/markdownSourceMap";
import { EditorSelection } from "@codemirror/state";

const previewTopPadding = 20;
const debounceTimeout = 100;

export const syncPreviewWithCursor = (lineMap, preview) => {
  let timeout;

  return EditorView.updateListener.of((update) => {
    const cursorLineBefore = update.startState.doc.lineAt(update.startState.selection.main.head).number;
    const cursorLineAfter = update.state.doc.lineAt(update.state.selection.main.head).number;
    const selectionChanged = update.selectionSet && (cursorLineBefore !== cursorLineAfter || cursorLineBefore === 1);
    const markdownUpdated = update.transactions.some((t) => t.effects.some((e) => e.is(markdownUpdatedStateEffect)));
    const resized = update.geometryChanged && !update.viewportChanged;
    if (update.docChanged || (!selectionChanged && !markdownUpdated && !resized)) {
      return;
    }

    function sync() {
      const [matchingElem, matchingLine] = findNearestElementForLine(cursorLineAfter, lineMap, preview.current);
      if (matchingElem) {
        scrollPreviewElemIntoView({
          view: update.view,
          matchingLine,
          matchingElem,
          behavior: "smooth",
          preview: preview.current,
        });
      }
    }

    clearTimeout(timeout);
    timeout = setTimeout(sync, debounceTimeout);
  });
};

/** @param {Object} param0
 * @param {EditorView} param0.view
 */
function scrollPreviewElemIntoView({ view, matchingLine, matchingElem, behavior = "auto", preview }) {
  const cursorBlock = view.lineBlockAt(view.state.doc.line(matchingLine).from);
  const previewRect = preview.getBoundingClientRect();
  const editor = view.dom.parentElement;
  let matchingRect = matchingElem.getBoundingClientRect();

  const elemScrollOffset = cursorBlock.top + previewTopPadding;

  const top = matchingRect.top + preview.scrollTop - elemScrollOffset - previewRect.top + editor.scrollTop;
  preview.scrollTo({ top, behavior });
}

export function handlePreviewClickToScroll(/** @type {{ target: HTMLElement }} */ ev, lineMap, preview) {
  const id = ev.target.getAttribute("data-line-id");
  if (!id) return;

  const lineNumber = getLineById(lineMap.current, id);
  const line = window.myst_editor.main_editor.state.doc.line(lineNumber);
  const lineBlock = window.myst_editor.main_editor.lineBlockAt(line.from);
  const targetRect = ev.target.getBoundingClientRect();
  const previewRect = preview.current.getBoundingClientRect();
  const editor = window.myst_editor.main_editor.dom.parentElement;

  const editorScrollOffset = targetRect.top;
  const top = lineBlock.top - editorScrollOffset + previewRect.top + previewTopPadding;
  editor.scrollTo({
    top,
    behavior: "smooth",
  });
  function setCursor() {
    window.myst_editor.main_editor.dispatch({
      selection: EditorSelection.create([EditorSelection.range(line.to, line.to)]),
    });
    window.myst_editor.main_editor.focus();
    editor.removeEventListener("scrollend", setCursor);
  }
  editor.addEventListener("scrollend", setCursor);
}
