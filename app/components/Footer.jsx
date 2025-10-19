import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2025 ANANTOR. All rights reserved. Made with ✨ for the cosmos.</p>
        <div className={styles.links}>
          <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
          <Link href="/terms" className={styles.link}>Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}
