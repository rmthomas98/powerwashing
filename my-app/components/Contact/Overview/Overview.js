import styles from "./Overview.module.css";

const Overview = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>Contact Us</p>
        <p className={styles.description}>
          We are committed to providing a high level of support to our current
          and future customers. When you need answers we are there to get the
          job done.
        </p>
      </div>
    </div>
  );
};

export default Overview;
