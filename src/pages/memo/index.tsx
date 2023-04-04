import { Title } from "@/components/layout";
import styled from "@emotion/styled";
import Head from "next/head";
import React, { useState } from "react";
import { CustomEditor } from "@components/memo";
import { EditorState } from "draft-js";
import { Button } from "@chakra-ui/react";
import { Meta } from "@components/memo";

export default function Memo() {
  const [editorState, setEditorState] = useState<EditorState | undefined>(
    undefined
  );

  return (
    <>
      <Head>
        <Meta />
      </Head>
      <Title title="메모장" />
      <Container>
        <CustomEditor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
        {/* <div className="button-box">
          <Button>복사하기</Button>
        </div> */}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  margin: auto;
  margin-top: 25px;
  padding-bottom: 50px;
  max-width: 1000px;

  .button-box {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
`;
