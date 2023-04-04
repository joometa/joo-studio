import Head from "next/head";
import { Inter } from "next/font/google";
import { Card, Meta } from "@components/home";
import { Grid, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { mainCardClick } from "@/lib/gtm";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const handleClickCard = (value: string) => {
    router
      .push(value)
      .then(() => window.scrollTo({ top: 0, behavior: "auto" }));
    mainCardClick(value);
  };

  return (
    <>
      <Head>
        <Meta />
      </Head>
      <main>
        <Container>
          <div className="title">
            <Heading>간편 정보</Heading>
          </div>
          <div className="card-container">
            <div className="card-wrap">
              <Card
                content="달력"
                src="./images/calendar.png"
                onClick={() => handleClickCard("/calendar")}
              />
            </div>
            <div className="card-wrap">
              <Card
                content="날짜계산기"
                src="./images/calculator.png"
                onClick={() => handleClickCard("/calculator/days")}
              />
            </div>
            <div className="card-wrap">
              <Card
                content="연도별 손없는날"
                src="./images/clover.png"
                onClick={() => handleClickCard("/good-day")}
              />
            </div>
            <div className="card-wrap">
              <Card
                content="만나이 계산"
                src="./images/age.png"
                onClick={() => handleClickCard("/calculator/age")}
              />
            </div>
            <div className="card-wrap">
              <Card
                content="노래방 인기 차트"
                src="./images/music-chart.png"
                onClick={() => handleClickCard("/popular-music-chart")}
              />
            </div>
            {/* <div className="card-wrap">
              <Card
                content="썸네일 생성기"
                src="./images/thumbnail.png"
                onClick={() => handleClickCard("/thumbnailMaker")}
              />
            </div> */}
          </div>
        </Container>
      </main>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: auto;

  .title {
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
  }
  .card-container {
    max-width: 90vw;
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: auto;

    @media screen and (min-width: 474px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1024px) {
      max-width: 1000px;
    }

    .card-wrap {
      padding: 15px;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .button-group {
      max-width: 90vw;
      width: 100%;
    }
  }
`;
