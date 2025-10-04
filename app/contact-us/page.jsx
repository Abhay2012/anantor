import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './page.module.css'
import Head from 'next/head'

export default function ContactUsPage() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Contact Us - Anantor Astrology App</title>
        <meta name="title" content="Contact Us - Anantor Astrology App" />
        <meta name="description" content="Get in touch with the Anantor team. Questions about astrology features, technical support, or feedback? We're here to help." />
        <meta name="keywords" content="astrology app support, contact anantor, support, feedback, inquiries, Anantor" />
      </Head>
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
