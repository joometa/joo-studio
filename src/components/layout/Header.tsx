import React, { useState, useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import {
  useDisclosure,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SideDrawer } from "./SideDrawer";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

export function Header() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const btnRef = React.useRef<any>(null);

  const [lang, setLang] = useState<"ko" | "en">("ko");
  const LANG = {
    ko: "한국어",
    en: "English",
  };

  const handleScroll = (e: any) => {
    console.log(e.srcElement.scrollingElement.scrollTop);
    setScrollHeight(e.srcElement.scrollingElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Container>
        <div className="button-group">
          <div className="test">
            <Button ref={btnRef} onClick={onOpen} size="md" variant="outline">
              <HamburgerIcon />
            </Button>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {LANG[lang]}
              </MenuButton>
              <MenuList>
                <MenuItem value="ko">한국어</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </Container>
      <SideDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 64px;
  background: #fff;
  display: flex;
  justify-content: center;
  z-index: 100;

  .button-group {
    position: relative;
    max-width: 1440px;
    width: 100%;
    z-index: 100;
    padding-top: 10px;
    padding-bottom: 10px;

    .test {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    .button-group {
      max-width: 90vw;
      width: 100%;
    }
  }
`;
