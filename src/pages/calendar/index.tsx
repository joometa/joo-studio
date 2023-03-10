import Head from "next/head";
import styled from "@emotion/styled";
import React from "react";
import { Calendar as RCalendar } from "@components/calendar";

export default function Calendar() {
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
        <RCalendar />
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 100px;
`;
