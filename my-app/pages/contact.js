import Overview from "../components/Contact/Overview/Overview";
import ContactMethods from "../components/Contact/ContactMethods/ContactMethods";
import ContactForm from "../components/Contact/ContactForm/ContactForm";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Platinum | Contact Us</title>
        <meta
          name="description"
          content="Contact us through email, phone, or live chat to setup a free estimate or to ask any questions you may have."
        />
        <meta
          name="keywords"
          content="powerwashing, near me, dayton, ohio, power, washing, sidewalk, driveway, house, free estimate"
        />
      </Head>
      <Overview />
      <ContactMethods />
      <ContactForm />
    </>
  );
};

export default Contact;
