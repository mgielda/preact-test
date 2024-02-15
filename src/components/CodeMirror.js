import { useEffect, useRef, useState } from 'preact/hooks';
import { html } from "htm/preact";
import { basicSetup, EditorView } from "codemirror";
import { keymap } from "@codemirror/view";
import { indentWithTab, redo } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";
import styled from 'styled-components';
import { yCollab } from "y-codemirror.next";
import useCollaboration from '../hooks/useCollaboration';
import spellcheck from '../hooks/spellchecker';
import { customHighlighter } from '../hooks/customHighlights';
import { adjustToMode } from './Preview';
import { markdown } from "@codemirror/lang-markdown";

const adjust = adjustToMode("Source");

const CodeEditor = styled.div`
  border-radius: var(--border-radius);
  background: var(--gray-200);
  font-family: monospace;
  font-size: 0.94em;
  resize: none;
  border: 0;
  padding: 20px;
  min-height: 500px;
  color: black;
  position: relative;

  ${props => adjust(props.$mode)}

  flex: 1;
  border: 1px solid var(--gray-400);
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);

  .comment-gutter-icon {
    height: 17px;
    width: 17px;
    cursor: pointer;
  }

  .comment-gutter.has-comments > .comment-gutter-icon {
    position: absolute;
    display: inline;
    background-color: var(--gray-200);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' width='17px' height='17px' viewBox='0 0 32 32' version='1.1'%3E%3Ctitle%3Ecomment-3%3C/title%3E%3Cdesc%3ECreated with Sketch Beta.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icon-Set' sketch:type='MSLayerGroup' transform='translate(-204.000000, -255.000000)' fill='%23000000'%3E%3Cpath d='M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 L228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 L220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 L220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 L212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 L220,267 Z' id='comment-3' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .comment-gutter > .comment-gutter-icon {
    position: absolute;
    &:hover {
      background-color: var(--gray-200);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' width='17px' height='17px' viewBox='0 0 32 32' version='1.1'%3E%3Ctitle%3Ecomment-3%3C/title%3E%3Cdesc%3ECreated with Sketch Beta.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg id='Icon-Set' sketch:type='MSLayerGroup' transform='translate(-204.000000, -255.000000)' fill='%23000000'%3E%3Cpath d='M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 L228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 L220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 L220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 L212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 L220,267 Z' id='comment-3' sketch:type='MSShapeGroup'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  }

  .comment-box {
    width: 95%;
    display: flex;
    margin: 0px;
    padding: 0px;
  }

  @media print {
    & {
      display: none;
    }
  }

  .cm-ySelectionInfo {
    opacity: 1 !important;
    font-size: 0.6rem;
    padding: 0.25rem 0.5rem !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-family: "Lato" !important;
    font-weight: 600 !important;
  }

  .cm-widgetBuffer {
    margin-bottom: 0;
  }

  .cm-ySelectionCaretDot {
    display: none;
  }

  .cm-yLineSelection {
    margin: 0 2px 0 6px !important;
  }

  .cm-editor {
    outline: 0;
  }

  .cm-error {
    text-decoration: underline red
  }

  .cm-link {
    color: var(--blue-500);

    .cm-error {
      text-decoration: unset;
    }

    .ͼ6.ͼ5 {
      color: unset;
    }
  }

  .cm-mono {
    color: #219;
  }
`;

const HiddenTextArea = styled.textarea`
  display: none;
`;

const getRelativeCursorLocation = (view) => {
  const { from } = view.state.selection.main;
  const pos = view.state.doc.lineAt(from);
  return { line: pos.number - 1, ch: from - pos.from };
};

const restoreCursorLocation = (view, location) => {
  const { line, ch } = location;
  const pos = view.state.doc.line(line + 1).from + ch;
  view.dispatch({
    selection: { anchor: pos, head: pos },
    scrollIntoView: true,
  });
};

const setEditorText = (editor, text) => {
  editor.dispatch({
    changes: {
      from: 0,
      to: editor.state.doc.length,
      insert: text,
    }
  });
}

const CodeMirror = ({ text, setText, id, name, className, mode, syncText, setSyncText, collaboration, spellcheckOpts, highlights }) => {
  const editorRef = useRef(null);
  const [initialized, setInitialized] = useState(false);

  const { provider, undoManager, ytext, ydoc, ready, ycommentsExtension, ycommentsComponent, ycomments } = useCollaboration(collaboration);

  useEffect(() => {
    if (collaboration.enabled) {
      undoManager.on('stack-item-added', event => {
        event.stackItem.meta.set('cursor-location', getRelativeCursorLocation(editorRef.current));
      });
      undoManager.on('stack-item-popped', event => {
        restoreCursorLocation(editorRef.current, event.stackItem.meta.get('cursor-location'));
      });
    }
    const basicSetupWithoutHistory = basicSetup.filter((_, i) => i != 3);
    const extensions = [
      collaboration.commentsEnabled ? ycommentsExtension : [],
      collaboration.enabled ? basicSetupWithoutHistory : basicSetup,
      markdown(),
      keymap.of([
        indentWithTab,
        { key: "Mod-Z", run: redo }
      ]),
      spellcheck(spellcheckOpts),
      customHighlighter(highlights),
      EditorView.lineWrapping,
      EditorView.updateListener.of(update => {
        if (update.docChanged) {
          if (localStorage.getItem('log') == 'true') console.log('doc changed');
          setText(view.state.doc.toString());
        }
      })
    ];
    if (collaboration.enabled) {
      extensions.push(yCollab(ytext, provider.awareness, { undoManager }));
      extensions.push(keymap.of([
        { key: "Mod-z", run: () => undoManager.undo(), preventDefault: true },
        { key: "Mod-y", run: () => undoManager.redo(), preventDefault: true },
        { key: "Mod-Z", run: () => undoManager.redo(), preventDefault: true },
      ]));
    }


    const startState = EditorState.create({
      doc: collaboration.enabled ? ytext.toString() : text,
      extensions
    });

    const view = new EditorView({
      state: startState,
      parent: document.getElementById(id+'-editor')
    });
    editorRef.current = view;
    setInitialized(true);

    ycomments.registerCodeMirror(view);

    return () => {
      if (collaboration.enabled) {
        provider.disconnect();
        ydoc.destroy();
      }
      view.destroy();
    };
  }, []);

  useEffect(() => {
    const mystEditorCount = document.querySelectorAll("#myst-css-namespace").length;
    const isFirstUser = collaboration.enabled && 
      ytext.toString().length == 0 && 
      provider.awareness.getStates().size == mystEditorCount && 
      provider.firstUser && 
      ready;

    if (ytext && ytext.toString().length != 0) setText(ytext.toString());

    if (isFirstUser) {
      console.log('You are the first user in this document. Initiating...');
      setEditorText(editorRef.current, text);
    }

    ycomments.updateMainCodeMirror();
  }, [ready, initialized]);

  useEffect(() => {
    if (syncText) {
      console.log('setting text');
      setEditorText(editorRef.current, text);
      setSyncText(false);
    }
  }, [syncText]);

  return html`
      <${CodeEditor} $mode=${mode} id="${id}-editor" class=${className}>
        ${collaboration.commentsEnabled ? ycommentsComponent() : ""}
      <//>
      <${HiddenTextArea} value=${text} name=${name} id=${id}><//>
  `;
};

export default CodeMirror
export {
  CodeEditor
}