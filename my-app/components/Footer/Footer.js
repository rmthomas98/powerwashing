import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.title}>
            <p>Platinum</p>
          </div>
          <div className={styles.about}>
            <p className={styles.sectionHeader}>Resources</p>
            <Link href="/estimates">
              <a className={styles.link}>Free Estimates</a>
            </Link>
            {/* <Link href="/">
              <a className={styles.link}>Services</a>
            </Link> */}
          </div>
          <div className={styles.support}>
            <p className={styles.sectionHeader}>Support</p>
            <Link href="/contact">
              <a className={styles.link}>Contact</a>
            </Link>
          </div>
          <div className={styles.socials}>
            <p className={styles.sectionHeader}>Socials</p>
            <a
              href="https://www.facebook.com/PlatinumPowerWashing/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
              style={{ display: "flex", alignItems: "center" }}
            >
              Facebook
            </a>
          </div>
        </div>
        <p className={styles.copyright}>&copy; Platinum 2022.</p>
      </div>
    </div>
  );
};

export default Footer;
