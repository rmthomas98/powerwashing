import styles from "./Deck.module.css";
import Link from "next/link";

const Deck = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>Wood Decks</p>
        <p className={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to.
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/"><a className={styles.estimateBtn}>Get estimate</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Deck;
