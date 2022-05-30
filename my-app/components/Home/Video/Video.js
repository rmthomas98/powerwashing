import styles from "./Video.module.css";
import { useEffect, useRef } from "react";
import Link from "next/link";

const Video = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.playbackRate = 0.8;
  }, []);

  return (
    <div className={styles.wrapper}>
      <video ref={videoRef} autoPlay loop muted className={styles.video}>
        <source src="assets/videos/bg-video.mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <p className={styles.header}>Platinum Power Washing</p>
        <p className={styles.description}>
          Power washing company located in Dayton, Ohio. If your driveway,
          sidewalk, patio, or deck needs a cleaning, we are the people to call.
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/estimates">
            <a className={styles.serviceBtn}>free estimate</a>
          </Link>
          <Link href="/contact">
            <a className={styles.contactBtn}>contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
