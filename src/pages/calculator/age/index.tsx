import { Title } from "@/components/layout";
import styled from "@emotion/styled";
import Head from "next/head";
import React, { useState } from "react";
import { NumberForm } from "@components/calculator/days";
import { Button, useToast } from "@chakra-ui/react";
import {
  format,
  add,
  sub,
  isAfter,
  differenceInDays,
  differenceInMonths,
} from "date-fns";
import { Days } from "@interface/calculator/types";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export default function Age() {
  const initDays: Days = {
    year: Number(format(new Date(), "yyyy")),
    month: Number(format(new Date(), "MM")),
    day: Number(format(new Date(), "dd")),
  };
  const [birth, setBirth] = useState<Days>(initDays);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [age, setAge] = useState<number>(0);
  const [aliveDays, setAliveDays] = useState<number>(0);
  const [aliveMonth, setAliveMonth] = useState<number>(0);

  const handleChangeYear = (value: number) =>
    setBirth((prev) => ({ ...prev, year: value }));
  const handleChangeMonth = (value: number) =>
    setBirth((prev) => ({ ...prev, month: value }));
  const handleChangeDay = (value: number) =>
    setBirth((prev) => ({ ...prev, day: value }));

  const handleClickCalculate = () => {
    const currentYear = Number(format(new Date(), "yyyy"));
    const BIRTH_DAY = `${birth.year}-${birth.month}-${birth.day}`;
    const isPassBirthDay = isAfter(
      new Date(),
      new Date(`${currentYear}-${birth.month}-${birth.day}`)
    );
    const tempAge = currentYear - birth.year;
    const realAge = isPassBirthDay ? tempAge : tempAge - 1;

    setAliveDays(differenceInDays(new Date(), new Date(BIRTH_DAY)));
    setAliveMonth(differenceInMonths(new Date(), new Date(BIRTH_DAY)));
    setAge(realAge);
    setIsCalculated(true);
  };
  const handleClickGoCalculate = () => {
    setIsCalculated(false);
  };

  return (
    <>
      <Head>hi</Head>
      <Title title="만나이 계산" />
      <Container>
        {!isCalculated ? (
          <>
            <div className="content">
              <h2 className="head-info">생년월일 입력</h2>
              <div className="date-box">
                <NumberForm
                  type="year"
                  defaultValue={birth.year}
                  value={birth.year}
                  onChange={handleChangeYear}
                />
                <span className="unit">년</span>

                <NumberForm
                  type="month"
                  defaultValue={birth.month}
                  value={birth.month}
                  onChange={handleChangeMonth}
                />
                <span className="unit">월</span>
                <NumberForm
                  type="day"
                  defaultValue={birth.day}
                  value={birth.day}
                  onChange={handleChangeDay}
                />
                <span className="unit">일</span>
              </div>
              <div className="result-box"></div>
              <div className="button-box">
                <Button
                  colorScheme="gray"
                  onClick={() => handleClickCalculate()}
                >
                  계산하기
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="result">
              <div className="icon-box">
                <InfoOutlineIcon boxSize={7} color="blue.500" />
              </div>
              <div className="info-box">
                <h2>{`${birth.year}년 ${birth.month}월 ${birth.day}일 출생일의`}</h2>
                <desc>
                  만나이는
                  <strong> {age}살 </strong>
                  입니다.
                </desc>
              </div>
              <div className="extra-info-box">
                <div className="extra-info">
                  오늘은 태어난지 <strong>{aliveDays.toLocaleString()}</strong>
                  일째되는 날입니다.
                </div>
                <div className="extra-info">
                  생후 <strong>{aliveMonth.toLocaleString()}</strong>
                  개월입니다.
                </div>
              </div>
              <Button
                colorScheme="gray"
                onClick={() => handleClickGoCalculate()}
              >
                다시 계산하기
              </Button>
            </div>
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;

  .head-info {
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 30px;
  }

  .content {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 10%;

    .date-box {
      display: flex;
      margin-bottom: 30px;

      .unit {
        margin: 10px;
        font-weight: 500;
        margin-right: 12px;

        :last-child {
          margin-right: 0;
        }
      }
    }
  }

  .result {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 10%;

    .info-box {
      display: flex;
      margin-bottom: 40px;
      flex-direction: column;
      align-items: center;
      h2 {
        padding: 15px;
        font-weight: 500;
        font-size: 1.1rem;
      }
      desc {
        text-align: center;
        strong {
          font-size: 1.2em;
        }
      }
    }

    .extra-info-box {
      border-top: 0.8px solid gray;
      border-bottom: 0.8px solid gray;
      padding-top: 20px;
      padding-bottom: 20px;
      margin-bottom: 30px;
      font-size: 0.9rem;
      font-weight: 500;
      color: #636262;

      .extra-info {
        padding: 4px;

        strong {
          color: black;
        }
      }
    }
  }
`;
