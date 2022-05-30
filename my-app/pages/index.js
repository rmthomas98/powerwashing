import Nav from "../components/Home/Nav/Nav";
import Video from "../components/Home/Video/Video";
import Driveway from "../components/Home/Driveway/Driveway";
import Deck from "../components/Home/Deck/Deck";
import Patio from "../components/Home/Patio/Patio";
import Head from "next/head";

const Index = () => {
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
      <Nav />
      <Video />
      <Driveway />
      <Deck />
      <Patio />
    </>
  );
};

export default Index;
