import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './page.module.css'

export const dynamic = 'force-static'
export const metadata = {
  title: 'Disclaimer - Anantor Astrology App',
  description:
    'Read the disclaimer for Anantor. Our astrology and AI-powered insights are informational and entertainment-oriented, not professional advice.',
  keywords: ['astrology disclaimer', 'anantor disclaimer', 'entertainment purposes only'],
  openGraph: {
    title: 'Disclaimer - Anantor Astrology App',
    description:
      'Astrology and AI-powered interpretations provided by Anantor are informational and entertainment-oriented, not professional advice.',
    url: 'https://www.anantor.com/disclaimer',
    siteName: 'Anantor',
    images: [{ url: '/text-logo.png', width: 1200, height: 630, alt: 'Anantor' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer - Anantor Astrology App',
    description:
      'Astrology and AI-powered interpretations provided by Anantor are informational and entertainment-oriented, not professional advice.',
    images: ['/text-logo.png'],
  },
}

export default function DisclaimerPage() {
  return (
    <div className={styles.app}>
      <Header forceVisible />

      <section className={styles.container}>
        <h1 className={styles.title}>Disclaimer</h1>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <p className={styles.p} style={{ opacity: 0.95 }}>
            The astrology-related content, forecasts, recommendations, and any spiritual or personality insights provided
            through this Platform are based on traditional Vedic astrology principles combined with algorithmic and
            artificial intelligence (AI)-powered interpretations. While the AI models are trained on astrological
            knowledge and data sets, all outputs are informational and entertainment-oriented in nature.
          </p>

          <p className={styles.p} style={{ opacity: 0.95 }}>
            Astrology is not a science, and results may vary based on individual data accuracy, interpretational
            differences, and evolving astrological methodologies. The Platform does not guarantee the accuracy,
            completeness, or reliability of any content, nor does it provide any form of medical, legal, financial,
            psychological, or professional advice.
          </p>

          <p className={styles.p} style={{ opacity: 0.95 }}>
            The user understands and acknowledges that any decisions taken based on the content provided on the Platform
            are made at their own discretion and risk. Users should seek professional advice where appropriate.
          </p>

          <p className={styles.p} style={{ opacity: 0.95 }}>
            By accessing or using the Platform, you agree that the Platform, its owners, affiliates, or partners shall
            not be held responsible or liable for any direct, indirect, incidental, consequential, or other damages
            resulting from the use of the provided content or predictions.
          </p>

          <p className={styles.p} style={{ opacity: 0.95 }}>
            For further details, including how we collect, process, and store your personal information and the terms
            governing your use of the Platform, please refer to our{' '}
            <Link href="/terms">Terms &amp; Conditions</Link> and{' '}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
