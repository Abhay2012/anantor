import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './page.module.css'
export const dynamic = 'force-static'
export const metadata = {
  title: 'Privacy Policy - Anantor Astrology App',
  description: 'Learn how Anantor protects your personal data, birth information, and cosmic insights. Your privacy and security are our priority.',
  keywords: ['astrology app privacy', 'data protection', 'birth chart security'],
  openGraph: {
    title: 'Privacy Policy - Anantor Astrology App',
    description: 'Learn how Anantor protects your personal data, birth information, and cosmic insights.',
    url: 'https://www.anantor.com/privacy',
    siteName: 'Anantor',
    images: [
      { url: '/text-logo.png', width: 1200, height: 630, alt: 'Anantor' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Anantor Astrology App',
    description: 'Learn how Anantor protects your personal data, birth information, and cosmic insights.',
    images: ['/text-logo.png'],
  },
}

export default function PrivacyPage() {
  return (
    <div className={styles.app}>
      <Header forceVisible />

      <section className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.p} style={{ opacity: 0.9, marginBottom: '2rem' }}>
          This Privacy Policy describes how Anantor ("we," "our," or "us") collects, uses, and protects your
          information when you use our mobile application.
        </p>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <section>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p className={styles.p}>We collect the following categories of information to provide and improve our services:</p>
            <ul className={styles.list}>
              <li><strong>Personal Details:</strong> Your name, phone number, date of birth, time of birth, and place of birth.</li>
              <li><strong>User Inputs:</strong> Any questions or content you submit within the app.</li>
              <li><strong>Contacts (optional):</strong> With your permission, we access names and phone numbers from your device contacts to help you find friends using Anantor. We normalize phone numbers and send them to our server for matching.</li>
              <li><strong>Notifications Data:</strong> A device push token used to deliver push notifications.</li>
              <li><strong>Device and Usage Data:</strong> Basic device information and app interaction data necessary for reliability, security, and support.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <ul className={styles.list}>
              <li>Provide and operate app features (readings, friends compatibility, and notifications).</li>
              <li>Communicate service messages and relevant updates (you can control notifications in system settings).</li>
              <li>Maintain safety, prevent abuse, and ensure security.</li>
              <li>Debug, maintain, and improve performance and reliability.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>3. Sharing and Service Providers</h2>
            <p className={styles.p}>We do not sell or rent your personal information. We share information only as necessary with service providers bound by confidentiality and security obligations, such as:</p>
            <ul className={styles.list}>
              <li><strong>Backend Hosting:</strong> Our servers at api.anantor.com process account, profile, friends, contacts-matching, and notification token data.</li>
              <li><strong>Push Notifications:</strong> Firebase Cloud Messaging processes and delivers device tokens and notifications.</li>
              <li><strong>Legal:</strong> We may disclose information if required by law or to protect rights, safety, and integrity.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>4. Contacts Matching</h2>
            <p className={styles.p}>We request Contacts permission only when you choose to find friends from your address book. We access names and phone numbers, normalize numbers, and send them to our server to determine which contacts use Anantor and to enable friend requests. You can deny or revoke this permission at any time; the app remains usable without this feature.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>5. Notifications</h2>
            <p className={styles.p}>If you grant notification permission, we obtain a device token and share it with our server to deliver notifications. You can disable notifications at any time via device settings.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>6. Data Storage and Retention</h2>
            <ul className={styles.list}>
              <li><strong>On-device:</strong> We store your session token and a cached profile in local storage (AsyncStorage) to keep you signed in.</li>
              <li><strong>Server-side:</strong> We store account, profile, friends, and contacts-matching metadata as long as needed to provide the service and comply with law. Upon a verified deletion request, we delete or anonymize your data unless retention is legally required.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>7. International Transfers</h2>
            <p className={styles.p}>Your information may be processed on servers outside your country. Where applicable, we implement appropriate safeguards to protect your information.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>8. Security</h2>
            <p className={styles.p}>We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. While we strive to protect your data, no internet transmission is 100% secure.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>9. Your Rights and Choices</h2>
            <p className={styles.p}>You may access, correct, or delete your personal information by contacting us. Manage app permissions (Contacts, Notifications) from your device settings. To request account or data deletion, email us from your registered email/phone.</p>
            <p className={styles.p}>
              To request account or data deletion, please visit our{' '}
              <Link href="/delete-account">Delete Account</Link>{' '}page for instructions.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>10. Children's Privacy</h2>
            <p className={styles.p}>Our app is intended for users who are 16 years of age or older. We do not knowingly collect personal information from children under 16.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>11. Changes to This Privacy Policy</h2>
            <p className={styles.p}>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy within the app or on our website. Your continued use of the app indicates your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>12. Contact Us</h2>
            <p className={styles.p}>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <p className={styles.p}><em>contact@anantor.com</em></p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
