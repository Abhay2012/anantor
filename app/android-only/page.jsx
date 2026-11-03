import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './page.module.css'

export const dynamic = 'force-static'
export const metadata = {
  title: 'Anantor is on Android - Anantor Astrology App',
  description: 'Anantor is currently available on Android only. Explore what Anantor can do for you.',
  robots: { index: false, follow: true },
}

export default function AndroidOnlyPage() {
  return (
    <div className={styles.app}>
      <Header forceVisible />

      <section className={styles.container}>
        <h1 className={styles.title}>Anantor is currently available on Android only</h1>
        <p className={styles.subtitle}>
          We're not on the App Store yet. In the meantime, explore what Anantor can do for you.
        </p>
        <Link href="/" className={styles.cta}>Explore Anantor</Link>
      </section>

      <Footer />
    </div>
  )
}
