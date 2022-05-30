import styles from "./Nav.module.css";
import Link from "next/link";

const Nav = ({ setIsActive, isActive }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>Platinum</p>
        <div className={styles.linkContainer}>
          {/* <Link href="/services"><a className={styles.link}>Services</a></Link> */}
          <Link href="/estimates">
            <a className={styles.link}>Free estimates</a>
          </Link>
          <Link href="/contact">
            <a className={styles.contactBtn}>Contact</a>
          </Link>
        </div>
        <div
          className={styles.mobileBurgerContainer}
          onClick={() => setIsActive(!isActive)}
        >
          <div className={styles.barOne}></div>
          <div className={styles.barTwo}></div>
          <div className={styles.barThree}></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
