import { Header } from "@components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import styled from "@emotion/styled";
import Script from "next/script";

const theme = extendBaseTheme({
  components: chakraTheme.components,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', ${process.env.GA_TRACKING_ID});
          `,
        }}
      />

      <ChakraBaseProvider theme={theme}>
        <Header />
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </ChakraBaseProvider>
    </>
  );
}

const MainContainer = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: auto;
  padding-top: 74px;
`;
