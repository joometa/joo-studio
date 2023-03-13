import Head from "next/head";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Calendar as RCalendar } from "@components/calendar";
import { CountryMap } from "@components/calendar/types";
import {
  Select,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
        {/* <!-- Primary Meta Tags --> */}
        <title>Calendar :: 달력(양력/음력), 공휴일 - jootudio.com</title>
        <meta
          name="title"
          content="Calendar :: 달력(양력/음력), 공휴일 - jootudio.com"
        />
        <meta
          name="description"
          content="국가별 공휴일과 음력을 확인할 수 있는 달력을 이용해 보세요.
Use the calendar to check national public holidays and the lunar calendar."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jootudio.com/calendar" />
        <meta
          property="og:title"
          content="Calendar :: 달력(양력/음력), 공휴일 - jootudio.com"
        />
        <meta
          property="og:description"
          content="국가별 공휴일과 음력을 확인할 수 있는 달력을 이용해 보세요.
Use the calendar to check national public holidays and the lunar calendar."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/Mnx7ZvB/ogImage.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jootudio.com/calendar" />
        <meta
          property="twitter:title"
          content="Calendar :: 달력(양력/음력), 공휴일 - jootudio.com"
        />
        <meta
          property="twitter:description"
          content="국가별 공휴일과 음력을 확인할 수 있는 달력을 이용해 보세요.
Use the calendar to check national public holidays and the lunar calendar."
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/Mnx7ZvB/ogImage.png"
        />
      </Head>
      <Container>
        <div className="country-group">
          <span>공휴일 국가 선택</span>
          <Select
            placeholder="-"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
  height: 100vh;
  padding-bottom: 100px;

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
