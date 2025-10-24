import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './page.module.css'

export const dynamic = 'force-static'
export const metadata = {
  title: 'Terms and Conditions - Anantor Astrology App',
  description: 'Read the Terms and Conditions governing your use of the Anantor mobile application and services.',
  keywords: ['astrology app terms', 'terms and conditions', 'anantor terms'],
  openGraph: {
    title: 'Terms and Conditions - Anantor Astrology App',
    description: 'Read the Terms and Conditions governing your use of the Anantor mobile application and services.',
    url: 'https://www.anantor.com/terms',
    siteName: 'Anantor',
    images: [
      { url: '/text-logo.png', width: 1200, height: 630, alt: 'Anantor' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions - Anantor Astrology App',
    description: 'Read the Terms and Conditions governing your use of the Anantor mobile application and services.',
    images: ['/text-logo.png'],
  },
}

export default function TermsPage() {
  return (
    <div className={styles.app}>
      <Header forceVisible />

      <section className={styles.container}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <p className={styles.p} style={{ opacity: 0.9, marginBottom: '2rem' }}>
          Welcome to Anantor. These Terms and Conditions ("Terms") govern your access to and use of the Anantor mobile
          application and services (collectively, the "Service"). By accessing or using the Service, you agree to be
          bound by these Terms.
        </p>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <section>
            <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
            <p className={styles.p}>By using the Service you confirm that you can form a binding contract with us and that you agree to comply with these Terms and all applicable laws.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>2. Description of the Service</h2>
            <p className={styles.p}>Anantor provides astrology-related features including personalized insights, question answering, and friend compatibility based on your provided information and optional contacts matching.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>3. Accounts and Security</h2>
            <ul className={styles.list}>
              <li>You are responsible for the accuracy of information you provide (e.g., name, phone number, date/time/place of birth).</li>
              <li>Keep your device and login credentials secure. You are responsible for all activities under your account.</li>
              <li>Notify us immediately of any suspected unauthorized use of your account.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>4. User Content</h2>
            <ul className={styles.list}>
              <li>You may submit information and questions ("User Content"). You retain ownership of your User Content.</li>
              <li>You grant us a non-exclusive, worldwide, royalty-free license to use, store, reproduce, and process User Content solely to operate and improve the Service.</li>
              <li>You represent that you have all rights necessary to submit the User Content and that it does not infringe third-party rights or violate laws.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>5. Contacts and Notifications</h2>
            <ul className={styles.list}>
              <li>Contacts Access (optional): With your permission, the app may access names and phone numbers from your device to help you find friends on Anantor. You can revoke permission anytime in device settings.</li>
              <li>Notifications: If you enable notifications, we may send you service-related messages. You can turn notifications off at any time in device settings.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>6. Prohibited Conduct</h2>
            <p className={styles.p}>You agree not to misuse the Service. Prohibited activities include:</p>
            <ul className={styles.list}>
              <li>Violating any applicable law or regulation.</li>
              <li>Interfering with or disrupting the Service or attempting to access it by unauthorized means.</li>
              <li>Uploading or transmitting malicious code, spam, or content that is unlawful, harmful, or infringes the rights of others.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>7. Intellectual Property</h2>
            <p className={styles.p}>The Service, including its content, features, trademarks, and software, is owned by Anantor or its licensors and is protected by intellectual property laws. Except as expressly permitted, you may not copy, modify, distribute, sell, or lease any part of the Service.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>8. In-App Purchases and Payments</h2>
            <p className={styles.p}>If the Service offers paid features in the future, additional terms may apply. Prices and taxes may vary by region. All purchases would be subject to the applicable app store terms.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>9. Disclaimers</h2>
            <ul className={styles.list}>
              <li>The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, express or implied.</li>
              <li>Astrology-related outputs are informational only and not a substitute for professional advice (e.g., medical, legal, financial).</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>10. Limitation of Liability</h2>
            <p className={styles.p}>To the maximum extent permitted by law, Anantor and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of or inability to use the Service.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>11. Indemnification</h2>
            <p className={styles.p}>You agree to indemnify and hold harmless Anantor and its affiliates from any claims, liabilities, damages, losses, and expenses, including reasonable legal and accounting fees, arising out of or in any way connected with your use of the Service or violation of these Terms.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>12. Termination</h2>
            <p className={styles.p}>We may suspend or terminate your access to the Service at any time, with or without notice, if we believe you have violated these Terms or to protect the Service or other users.</p>
          </section>

          {/* <section>
            <h2 className={styles.sectionTitle}>13. Governing Law</h2>
            <p className={styles.p}>These Terms are governed by the laws of your country of residence, without regard to conflict of law principles. If you operate in a specific jurisdiction, specify the governing law and venue here.</p>
          </section> */}

          <section>
            <h2 className={styles.sectionTitle}>13. Changes to These Terms</h2>
            <p className={styles.p}>We may update these Terms from time to time. We will notify you of material changes in-app or on our website. Continued use of the Service after changes become effective constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>14. Contact Us</h2>
            <p className={styles.p}>If you have questions about these Terms, please contact us at:</p>
            <p className={styles.p}><em>contact@anantor.com</em></p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
