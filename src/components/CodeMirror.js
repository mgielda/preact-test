import { useEffect, useRef, useState } from 'preact/hooks';
import { html } from "htm/preact";
import { basicSetup, EditorView } from "codemirror";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";
import styled from 'styled-components/macro';
import { yCollab } from "y-codemirror.next";
import useCollaboration from '../hooks/useCollaboration'

const CodeEditor = styled.div`
  border-radius: var(--border-radius);
  background: var(--gray-200);
  font-family: monospace;
  font-size: 0.94em;
  resize: none;
  border: 0;
  padding: 20px;
  min-height: 500px;
  display: ${props => props.$shown ? 'block' : 'none'};
  flex: 1;
  border: 1px solid var(--gray-400);
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);

  @media print {
    display: none;
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


const CodeMirror = ({ text, setText, id, name, className, shown, syncText, setSyncText, collaboration }) => {
  const editorRef = useRef(null);
  const [initialized, setInitialized] = useState(false);
  const { provider, undoManager, ytext, ydoc, ready } = useCollaboration(collaboration);

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
      collaboration.enabled ? basicSetupWithoutHistory : basicSetup,
      keymap.of([
        indentWithTab
      ]),
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

    return () => {
      if (collaboration.enabled) {
        provider.disconnect();
        ydoc.destroy();
      }
      view.destroy();
    };
  }, []);

  useEffect(() => {
    const isFirstUser = collaboration.enabled && ytext.toString().length == 0 && provider.awareness.getStates().size == 1 && provider.firstUser && ready;

    if (ytext && ytext.toString().length != 0) setText(ytext.toString());

    if (isFirstUser) {
      console.log('You are the first user in this document. Initiating...');
      editorRef.current.dispatch({
        changes: {
          from: 0,
          to: editorRef.current.state.doc.length,
          insert: text,
        },
      });
    } else if (syncText) {
      console.log('setting text');
      editorRef.current.dispatch({
        changes: {
          from: 0,
          to: editorRef.current.state.doc.length,
          insert: text,
        },
      });
      setSyncText(false);
    }
  }, [syncText, ready, initialized]);

  return html`
      <${CodeEditor} $shown="${shown}" id="${id}-editor" class=${className}><//>
      <${HiddenTextArea} value=${text} name=${name} id=${id}><//>
  `;
};

console.log('CodeMirror component loaded');

export default CodeMirror