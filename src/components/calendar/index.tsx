import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import { Header } from "./Header";
import { Days } from "./Days";
import { Cells } from "./Cells";

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
    console.log("test1\n\n", process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
    // fetch("/holiday")
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/ko.south_korea%23holiday%40group.v.calendar.google.com/events?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&orderBy=startTime&singleEvents=true&timeMin=1990-01-01T00:00:00Z&timeMax=2041-01-01T00:00:00Z`
    )
      .then((res) => res.json())
      .then((data) => {
        let tempHolidays: any = {};
        data.items &&
          data.items.forEach((item: any) => {
            const key = item.start.date as string;
            tempHolidays[key] = [item.summary, item.description === "공휴일"];
          });
        console.log(tempHolidays);
        setHolidays(tempHolidays);
      });
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
