import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  ref: React.MutableRefObject<any>;
}

export function SideDrawer({ isOpen, onOpen, onClose, ref }: Props) {
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
          <DrawerHeader>Home</DrawerHeader>

          <DrawerBody>
            <Button colorScheme="teal" variant="link">
              달력
            </Button>
            <Button colorScheme="teal" variant="link">
              날짜 계산기
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
