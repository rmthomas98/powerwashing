import styles from "./Patio.module.css";
import Link from "next/link";

const Patio = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>Stone & Brick Patios</p>
        {/* <p className={styles.description}></p> */}
        <div className={styles.buttonContainer}>
          <Link href="/estimates">
            <a className={styles.estimateBtn}>Get estimate</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Patio;
