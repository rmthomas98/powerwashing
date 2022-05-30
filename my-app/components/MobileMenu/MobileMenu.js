import styles from "./MobileMenu.module.css";
import Link from "next/link";

const MobileMenu = ({ isActive, setIsActive }) => {
  return (
    <>
      <div
        className={isActive ? styles.overlay : styles.hide}
        onClick={() => setIsActive(false)}
      ></div>
      <div className={isActive ? styles.show : styles.wrapper}>
        <div className={styles.container}>
          <p className={styles.header}>Platinum</p>
          <Link href="/contact">
            <a
              className={styles.link}
              style={{ opacity: isActive ? 1 : 0 }}
              onClick={() => setIsActive(false)}
            >
              Contact
            </a>
          </Link>
          <Link href="/estimates">
            <a
              style={{ opacity: isActive ? 1 : 0 }}
              className={styles.link}
              onClick={() => setIsActive(false)}
            >
              Free Estimate
            </a>
          </Link>
          <a
            style={{ opacity: isActive ? 1 : 0 }}
            href="https://www.facebook.com/PlatinumPowerWashing/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Facebook
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
