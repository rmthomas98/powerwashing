import styles from './Nav.module.css'
import Link from 'next/link';

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>Elegant</p>
        <div className={styles.linkContainer}>
          <Link href="/services"><a className={styles.link}>Services</a></Link>
          <Link href="/estimates"><a className={styles.link}>Free estimates</a></Link>
          <Link href="/contact"><a className={styles.contactBtn}>Contact</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Nav;