import styles from "./ContactMethods.module.css";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlinePhone } from "react-icons/ai";

const ContactMethods = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>How to reach us.</p>
        <div className={styles.flexContainer}>
          <div className={styles.childContainer}>
            <p className={styles.title}>By Email</p>
            <p className={styles.description}>
              Your email won’t get lost in our inbox. Submit a message below and
              a member of our client success team will contact you the same day
              your email is received.
            </p>
            <ScrollLink
              smooth
              to="contact-form"
              offset={-62}
              className={styles.actionBtn}
            >
              Send message
            </ScrollLink>
          </div>
          <div className={styles.childContainer}>
            <p className={styles.title}>By Phone</p>
            <p className={styles.description}>
              There are no hold times or long phone queues with us. You can
              reach our client success team by phone at:
            </p>
            <p
              className={styles.description}
              style={{ marginTop: 15, display: "flex", alignItems: "center" }}
            >
              <AiOutlinePhone size={20} style={{ marginRight: 5 }} />
              937-305-0170
            </p>
            <a href="tel:9373050170" className={styles.actionBtn}>
              Call us now
            </a>
          </div>
          <div className={styles.childContainer} style={{ marginRight: 0 }}>
            <p className={styles.title}>Live Chat</p>
            <p className={styles.description}>
              Need quick answers? Use our live chat feature for immediate
              assistance from a member of our client success team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;
