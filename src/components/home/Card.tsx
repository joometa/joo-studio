import React from "react";
import {
  Card as CCard,
  CardBody,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  content: string;
  src: string;
  onClick: () => void;
}

export function Card({ content, src, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      <CCard maxW="sm">
        <CardBody>
          <Image src={src} alt="image" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{content}</Heading>
          </Stack>
        </CardBody>
      </CCard>
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
  transition: 0.4s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;
