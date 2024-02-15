import { html } from "htm/preact";
import { useRef, useEffect, useState, useCallback } from 'preact/hooks'
import { styled } from 'styled-components';
import { highlightActiveLine } from "@codemirror/view"
import { EditorView, minimalSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { yCollab } from "y-codemirror.next";
import { markdown } from "@codemirror/lang-markdown";

const YCommentWrapper = styled.div`
    position:absolute; 
    top:${props => props.top + 20}px; 
    left: 75px;
    z-index: 3; 
    right: 0px;
    background-color: var(--gray-500);

    .cm-editor {
      background-color: var(--gray-500);
    }

    .cm-ySelectionInfo {
      z-index: 1004;
    }

    .cm-gutter {
        background-color: var(--gray-500);
    }
`
const YComment = ({ ycomments, shownComments, commentId }) => {
  let cmref = useRef(null);

  const updateHeight = useCallback(
    (update) => {
      if (update.heightChanged) {
        ycomments.syncHeight(commentId, cmref.current.clientHeight)
      }
    },
    [commentId]
  )

  useEffect(() => {
    if (!cmref.current) {
      return;
    }
    const ytext = ycomments.getTextForComment(commentId);
    const view = new EditorView({
      state: EditorState.create({
        doc: ytext.toString(),
        extensions: [
          EditorView.lineWrapping,
          EditorView.updateListener.of(updateHeight),
          minimalSetup,
          markdown(),
          highlightActiveLine(),
          yCollab(
            ytext,
            ycomments.getProvider().awareness
          )
        ]
      }),
      parent: cmref.current
    });
    view.focus();

    return () => {
      view.destroy();
    };
  }, [cmref])

  return html`
    <${YCommentWrapper} top=${shownComments[commentId].top}>
        <div style="display: ${shownComments[commentId].isShown ? 'block' : 'none'}" >
          <div ref=${cmref}></div>
        </div>
    <//>`
}

export const YCommentsParent = ({ ycomments, comments }) => {
  let createCommentPopup = useCallback(
    (commentId) => html`
      <${YComment} 
        key=${commentId}
        commentId=${commentId}
        ycomments=${ycomments}
        shownComments=${comments}
      />`,
    [ycomments, comments]
  );

  let [elems, setElems] = useState(Object.keys(comments).map(createCommentPopup));

  useEffect(
    () => setElems(Object.keys(comments).map(createCommentPopup)), 
    [comments]
  )

  return html`${elems}`
}