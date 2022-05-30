import styles from "./Faq.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const Faq = () => {
  const [num, setNum] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>Frequently asked questions</p>
        <div
          className={styles.questionContainer}
          style={{ height: num == 1 ? 94 : 60 }}
          onClick={() => setNum(num === 1 ? 0 : 1)}
        >
          <div className={styles.question}>
            <p className={styles.questionText}>Where are we located?</p>
            {num == 1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
          <p className={styles.answer}>Dayton, Ohio</p>
        </div>
        <div
          className={styles.questionContainer}
          style={{ height: num == 2 ? 94 : 60 }}
          onClick={() => setNum(num === 2 ? 0 : 2)}
        >
          <div className={styles.question}>
            <p className={styles.questionText}>Do we use our own water?</p>
            {num == 2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
          <p className={styles.answer}>Customer must provide water.</p>
        </div>
        <div
          className={styles.questionContainer}
          style={{ height: num == 3 ? 94 : 60 }}
          onClick={() => setNum(num === 3 ? 0 : 3)}
        >
          <div className={styles.question}>
            <p className={styles.questionText}>When do I pay my bill?</p>
            {num == 3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
          <p className={styles.answer}>
            We will send an invoice after the job is done.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
