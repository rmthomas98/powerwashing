import "../styles/globals.css";
import { useRouter } from "next/router";
import DarkNav from "../components/DarkNav/DarkNav";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.endsWith("/")) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <DarkNav />
      <Footer />
    </>
  );
}

export default MyApp;
