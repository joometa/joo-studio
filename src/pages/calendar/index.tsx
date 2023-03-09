import styled from "@emotion/styled";
import React from "react";
import { Calendar as RCalendar } from "@components/calendar";

export default function Calendar() {
  return (
    <Container>
      <RCalendar />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 100px;
`;
