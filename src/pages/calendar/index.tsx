import Head from "next/head";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Calendar as RCalendar } from "@components/calendar";
import { Meta } from "@components/calendar/Meta";
import { CountryMap } from "@components/calendar/types";
import { Select } from "@chakra-ui/react";
import { Title } from "@components/layout";

export default function Calendar() {
  const [country, setCountry] = useState<string | CountryMap>("korea");
  const COUNTRY = {
    korea: "대한민국",
    usa: "미국",
    china: "중국",
  };

  return (
    <>
      <Head>
        <Meta />
      </Head>
      <Title title="달력 / Calendar" />
      <Container>
        <div className="country-group">
          <span>공휴일 국가 선택</span>
          <Select
            placeholder="-"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setCountry(e.target.value)
            }
            size="sm"
            defaultValue="korea"
          >
            <option value="korea">대한민국</option>
            <option value="usa">미국</option>
            <option value="china">중국</option>
          </Select>
        </div>
        <RCalendar country={country as CountryMap} />
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 110vh;

  .country-group {
    display: flex;
    width: 1000px;
    margin: auto;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.8rem;
    margin-bottom: 10px;
    margin-top: 25px;
    span {
      margin-right: 20px;
    }

    .chakra-select__wrapper {
      max-width: 100px;
    }

    @media (max-width: 1200px) {
      max-width: 90vw;
      width: 100%;
    }
  }
`;
