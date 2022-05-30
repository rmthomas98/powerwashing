import "../styles/globals.css";
import { useRouter } from "next/router";
import DarkNav from "../components/DarkNav/DarkNav";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.endsWith("/")) {
    return (
      <>
        <Script
          id="my-script"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-D7002VLQBE`}
        ></Script>
        <Script strategy="lazyOnload" id="my-script-2">
          {`window.dataLayer = window.dataLayer || [];
        function gtag() {dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "G-D7002VLQBE");`}
        </Script>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <Script
        id="my-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-D7002VLQBE`}
      ></Script>
      <Script strategy="lazyOnload" id="my-script-2">
        {`window.dataLayer = window.dataLayer || [];
        function gtag() {dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "G-D7002VLQBE");`}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DarkNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
