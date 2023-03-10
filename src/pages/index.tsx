import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card } from "@components/home/Card";
import { Grid, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleClickCard = (value: string) => {
    router.push(value);
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
        <meta property="og:image" content="./images/ogImage.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jootudio.com/" />
        <meta property="twitter:title" content="jootudio.com" />
        <meta
          property="twitter:description"
          content="달력(Calendar), 음력달력, 날짜 계산기 등의 서비스를 제공합니다."
        />
        <meta property="twitter:image" content="./images/ogImage.png" />
      </Head>
      <main>
        <Container>
          <div className="title">
            <Heading>간편 정보</Heading>
          </div>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Card
              content="달력"
              src="./images/calendar.png"
              onClick={() => handleClickCard("/calendar")}
            />
            <Card
              content="날짜계산기"
              src="./images/calculator.png"
              onClick={() => handleClickCard("/")}
            />
          </Grid>
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

  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    .button-group {
      max-width: 90vw;
      width: 100%;
    }
  }
`;
