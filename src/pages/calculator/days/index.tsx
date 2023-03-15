import React, { useCallback, useState } from "react";
import { Title } from "@components/layout";
import styled from "@emotion/styled";
import { NumberForm, Meta } from "@components/calculator/days";
import {
  Button,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { format, add, sub } from "date-fns";
import Head from "next/head";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface Days {
  year: number;
  month: number;
  day: number;
}

export default function CalculateDays() {
  const toast = useToast();
  const initDays: Days = {
    year: Number(format(new Date(), "yyyy")),
    month: Number(format(new Date(), "MM")),
    day: Number(format(new Date(), "dd")),
  };
  const [date, setDate] = useState<Days>(initDays);
  const [inputNum, setInputNum] = useState<number | undefined>();
  const [radioValue, setRadioValue] = useState<string>("before");
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [resultInfo, setResultInfo] = useState<Days>(initDays);

  const handleChangeYear = (value: number) =>
    setDate((prev) => ({ ...prev, year: value }));
  const handleChangeMonth = (value: number) =>
    setDate((prev) => ({ ...prev, month: value }));
  const handleChangeDay = (value: number) =>
    setDate((prev) => ({ ...prev, day: value }));

  const handleClickAutoSetToday = () => {
    setDate(initDays);
    toast({
      title: "오늘 날짜로 초기화 되었습니다.",
      status: "success",
      isClosable: true,
    });
  };

  const handleClickCalculate = () => {
    if (inputNum == null) {
      toast({
        title: "값을 입력해주세요.",
        status: "warning",
        isClosable: true,
      });
      return;
    }
    const targetDate = `${date.year}-${date.month}-${date.day}`;

    let temp = {
      year: 0,
      month: 0,
      day: 0,
    };
    const decrease = sub(new Date(targetDate), { days: inputNum });
    const increase = add(new Date(targetDate), { days: inputNum });
    if (radioValue === "before") {
      temp = {
        year: Number(format(decrease, "yyyy")),
        month: Number(format(decrease, "MM")),
        day: Number(format(decrease, "dd")),
      };
      setResultInfo(temp);
    } else {
      temp = {
        year: Number(format(increase, "yyyy")),
        month: Number(format(increase, "MM")),
        day: Number(format(increase, "dd")),
      };
      setResultInfo(temp);
    }
    setIsCalculated(true);
  };

  const handleClickGoCalculate = () => {
    setIsCalculated(false);
  };

  const handleChangeRadio = (value: string) => {
    setRadioValue(value);
  };

  return (
    <>
      <Head>
        <Meta />
      </Head>
      <Title title="날짜 계산기" />
      <Container>
        {!isCalculated ? (
          <>
            <div className="content">
              <div className="date-box">
                <NumberForm
                  type="year"
                  defaultValue={date.year}
                  value={date.year}
                  onChange={handleChangeYear}
                />
                <span className="unit">년</span>

                <NumberForm
                  type="month"
                  defaultValue={date.month}
                  value={date.month}
                  onChange={handleChangeMonth}
                />
                <span className="unit">월</span>
                <NumberForm
                  type="day"
                  defaultValue={date.day}
                  value={date.day}
                  onChange={handleChangeDay}
                />
                <span className="unit">일</span>
              </div>
              <p className="desc">로부터</p>
              <div className="calculate-box">
                <NumberInput
                  value={inputNum}
                  onChange={(_, num) => setInputNum(num)}
                >
                  <NumberInputField />
                </NumberInput>
                <span className="unit">일</span>
                <span className="unit" style={{ color: "gray" }}>
                  {"::"}
                </span>
                <RadioGroup defaultValue="before" onChange={handleChangeRadio}>
                  <Stack spacing={4} direction="row">
                    <Radio colorScheme="red" value="before">
                      전
                    </Radio>
                    <Radio colorScheme="blue" value="after">
                      후
                    </Radio>
                  </Stack>
                </RadioGroup>
              </div>
              <div className="result-box"></div>
              <div className="button-box">
                <Button
                  colorScheme="gray"
                  style={{ marginRight: "20px" }}
                  onClick={() => handleClickAutoSetToday()}
                >
                  오늘 날짜로 초기화
                </Button>
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
                <h2>{`${date.year}년 ${date.month}월 ${date.day}일 로부터 ${
                  inputNum ?? "O"
                }일 ${radioValue === "before" ? "전은" : "후는"}`}</h2>
                <desc>
                  <strong>{`${resultInfo.year}년 ${resultInfo.month}월 ${resultInfo.day}일 `}</strong>
                  입니다.
                </desc>
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
  .result {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 10%;

    .icon-box {
    }

    .info-box {
      display: flex;
      margin-bottom: 40px;
      flex-direction: column;
      align-items: center;
      h2 {
        padding: 15px;
      }
      desc {
        text-align: center;
        strong {
          font-size: 1.2em;
        }
      }
    }
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
      margin-bottom: 20px;

      .unit {
        margin: 10px;
        font-weight: 500;
        margin-right: 12px;

        :last-child {
          margin-right: 0;
        }
      }
    }

    .desc {
      font-weight: 600;
      margin-bottom: 20px;
    }

    .calculate-box {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .unit {
        margin: 10px;
        font-weight: 500;
      }

      .chakra-numberinput {
        max-width: 100px;
      }
    }
    .button-box {
    }
  }
`;
