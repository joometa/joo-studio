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
import Swal from "sweetalert2";
import Head from "next/head";

interface Days {
  year: number;
  month: number;
  day: number;
}

export default function CalculateDays() {
  const toast = useToast();
  const initDays = {
    year: Number(format(new Date(), "yyyy")),
    month: Number(format(new Date(), "MM")),
    day: Number(format(new Date(), "dd")),
  };
  const [date, setDate] = useState<Days>(initDays);
  const [inputNum, setInputNum] = useState<number | undefined>();
  const [radioValue, setRadioValue] = useState<string>("before");

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
    let resultDate: string;
    if (radioValue === "before") {
      resultDate = format(
        sub(new Date(targetDate), { days: inputNum }),
        "yyyy년 MM월 dd일"
      ).toString();
    } else {
      resultDate = format(
        add(new Date(targetDate), { days: inputNum }),
        "yyyy년 MM월 dd일"
      ).toString();
    }
    Swal.fire({
      icon: "info",
      html: `<b>${date.year}년 ${date.month}월 ${date.day}일로부터
      ${inputNum}일 ${
        radioValue === "before" ? "전은" : "후는"
      }</b><br/><br/><strong>
      ${resultDate} 입니다.</strong>`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonColor: "#2979ff",
      confirmButtonText: "확인",
    });
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
            <Button colorScheme="gray" onClick={() => handleClickCalculate()}>
              계산하기
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;

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
