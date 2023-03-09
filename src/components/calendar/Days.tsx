import styled from "@emotion/styled";
import React from "react";

export function Days() {
  const days = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  return (
    <Container>
      {date.map((d, i) => (
        <div className="date" key={i}>
          {d}
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;

  .date {
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    :first-child {
      color: red;
    }
    :last-child {
      color: blue;
    }
  }
`;
