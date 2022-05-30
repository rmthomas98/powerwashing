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
        <Script id="my-script-3" strategy="lazyOnload">
          {` window.intercomSettings = {
          api_base: "https://api-iam.intercom.io",
          app_id: "sds9xuyp"};`}
        </Script>
        <Script id="my-script-4" strategy="lazyOnload">
          {`(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/sds9xuyp';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`}
        </Script>
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
      <Script id="my-script-3" strategy="lazyOnload">
        {` window.intercomSettings = {
          api_base: "https://api-iam.intercom.io",
          app_id: "sds9xuyp"};`}
      </Script>
      <Script id="my-script-4" strategy="lazyOnload">
        {`(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/sds9xuyp';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`}
      </Script>
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
