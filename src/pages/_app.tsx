import { Header } from "@components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import styled from "@emotion/styled";
import Script from "next/script";
import { useRouter } from "next/router";
import { GTM_ID, pageview } from "../lib/gtm";
import { useEffect } from "react";
import Head from "next/head";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const theme = extendBaseTheme({
  components: chakraTheme.components,
});

export default function App({ Component, pageProps }: AppProps) {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCb-UdjNr7D0p3PGzgpBNXG97RA-4GIR3Y",
    authDomain: "jootudio.firebaseapp.com",
    projectId: "jootudio",
    storageBucket: "jootudio.appspot.com",
    messagingSenderId: "560662392455",
    appId: "1:560662392455:web:0f51d882fd5e9d4dbd5222",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
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

  @media (max-width: 1200px) {
    max-width: 90vw;
    width: 100%;
  }
`;
