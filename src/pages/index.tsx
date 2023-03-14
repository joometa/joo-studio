import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card } from "@components/home/Card";
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
        <title>jootudio.com</title>
        <meta name="title" content="jootudio.com" />
        <meta
          name="description"
          content="달력(Calendar), 음력달력, 날짜 계산기 등의 서비스를 제공합니다."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jootudio.com/" />
        <meta property="og:title" content="jootudio.com" />
        <meta
          property="og:description"
          content="달력(Calendar), 음력달력, 날짜 계산기 등의 서비스를 제공합니다."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/Mnx7ZvB/ogImage.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jootudio.com/" />
        <meta property="twitter:title" content="jootudio.com" />
        <meta
          property="twitter:description"
          content="달력(Calendar), 음력달력, 날짜 계산기 등의 서비스를 제공합니다."
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/Mnx7ZvB/ogImage.png"
        />
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
