import styles from './Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>Power Washing</p>
        <div className={styles.linkContainer}>
          <p className={styles.link}>About</p>
          <p className={styles.link}>Services</p>
          <p className={styles.link}>Free Estimates</p>
          <p className={styles.contactBtn}>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Nav;