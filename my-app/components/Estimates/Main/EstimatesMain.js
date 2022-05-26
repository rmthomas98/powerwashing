import styles from "./EstimatesMain.module.css";
import Link from "next/link";

const EstimatesMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>Schedule a free estimate today.</p>
        <p className={styles.description}>
          You don&#39;t have to worry about spending money when receiving an
          estimate from us. All of our quotes are 100% free. All you have to do
          is set up an appointment.
        </p>
        <div className={styles.btnContainer}>
          <Link href="/contact">
            <a className={styles.estimateBtn}>Get estimate now</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstimatesMain;
