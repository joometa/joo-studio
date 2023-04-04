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
import styled from "@emotion/styled";

interface musicData {
  rank: number;
  songNumber: number;
  songTitle: string;
  singer: string;
}

interface Props {
  data: musicData[];
}

export function RankTable({ data }: Props) {
  return (
    <TableWrap>
      <TableContainer>
        <Table
          variant="simple"
          colorScheme="blackAlpha"
          style={{ borderRadius: "10px", overflow: "hidden" }}
        >
          <Thead
            style={{
              background: "#f5f5f5",
            }}
          >
            <Tr>
              <Th>순위</Th>
              <Th>곡번호</Th>
              <Th>곡명</Th>
              <Th>아티스트</Th>
            </Tr>
          </Thead>
          <Tbody style={{ fontSize: "0.9rem" }}>
            {data &&
              data.map((data, idx: number) => (
                <>
                  <Tr key={data.songNumber + data.singer}>
                    <Td>{data.rank}</Td>
                    <Td>{data.songNumber}</Td>
                    <Td>{data.songTitle}</Td>
                    <Td>{data.singer}</Td>
                  </Tr>
                </>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </TableWrap>
  );
}

const TableWrap = styled.div`
  @media (max-width: 1200px) {
    max-width: 90vw;
    width: 100%;
  }
`;
