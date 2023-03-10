import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import { Header } from "./Header";
import { Days } from "./Days";
import { Cells } from "./Cells";
import KOREAHolidays from "@data/holiday/korea.json";
import CHINAHolidays from "@data/holiday/china.json";
import USAHolidays from "@data/holiday/usa.json";

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentYear, setCurrentYear] = useState<string>(
    format(new Date(), "yyyy")
  );
  const [holidays, setHolidays] = useState<any>({});

  const handleClickPrevMonth = () => {
    const change = subMonths(currentMonth, 1);
    if (currentYear !== format(change, "yyyy")) {
      setCurrentYear(format(change, "yyyy"));
    }
    setCurrentMonth(change);
  };
  const handleClickNextMonth = () => {
    const change = addMonths(currentMonth, 1);
    if (currentYear !== format(change, "yyyy")) {
      setCurrentYear(format(change, "yyyy"));
    }
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  useEffect(() => {
    let tempHolidays: any = {};

    KOREAHolidays.forEach((data) => {
      const key = data.start.date as string;
      tempHolidays[key] = [data.summary, data.description === "Public holiday"];
    });
    setHolidays(tempHolidays);
  }, []);

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
        holidays={holidays}
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
