import styled from "@emotion/styled";
import React from "react";

interface Props {
  title: string;
}

export function Title({ title }: Props) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: #585858;
  padding-bottom: 10px;
  border-bottom: 0.5px solid #969696;
`;
