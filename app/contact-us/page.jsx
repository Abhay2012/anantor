import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './page.module.css'

export const dynamic = 'force-static'
export const metadata = {
  title: 'Contact Us - Anantor Astrology App',
  description: "Get in touch with the Anantor team. Questions about astrology features, technical support, or feedback? We're here to help.",
  keywords: [
    'astrology app support',
    'contact anantor',
    'support',
    'feedback',
    'inquiries',
    'Anantor',
  ],
  openGraph: {
    title: 'Contact Us - Anantor Astrology App',
    description: "Get in touch with the Anantor team for support, feedback, or inquiries.",
    url: 'https://www.anantor.com/contact-us',
    siteName: 'Anantor',
    images: [
      { url: '/text-logo.png', width: 1200, height: 630, alt: 'Anantor' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Anantor Astrology App',
    description: 'Get in touch with the Anantor team for support, feedback, or inquiries.',
    images: ['/text-logo.png'],
  },
}

export default function ContactUsPage() {
  return (
    <div className={styles.app}>
      <Header forceVisible />

      <section className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We'd love to hear from you. For support, feedback, partnerships, or general inquiries, reach out using the details below.
        </p>

        <div style={{ display: 'grid', gap: '2rem' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>Email</h2>
            <p>
              You can contact us at <a href="mailto:contact@anantor.com" className={styles.link}>contact@anantor.com</a>
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>What to Include</h2>
            <ul className={styles.list}>
              <li>Your name</li>
              <li>A brief description of your request</li>
              <li>Any relevant screenshots or device details (optional)</li>
            </ul>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
