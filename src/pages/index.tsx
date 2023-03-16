import Head from "next/head";
import { Inter } from "next/font/google";
import { Card, Meta } from "@components/home";
import { Grid, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { mainCardClick } from "@/lib/gtm";

export default function Home() {
  const router = useRouter();

  const handleClickCard = (value: string) => {
    router.push(value);
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
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <Card
                content="달력"
                src="./images/calendar.png"
                onClick={() => handleClickCard("/calendar")}
              />
              <Card
                content="날짜계산기"
                src="./images/calculator.png"
                onClick={() => handleClickCard("/calculator/days")}
              />
              <Card
                content="연도별 손없는날"
                src="./images/clover.png"
                onClick={() => handleClickCard("/goodday")}
              />
              <Card
                content="만나이 계산"
                src="./images/age.png"
                onClick={() => handleClickCard("/calculator/age")}
              />
            </Grid>
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
    max-width: 1400px;
    width: 100%;
    margin: auto;
    @media (max-width: 1200px) {
      max-width: 90vw;
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
