import { Title } from "@/components/layout";
import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";

export default function index() {
  return (
    <>
      <Head>hi</Head>
      <Title title="썸네일 생성기" />
      <Container>hello</Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  hight: 100%;
`;
