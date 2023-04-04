import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { EditorProps, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

interface CustomEditorProps {
  editorState?: EditorState;
  onEditorStateChange?: Dispatch<SetStateAction<EditorState | undefined>>;
  style?: any;
}

export function CustomEditor({
  editorState,
  onEditorStateChange,
  style,
}: CustomEditorProps) {
  return (
    <Wrapper style={style}>
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        toolbarClassName="editorToolbar-hidden"
        editorClassName="editor-class"
        toolbar={{
          options: ["inline", "list", "textAlign"],
        }}
        localization={{ locale: "ko" }}
        onEditorStateChange={onEditorStateChange}
        editorStyle={{ height: "100%" }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 18px;
  height: 500px;
  border: 1px solid lightgray;
  padding: 20px;
`;
