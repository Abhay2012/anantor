import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container} style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
        <a href="https://www.instagram.com/anantor_astrologyapp/" target='_blank'><img style={{ height: '30px', marginRight: '15px' }} src="insta-icon.png" /></a>
        <a href="https://x.com/anantor_app" target='_blank'><img style={{ height: '30px', marginRight: '15px' }} src="x-social-media-white-icon.png" /></a>
        <a href="https://www.youtube.com/@Anantor-astro" target='_blank'><img style={{ height: '30px' }} src="youtube-shorts-white-icon.webp" /></a>
        {/* <img style={{ width: '30px' }} src="insta-icon.png" /> */}
      </div>
      <div className={styles.container}>
        <div>
          <img style={{ height: '20px' }} src="/text-logo.png" alt="Anantor" />
        </div>
        <p>Made with ✨ for the cosmos | &copy; 2025 Anantor</p>
        <div className={styles.links}>
          <Link href="/privacy" className={styles.link}>Privacy</Link>
          <Link href="/terms" className={styles.link}>Terms</Link>
          <Link href="/disclaimer" className={styles.link}>Disclaimer</Link>
          <Link href="/contact-us" className={styles.link}>Support</Link>
        </div>
      </div>
    </footer>
  )
}
