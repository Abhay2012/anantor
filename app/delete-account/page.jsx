import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './page.module.css'
import Head from 'next/head'

export default function DeleteAccountPage() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Delete Account - Anantor Astrology App</title>
        <meta name="title" content="Delete Account - Anantor Astrology App" />
        <meta name="description" content="We're sorry to see you go. Delete your Anantor account and all associated data securely. Learn what happens when you delete your cosmic profile." />
        <meta name="keywords" content="delete astrology account, remove account, data deletion, account removal" />
      </Head>
      <Header forceVisible />

      <section className={styles.container}>
        <h1 className={styles.title}>Request Account & Data Deletion</h1>
        <p className={styles.p} style={{ opacity: 0.9, marginBottom: '2rem' }}>
          We respect your privacy. You can request deletion of your account and all associated data at any time by contacting us via email.
        </p>

        <div style={{ display: 'grid', gap: '1.75rem' }}>
          <section>
            <h2 className={styles.sectionTitle}>How to Request Deletion</h2>
            <ul className={styles.list}>
              <li>Send an email to: <a href="mailto:contact@anantor.com" className={styles.link}>contact@anantor.com</a></li>
              <li>Include your registered phone number in the email.</li>
              <li>Our team will process your request and confirm when your account and data have been deleted.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Data That Will Be Deleted</h2>
            <ul className={styles.list}>
              <li>Phone number used for login</li>
              <li>User-specific preferences stored in the backend</li>
              <li>Any temporary OTP data</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Data That May Be Retained</h2>
            <ul className={styles.list}>
              <li>Anonymous analytics or crash reports (not linked to your account)</li>
              <li>Logs required by law or for security purposes</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Retention Period</h2>
            <p className={styles.p}>Your account and personal data will be deleted as soon as your request is processed, except for any data we are legally required to keep.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.p}>If you face any issues or do not receive confirmation, please email <a href="mailto:contact@anantor.com" className={styles.link}>contact@anantor.com</a></p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
