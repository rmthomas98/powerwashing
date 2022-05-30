import styles from "./Steps.module.css";
import message from "../../../public/assets/images/contact.svg";
import estimate from "../../../public/assets/images/estimate.svg";
import schedule from "../../../public/assets/images/schedule.svg";
import Image from "next/image";

const Steps = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>
          Getting an estimate is easier than ever.
        </p>
        <div className={styles.wrapperFlexContainer}>
          <div className={styles.flexContainer}>
            <Image
              src={message}
              alt="message"
              layout="fixed"
              height={85}
              width={85}
              quality={100}
            />
            <p className={styles.title}>Contact Us</p>
            <p className={styles.description}>
              Set up an appointment for us to come out and evaluate the job.
            </p>
          </div>
          <div className={styles.flexContainer}>
            <Image
              src={estimate}
              alt="estimate"
              layout="fixed"
              height={85}
              width={85}
              quality={100}
            />
            <p className={styles.title}>Receive Estimate</p>
            <p className={styles.description}>
              After we come out, we will send you an estimate as soon as
              possible.
            </p>
          </div>
          <div className={styles.flexContainer} style={{ marginRight: 0 }}>
            <Image
              src={schedule}
              alt="calendar"
              layout="fixed"
              height={85}
              width={85}
              quality={100}
            />
            <p className={styles.title}>Schedule Job</p>
            <p className={styles.description}>
              One you accept the estimate, we will schedule your job as soon as
              possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
