import EstimatesMain from "../components/Estimates/Main/EstimatesMain";
import Steps from "../components/Estimates/Steps/Steps";
import Ready from "../components/Estimates/Ready/Ready";
import Faq from "../components/Estimates/Faq/Faq";
import Head from "next/head";

const Estimates = () => {
  return (
    <>
      <Head>
        <title>Platinum | Free Estimates</title>
        <meta
          name="description"
          content="Schedule a time for us to come out and give you a free estimate."
        />
        <meta
          name="keywords"
          content="powerwashing, near me, dayton, ohio, power, washing, sidewalk, driveway, house, free estimate"
        />
      </Head>
      <EstimatesMain />
      <Steps />
      <Faq />
      <Ready />
    </>
  );
};

export default Estimates;
