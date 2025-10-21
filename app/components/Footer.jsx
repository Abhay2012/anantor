import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      <div>
        <img style={{ height: '20px' }} src="/text-logo.png" alt="Anantor" />
      </div>
        <p>Made with ✨ for the cosmos | &copy; 2025 Anantor</p>
        <div className={styles.links}>
          <Link href="/privacy" className={styles.link}>Privacy</Link>
          <Link href="/terms" className={styles.link}>Terms</Link>
          <Link href="/contact-us" className={styles.link}>Support</Link>
        </div>
      </div>
    </footer>
  )
}
