import styles from "./Faq.module.css";
import { AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>Frequently asked questions</p>
        <div className={styles.questionContainer}>
          <div className={styles.question}>
            <p className={styles.questionText}>Where are we located?</p>
            <AiOutlinePlus />
          </div>
          <p className={styles.answer}>Dayton, Ohio</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
