import styles from "./DarkNav.module.css";
import Link from "next/link";
import useScrollPosition from "@react-hook/window-scroll";

const Nav = () => {
  const scrollPos = useScrollPosition(60);

  return (
    <div className={scrollPos > 20 ? styles.boxShadow : styles.wrapper}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.title}>Platinum</a>
        </Link>
        <div className={styles.linkContainer}>
          {/* <Link href="/services"><a className={styles.link}>Services</a></Link> */}
          <Link href="/estimates">
            <a className={styles.link}>free estimates</a>
          </Link>
          <Link href="/contact">
            <a className={styles.contactBtn}>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
