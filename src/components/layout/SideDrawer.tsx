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
import { menuClick } from "@/lib/gtm";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function SideDrawer({ isOpen, onOpen, onClose }: Props) {
  const router = useRouter();

  const handleClickMenu = async (path: string) => {
    await router.push(path);
    menuClick(path);
    onClose();
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Button
              variant="link"
              size="lg"
              onClick={() => handleClickMenu("/")}
            >
              Home
            </Button>
          </DrawerHeader>

          <DrawerBody>
            <ButtonGroup>
              <button onClick={() => handleClickMenu("/calendar")}>달력</button>
              <button onClick={() => handleClickMenu("/calculator/days")}>
                날짜 계산기
              </button>
              <button onClick={() => handleClickMenu("/goodday")}>
                연도별 손없는날
              </button>
              <button onClick={() => handleClickMenu("/calculator/age")}>
                만나이 계산
              </button>
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
