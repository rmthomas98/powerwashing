import Nav from "../components/Home/Nav/Nav";
import Video from "../components/Home/Video/Video";
import Driveway from "../components/Home/Driveway/Driveway";
import Deck from "../components/Home/Deck/Deck";
import Patio from "../components/Home/Patio/Patio";
import Head from "next/head";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    if (width > 580) setIsActive(false);
  }, [width]);

  return (
    <>
      <Head>
        <title>Platinum Power Washing</title>
        <meta
          name="description"
          content="We offer power washing services in, our around Dayton, Ohio. We can professionaly power wash your driveway, sidewalk, patio, and any kind of walkway."
        />
        <meta
          name="keywords"
          content="powerwashing, near me, dayton, ohio, power, washing, sidewalk, driveway, house, free estimate"
        />
      </Head>
      <Nav setIsActive={setIsActive} isActive={isActive} />
      <Video />
      <Driveway />
      <Deck />
      <Patio />
      <MobileMenu isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Index;
