import { Header } from "@components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import styled from "@emotion/styled";

const theme = extendBaseTheme({
  components: chakraTheme.components,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Header />
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </ChakraBaseProvider>
  );
}

const MainContainer = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: auto;
  padding-top: 74px;
`;
