import { Title } from "@/components/layout";
import { Select } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { format, addDays } from "date-fns";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import { MonthTable, Meta } from "@components/goodday";
import { dayCalcDisplay } from "@components/calendar/lunar";

export default function GoodDay() {
  const CURRENT_YEAR = format(new Date(), "yyyy").toString();
  const optionArr = Array.from(
    new Array(30).fill(Number(CURRENT_YEAR)),
    (x, idx) => x - idx
  );

  const [selectedYear, setSelectedYear] = useState<string>(CURRENT_YEAR);

  const createGoodDays = useCallback(() => {
    const monthsArr: any[] = [[], [], [], [], [], [], [], [], [], [], [], []];
    const startDate = new Date(`${selectedYear}-01`);
    let year = Number(format(startDate, "yyyy"));
    let day = startDate;
    const GOOD_DAYS = [9, 10, 19, 20, 29, 30];

    while (year < Number(selectedYear) + 1) {
      const [y, m, d] = format(day, "yyyy-MM-dd")
        .split("-")
        .map((x) => Number(x));

      const lunar = dayCalcDisplay({
        startYear: y,
        startMonth: m,
        startDay: d,
      });

      const luDate = lunar && lunar.split(".")[1];

      if (GOOD_DAYS.includes(Number(luDate))) {
        const idx = m - 1;
        const tmpMonth = m.toString().padStart(2, "0");
        const tmpDay = d.toString().padStart(2, "0");
        monthsArr[idx].push(`${y}-${tmpMonth}-${tmpDay}`);
      }

      day = addDays(day, 1);
      year = Number(format(day, "yyyy"));
    }

    return monthsArr;
  }, [selectedYear]);

  return (
    <>
      <Head>
        <Meta />
      </Head>
      <Title title="연도별 손없는날" />
      <Container>
        <div className="year-control-box">
          <Select
            placeholder="-"
            size="sm"
            defaultValue={CURRENT_YEAR}
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
            }}
          >
            {optionArr.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </Select>
        </div>
        <div className="table-group">
          {createGoodDays().map((gooddays) => (
            <div className="grid-item-container" key={gooddays}>
              <MonthTable data={gooddays} />
            </div>
          ))}
        </div>
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

  .year-control-box {
    width: 100px;
    margin-left: auto;
  }

  .table-group {
    margin: auto;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;

    @media screen and (min-width: 768px) {
      max-width: 90vw;
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
      max-width: 90vw;
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
    }

    .grid-item-container {
      /* background: #f5f5f5; */
      border: 1.5px solid #f5f5f5;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 10px 10px 12px -4px #0000001a;

      :hover {
        cursor: pointer;
        transition: 0.4s ease;
        transform: scale(1.05);
      }
    }
  }
`;
