import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  ref: React.MutableRefObject<any>;
}

export function SideDrawer({ isOpen, onOpen, onClose, ref }: Props) {
  const router = useRouter();
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={ref}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Button variant="link" size="lg" onClick={() => router.push("/")}>
              Home
            </Button>
          </DrawerHeader>

          <DrawerBody>
            <ButtonGroup>
              <button onClick={() => router.push("/calendar")}>달력</button>
              <button>날짜 계산기</button>
            </ButtonGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    font-weight: 600;
    transition: 0.2s ease;
    margin-bottom: 15px;
    &:hover {
      font-weight: 600;
      color: #2979ff;
      transform: scale(1.05);
    }
  }
`;
