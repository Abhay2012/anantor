"use client"

import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <nav className={`${styles.fixedNavbar} ${styles.visible}`}>
        <div className={styles.navbarContent}>
          <div className={styles.navbarLogo}>
            <Link href="/">
              <img src="/text-logo.png" alt="anantor" className={styles.navbarLogoImage} />
            </Link>
            {/* <span className={styles.navbarLogoText}>ANANTOR</span> */}
          </div>
          <div className={styles.navbarMenu}>
            <Link href="/contact-us" className={styles.navbarLink}>Contact Us</Link>
          </div>
        </div>
      </nav>
    </>
  )
}
