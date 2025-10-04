import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './page.module.css'
import Head from 'next/head'

export default function PrivacyPage() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Privacy Policy - Anantor Astrology App</title>
        <meta name="title" content="Privacy Policy - Anantor Astrology App" />
        <meta name="description" content="Learn how Anantor protects your personal data, birth information, and cosmic insights. Your privacy and security are our priority." />
        <meta name="keywords" content="astrology app privacy, data protection, birth chart security" />
      </Head>
      <Header forceVisible />

      <section className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.p} style={{ opacity: 0.9, marginBottom: '2rem' }}>
          This Privacy Policy describes how Anantor ("we," "our," or "us") collects, uses, and protects your information when you use our mobile application. We are committed to protecting your privacy and ensuring you have a secure experience.
        </p>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <section>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p className={styles.p}>To provide you with your personalized cosmic insights, we collect information you provide directly to us:</p>
            <ul className={styles.list}>
              <li>
                <strong>Personal Details:</strong> Your name, date of birth, place of birth, and time of birth. This is essential for generating accurate readings based on your unique birth chart.
              </li>
              <li>
                <strong>Questions:</strong> The content of any questions you submit to our system for analysis.
              </li>
              <li>
                <strong>Communications:</strong> Any information you provide when you contact us for support or feedback.
              </li>
            </ul>
            <p className={styles.p} style={{ marginTop: '0.75rem' }}>We also collect some data automatically to improve the app:</p>
            <ul className={styles.list}>
              <li>
                <strong>Device Information:</strong> We collect data about the device you use, such as the model and operating system.
              </li>
              <li>
                <strong>Usage Data:</strong> We track how you interact with the app, including the features you use and crash reports.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <ul className={styles.list}>
              <li>Deliver your personalized horoscopes, answers to your questions, and compatibility reports.</li>
              <li>Enhance and optimize the app's performance and user experience.</li>
              <li>Communicate with you about new features or support requests.</li>
              <li>Ensure the security of our app.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>3. Sharing of Your Information</h2>
            <p className={styles.p}>We do not sell or rent your personal information. We may share it only in the following limited cases:</p>
            <ul className={styles.list}>
              <li><strong>With Your Consent:</strong> If you give us explicit permission to share your information.</li>
              <li><strong>With Service Providers:</strong> We may share data with third-party services that help us operate our app, such as cloud hosting or analytics providers. These services are bound by confidentiality agreements.</li>
              <li><strong>For Legal Reasons:</strong> If required by law, court order, or government regulation.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>4. Data Security</h2>
            <p className={styles.p}>We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. While we strive to protect your data, no internet transmission is 100% secure.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>5. Your Rights</h2>
            <p className={styles.p}>You have the right to access, correct, or delete your personal information. To do so, please contact us at the email address below.</p>
            <p className={styles.p}>
              To request account or data deletion, please visit our
              {' '}
              <Link href="/delete-account">Delete Account</Link>
              {' '}page for instructions.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>6. Children's Privacy</h2>
            <p className={styles.p}>Our app is intended for users who are 16 years of age or older. We do not knowingly collect personal information from children under 16.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>7. Changes to This Privacy Policy</h2>
            <p className={styles.p}>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy within the app or on our website. Your continued use of the app indicates your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>8. Contact Us</h2>
            <p className={styles.p}>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <p className={styles.p}><em>contact@anantor.com</em></p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
