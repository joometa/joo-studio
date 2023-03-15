import Head from "next/head";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Calendar as RCalendar } from "@components/calendar";
import { Meta } from "@components/calendar/Meta";
import { CountryMap } from "@components/calendar/types";
import { Checkbox, Select } from "@chakra-ui/react";
import { Title } from "@components/layout";

export default function Calendar() {
  const [country, setCountry] = useState<string | CountryMap>("korea");
  const [isCheckedGoodDay, setIsCheckedGoodDay] = useState<boolean>(false);
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
        <div className="header">
          <div className="country-group">
            <span>공휴일 국가 ::</span>
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

          <div className="control-box">
            <Checkbox
              size="sm"
              colorScheme="green"
              onChange={(e) => setIsCheckedGoodDay(e.target.checked)}
            >
              손없는날
            </Checkbox>
          </div>
        </div>
        <RCalendar
          country={country as CountryMap}
          isCheckedGoodDay={isCheckedGoodDay}
        />
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 110vh;
  .header {
    width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .control-box {
      display: flex;
      align-items: center;
      height: 32px;
      margin-bottom: 10px;
      margin-top: 25px;
      margin-left: 20px;

      .chakra-checkbox__label {
        font-size: 0.8rem;
      }
    }

    .country-group {
      align-items: center;
      justify-content: flex-end;
      display: flex;
      font-size: 0.8rem;
      margin-bottom: 10px;
      margin-top: 25px;
      span {
        min-width: 75px;
      }

      .chakra-select__wrapper {
        max-width: 100px;
      }
    }
    @media (max-width: 1200px) {
      max-width: 90vw;
      width: 100%;
    }
  }
`;
