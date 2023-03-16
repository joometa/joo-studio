import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { endOfWeek, format, startOfWeek } from "date-fns";

interface Props {
  data: string[];
}

export function MonthTable({ data }: Props) {
  const changeToDays = (date: string) => {
    const fullDay = new Date(date);
    const d = Number(format(fullDay, "dd"));

    const sunDay = Number(format(startOfWeek(fullDay), "dd"));
    const saturday = Number(format(endOfWeek(fullDay), "dd"));
    if (Math.abs(sunDay - d) > 6) {
      const R_DAYS = ["토", "금", "목", "수", "화", "월", "일"];
      return R_DAYS[Math.abs(saturday - d)];
    } else {
      const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
      return DAYS[Math.abs(sunDay - d)];
    }
  };

  return (
    <TableContainer>
      <Table
        variant="simple"
        colorScheme="blackAlpha"
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        <TableCaption style={{ color: "#828182", fontSize: "0.8rem" }}>
          {Number(data[0].split("-")[1])}월
        </TableCaption>
        <Thead
          style={{
            background: "#f5f5f5",
          }}
        >
          <Tr>
            <Th>no.</Th>
            <Th>날짜</Th>
          </Tr>
        </Thead>
        <Tbody style={{ fontSize: "0.9rem" }}>
          {data &&
            data.map((date: string, idx: number) => (
              <>
                <Tr>
                  <Td>{idx + 1}</Td>
                  <Td
                    style={{
                      color: `${
                        changeToDays(date) === "일"
                          ? "red"
                          : changeToDays(date) === "토"
                          ? "blue"
                          : ""
                      }`,
                    }}
                  >
                    {date}
                    {`(${changeToDays(date)})`}
                  </Td>
                </Tr>
              </>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
