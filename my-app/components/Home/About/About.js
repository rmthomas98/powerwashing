import styles from "./About.module.css";
import Image from "next/image";
import sphereOne from "../../public/assets/images/sphere_1.png";
import sphereTwo from "../../public/assets/images/sphere_2.png";
import sphereThree from "../../public/assets/images/sphere_3.png";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>Why choose us?</p>
        <p className={styles.subHeader}>
          Because you need great service, and we are here to provide the best
          experience as possible.
        </p>
        <div className={styles.flexContainer}>
          <div className={styles.featureContainer}>
            <div className={styles.imageContainer}>
              <Image src={sphereOne} height={125} width={125} quality={100} />
            </div>
            <p className={styles.title}>Service</p>
            <p className={styles.description}>
              When you need answers, we pick up the phone.
            </p>
          </div>
          <div className={styles.featureContainer}>
            <div className={styles.imageContainer}>
              <Image src={sphereTwo} height={125} width={125} quality={100} />
            </div>
            <p className={styles.title}>Speed</p>
            <p className={styles.description}>
              No sitting around for days waiting to hear back from us.
            </p>
          </div>
          <div className={styles.featureContainer} style={{ marginRight: 0 }}>
            <div className={styles.imageContainer}>
              <Image src={sphereThree} height={125} width={125} quality={100} />
            </div>
            <p className={styles.title}>Savings</p>
            <p className={styles.description}>
              No sitting around for days waiting to hear back from us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
