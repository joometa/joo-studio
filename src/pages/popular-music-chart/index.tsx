import React, { useEffect, useState } from "react";
import { Title } from "@/components/layout";
import styled from "@emotion/styled";
import { InferGetStaticPropsType } from "next";
import KY_Chart from "@data/song-chart/ky-chart.json";
import TJ_Chart from "@data/song-chart/tj-chart.json";
import { crawlerTrigger } from "../../../server/crawler/song-chart/index";
import { Select } from "@chakra-ui/react";
import { format } from "date-fns";
import { RankTable } from "@components/popularMusicChart";

export const getStaticProps = async () => {
  await crawlerTrigger();

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;

  return {
    props: {
      tj: TJ_Chart,
      ky: KY_Chart,
    },
    revalidate: day * 3,
  };
};

export default function PopularMusicChart({
  tj,
  ky,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [media, setMedia] = useState<string>("tj");

  return (
    <>
      <Title title="노래방 인기 차트" />
      <Container>
        <div className="header">
          <div className="select-box">
            <span>노래방 기기선택 ::</span>
            <Select
              placeholder="-"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setMedia(e.target.value)
              }
              size="sm"
              defaultValue="tj"
            >
              <option value="tj">TJ 미디어</option>
              <option value="ky">KY 금영</option>
            </Select>
          </div>
        </div>
        {media === "tj" && (
          <>
            <div className="update-date">업데이트 날짜 : {tj.crawledDate}</div>
            <RankTable data={tj.musicList} />
          </>
        )}
        {media === "ky" && (
          <>
            <div className="update-date">업데이트 날짜 : {ky.crawledDate}</div>
            <RankTable data={ky.musicList} />
          </>
        )}
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

  .header {
    width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .select-box {
      padding: 0px;
      margin-bottom: 10px;
      span {
        width: 100%;
        margin-right: 10px;
      }
      display: flex;
      align-items: center;
      font-size: 0.8rem;

      .chakra-select__wrapper {
        max-width: 130px;
        .chakra-select {
          width: 110px;
        }
      }
    }
    @media (max-width: 1200px) {
      max-width: 90vw;
      width: 100%;
    }
  }
  .update-date {
    font-size: 0.75rem;
    color: gray;
    display: flex;
    margin-bottom: 10px;
  }
`;
