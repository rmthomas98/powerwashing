import styles from "./Ready.module.css";
import Link from "next/link";

const Ready = () => {
  return (
    <div className={styles.wrapper}>
      <div classnName={styles.container}>
        <p className={styles.title}>Ready to get an estimate?</p>
        <Link href="/contact">
          <a className={styles.getEstimateBtn}>Get Estimate</a>
        </Link>
      </div>
    </div>
  );
};

export default Ready;
