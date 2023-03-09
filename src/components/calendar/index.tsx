import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import { Header } from "./Header";
import { Days } from "./Days";
import { Cells } from "./Cells";

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleClickPrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const handleClickNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <Container>
      <Header
        currentMonth={currentMonth}
        onPrevMonth={handleClickPrevMonth}
        onNextMonth={handleClickNextMonth}
      />
      <Days />
      <Cells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={() => {}}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 1000px;
  height: 800px;
  border: 0.6px solid #9e9e9e1a;
  border-radius: 9px;
  box-shadow: 10px 10px 12px -4px #0000001a;
  padding: 20px;
  margin: auto;

  @media (max-width: 1200px) {
    max-width: 90vw;
    width: 100%;
  }
`;
