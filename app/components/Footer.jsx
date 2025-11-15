import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/anantor_astrologyapp/" target='_blank'><img style={{ height: '30px', marginRight: '15px' }} src="insta-icon.png" alt="Anantor Instagram" /></a>
        <a href="https://x.com/anantor_app" target='_blank'><img style={{ height: '30px', marginRight: '15px' }} src="x-social-media-white-icon.png" alt="Anantor X" /></a>
        <a href="https://www.youtube.com/@Anantor-astro" target='_blank'><img style={{ height: '30px' }} src="youtube-shorts-white-icon.webp" alt="Anantor YouTube Channel" /></a>
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
          <Link href="https://medium.com/@anantorapp" target='_blank' className={styles.link}>Blogs</Link>
        </div>
      </div>
    </footer>
  )
}
