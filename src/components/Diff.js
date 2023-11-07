import { MergeView } from "@codemirror/merge"
import { EditorView, basicSetup } from "codemirror"
import { EditorState } from "@codemirror/state"
import { useRef, useEffect } from 'preact/hooks'
import { CodeEditor } from './CodeMirror';
import { html } from "htm/preact";

const initMergeView = ({ old, current }) => {
  let basicReadOnly = [
    basicSetup,
    EditorView.editable.of(false),
    EditorState.readOnly.of(true),
  ]

  return new MergeView({
    a: {
      doc: old,
      extensions: basicReadOnly
    },
    b: {
      doc: current,
      extensions: basicReadOnly
    },
    orientation: "b-a"
  });
}

const Diff = ({ oldText, text }) => {
  let leftRef = useRef(null);
  let rightRef = useRef(null);
  let mergeView = useRef(null);

  useEffect(
    () => {
      if (mergeView.current) {
        return false;
      }
      mergeView.current = initMergeView({
        old: oldText,
        current: text,
      });

      leftRef.current.appendChild(mergeView.current.b.dom)
      rightRef.current.appendChild(mergeView.current.a.dom)
    },
    []
  )

  return html`
  <div style="display:flex; width: 100%">
    <${CodeEditor} ref=${leftRef} $shown=${true}/>
    <${CodeEditor} ref=${rightRef} $shown=${true}/>
  </div>`
}

export default Diff