import styles from "./Video.module.css";
import { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

const Video = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.playbackRate = 0.8;
  }, []);

  return (
    <div className={styles.wrapper}>
      <video ref={videoRef} autoPlay loop muted className={styles.video}>
        <source src="assets/videos/bg-video.mov" />
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <p className={styles.header}>Power Washing</p>
        <p className={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to.
        </p>
        <div className={styles.buttonContainer}>
          <ScrollLink to="/" smooth className={styles.serviceBtn}>
            View Services
          </ScrollLink>
          <ScrollLink to="/" smooth className={styles.contactBtn}>
            Contact
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Video;
