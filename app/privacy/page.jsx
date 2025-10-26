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
        <p className={styles.p} style={{ opacity: 0.9, marginBottom: '1rem' }}>Last Updated: 24-10-2025</p>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <section>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p className={styles.p}>Welcome to Anantor ("we," "our," "us," or the "App"). Anantor is an entertainment application that provides Vedic astrology readings and insights using artificial intelligence (AI) technology. This Privacy Policy describes how we collect, use, disclose, store, and protect your personal information when you use our mobile application.</p>
            <p className={styles.p}><strong>Age Restriction:</strong> Anantor is intended for users who are 18 years of age or older. We do not knowingly collect personal information from anyone under the age of 18. If you are under 18, you must obtain verifiable consent from your parent or legal guardian before using this App or providing any information to us.</p>
            <p className={styles.p}>By downloading, installing, or using Anantor, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our practices, please do not use the App.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p className={styles.p}>We collect different types of information to provide and improve our services. As a Data Fiduciary under India's Digital Personal Data Protection Act, 2023 ("DPDPA"), we are committed to protecting your personal data.</p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>1.1 Personal Information You Provide Directly</h3>
            <p className={styles.p}>When you create an account and use Anantor, you voluntarily provide us with the following personal information:</p>
            <ul className={styles.list}>
              <li><strong>Name:</strong> Your full name</li>
              <li><strong>Phone Number:</strong> Used for account creation, authentication, and communication</li>
              <li><strong>Date of Birth:</strong> Required for generating astrological readings and profiles</li>
              <li><strong>Time of Birth:</strong> Required for accurate Vedic astrology calculations</li>
              <li><strong>Place of Birth:</strong> Geographic location data necessary for astrological chart generation</li>
              <li><strong>User-Generated Content:</strong> Questions you ask within the App, feedback, and any other content you submit</li>
            </ul>
            <p className={styles.p}><em>Special Note on Birth Information:</em> The date, time, and place of birth information you provide is essential for Vedic astrology calculations. This information forms the foundation of all astrological content we generate for you and cannot be used to provide our services without it.</p>

            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>1.2 Contact Information (Optional)</h3>
            <p className={styles.p}>With your explicit permission, we may access your device contacts to help you:</p>
            <ul className={styles.list}>
              <li>Find friends who are also using Anantor</li>
              <li>Send friend requests to contacts who use the App</li>
            </ul>
            <p className={styles.p}>When you grant us contact access, we collect:</p>
            <ul className={styles.list}>
              <li>Contact names from your address book</li>
              <li>Phone numbers associated with those contacts</li>
            </ul>
            <p className={styles.p}>We normalize phone numbers to a standard format and send them securely to our servers to match against existing Anantor users. You can deny or revoke this permission at any time through your device settings. The App remains fully functional if you choose not to grant contact access. You may withdraw this consent at any time, and withdrawal will not affect the lawfulness of processing based on consent before withdrawal.</p>

            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>1.3 Device and Technical Information</h3>
            <p className={styles.p}>To ensure the App functions properly and securely, we automatically collect:</p>
            <ul className={styles.list}>
              <li><strong>Device Information:</strong> Device model, operating system version, unique device identifiers, mobile network information</li>
              <li><strong>Push Notification Token:</strong> A unique device token obtained from Firebase Cloud Messaging to send you notifications</li>
              <li><strong>App Usage Data:</strong> Features accessed, session duration, interaction patterns, crash reports, and diagnostic data</li>
              <li><strong>IP Address:</strong> Your device's Internet Protocol address for security and fraud prevention</li>
              <li><strong>Log Data:</strong> Timestamps, error logs, and performance metrics</li>
            </ul>

            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>1.4 Information Generated by AI</h3>
            <p className={styles.p}>The App uses artificial intelligence to generate personalized astrological content based on the information you provide. This includes:</p>
            <ul className={styles.list}>
              <li>Vedic astrology readings and interpretations</li>
              <li>Compatibility analyses</li>
              <li>Responses to your questions</li>
              <li>Personalized insights and predictions</li>
            </ul>
            <p className={styles.p}>This generated content is stored on our servers and associated with your account.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>2. Legal Basis for Processing (DPDPA Compliance)</h2>
            <p className={styles.p}>Under the Digital Personal Data Protection Act, 2023, we process your personal data based on the following legal grounds:</p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>2.1 Consent</h3>
            <p className={styles.p}>We obtain your explicit and informed consent before collecting and processing your personal data.</p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>2.2 Legitimate Uses</h3>
            <p className={styles.p}>We may process your personal data for certain legitimate purposes without explicit consent</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
            <p className={styles.p}>We use your personal information for the following specific purposes:</p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>3.1 Service Provision</h3>
            <ul className={styles.list}>
              <li>Create and manage your account</li>
              <li>Generate personalized Vedic astrology readings, horoscopes, and content using AI</li>
              <li>Provide "About You" insights based on your birth details</li>
              <li>Enable you to ask questions and receive AI-generated astrological guidance</li>
              <li>Facilitate friend connections and compatibility features</li>
              <li>Match your contacts with existing Anantor users (only with your permission)</li>
              <li>Deliver push notifications about readings, friend requests, or App features</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>3.2 Communication</h3>
            <ul className={styles.list}>
              <li>Send you service-related notifications, updates, and announcements</li>
              <li>Respond to your inquiries, feedback, and support requests</li>
              <li>Deliver important information about your account or the App</li>
              <li>You can disable push notifications at any time via device settings</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>3.3 App Improvement and Analytics</h3>
            <ul className={styles.list}>
              <li>Analyze usage patterns to improve App features and user experience</li>
              <li>Monitor and analyze trends, performance, and functionality</li>
              <li>Debug technical issues and maintain App stability</li>
              <li>Conduct research and development for new features</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>3.4 Security and Fraud Prevention</h3>
            <ul className={styles.list}>
              <li>Protect against unauthorized access, misuse, and fraudulent activity</li>
              <li>Enforce our Terms of Service and legal rights</li>
              <li>Ensure the safety and security of our users and services</li>
              <li>Prevent, detect, and investigate security incidents</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>3.5 Legal Compliance</h3>
            <ul className={styles.list}>
              <li>Comply with applicable laws, regulations, and legal processes under the DPDPA and other Indian laws</li>
              <li>Respond to requests from the Data Protection Board of India, government authorities, court orders, or subpoenas</li>
              <li>Fulfill obligations under the Information Technology Act, 2000</li>
            </ul>
            <p className={styles.p}><strong>Purpose Limitation:</strong> We process your personal data only for the specific purposes for which it was collected and disclosed to you. We do not use your birth information for any purpose other than generating astrological content.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>4. How We Share Your Information</h2>
            <p className={styles.p}>We do not sell, rent, or trade your personal information to third parties for marketing or commercial purposes. As a Data Fiduciary, we share your information only in the following limited circumstances:</p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>4.1 Data Processors (Service Providers)</h3>
            <p className={styles.p}>We work with trusted third-party Data Processors who assist us in operating the App. These processors have access to your personal information only to perform specific tasks on our behalf and are contractually obligated to:</p>
            <ul className={styles.list}>
              <li>Process data only as per our instructions</li>
              <li>Maintain confidentiality and security of your data</li>
              <li>Not use your data for their own purposes</li>
              <li>Comply with the DPDPA and applicable data protection laws</li>
            </ul>
            <p className={styles.p}>Our Data Processors include:</p>
            <ul className={styles.list}>
              <li><strong>Backend Hosting and Infrastructure:</strong> Our servers (hosted at api.anantor.com) store and process account information, profile data, birth details, user-generated questions, AI-generated content, friend lists, contacts-matching data, and notification tokens</li>
              <li><strong>Push Notification Services:</strong> Firebase Cloud Messaging (operated by Google LLC) processes device tokens and delivers push notifications to your device. Subject to Google's Privacy Policy</li>
              <li><strong>AI Content Generation Systems:</strong> Our AI infrastructure processes your birth information and questions to generate personalized astrological content</li>
              <li><strong>Cloud Storage and Database Services:</strong> Providers that host and manage our data storage infrastructure</li>
              <li><strong>Analytics and Performance Monitoring:</strong> Tools that help us understand App usage and improve performance (configured to minimize personal data collection)</li>
            </ul>
            <p className={styles.p}>All Data Processors are contractually bound to meet DPDPA compliance standards and maintain the same level of data protection we promise to you.</p>

            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>4.2 Friends and Social Features</h3>
            <ul className={styles.list}>
              <li>Your name and basic profile information may be visible to friends you connect with within the App</li>
              <li>If someone in your contacts uses Anantor and you've granted contact permission, you may appear in their list of suggested friends</li>
              <li>Astrological compatibility information may be shared between connected friends</li>
            </ul>

            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>4.3 Legal Requirements and Law Enforcement</h3>
            <p className={styles.p}>We may disclose your information when required by law or to comply with legal processes under Indian law, including:</p>
            <ul className={styles.list}>
              <li>Valid legal processes (summons, court orders, government requests under Section 69 of the IT Act, 2000)</li>
              <li>Requests from the Data Protection Board of India</li>
              <li>Investigations of potential violations of our Terms of Service or applicable laws</li>
              <li>Situations involving potential threats to physical safety or national security</li>
              <li>Protection of our legal rights, property, and users' safety</li>
              <li>Prevention, detection, or prosecution of offences</li>
            </ul>

            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>4.4 Business Transfers</h3>
            <p className={styles.p}>In the event of a merger, acquisition, reorganization, bankruptcy, or sale of assets, your information may be transferred to the successor entity. We will:</p>
            <ul className={styles.list}>
              <li>Notify you of any such change via email or prominent notice within the App</li>
              <li>Inform you of choices you may have regarding your information</li>
              <li>Ensure the successor entity complies with this Privacy Policy and the DPDPA</li>
            </ul>

            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>4.5 With Your Consent</h3>
            <p className={styles.p}>We may share your information with third parties when you have given us explicit consent to do so for a specific purpose.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>6. Data Storage and Retention</h2>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>6.1 Local Storage on Your Device</h3>
            <p className={styles.p}>We store the following information locally on your device:</p>
            <ul className={styles.list}>
              <li><strong>Session Token:</strong> Keeps you logged into the App using Secure Storage</li>
              <li><strong>Cached Profile Data:</strong> A local copy of your profile information for faster access using using AsyncStorage</li>
            </ul>
            <p className={styles.p}>This local data remains on your device until you log out or uninstall the App.</p>

            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>6.2 Server-Side Storage</h3>
            <p className={styles.p}>The following information is stored on our secure servers (api.anantor.com):</p>
            <ul className={styles.list}>
              <li>Account credentials and authentication data</li>
              <li>Complete profile information (name, phone number, birth details)</li>
              <li>AI-generated astrological content and readings</li>
              <li>User-generated questions and content</li>
              <li>Friend lists and connection data</li>
              <li>Contacts-matching metadata (hashed phone numbers)</li>
              <li>Push notification tokens</li>
            </ul>

            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>6.3 Data Retention Period</h3>
            <p className={styles.p}><strong>Purpose-Based Retention:</strong> We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, as disclosed to you at the time of collection.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>7. Data Security</h2>
            <p className={styles.p}>We take the security of your personal information seriously and implement comprehensive technical and organizational measures to protect it against unauthorized access, alteration, disclosure, loss, or destruction, as required under the DPDPA.</p>
            <p className={styles.p}><strong>Security Limitations:</strong> While we implement industry-standard security measures, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security of your data. You are responsible for maintaining the confidentiality of your account credentials and for any activity under your account.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>8. Your Rights as a Data Principal (DPDPA)</h2>
            <p className={styles.p}>Under the Digital Personal Data Protection Act, 2023, you have the following rights regarding your personal data:</p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>8.1 Right to Access</h3>
            <ul className={styles.list}>
              <li>You can access your personal information stored with us at any time through the App</li>
              <li>You may request a summary of personal data we hold about you</li>
              <li>You can request information about how your data is being processed</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>8.2 Right to Correction</h3>
            <ul className={styles.list}>
              <li>You can update and correct your profile information within the App</li>
              <li>You may request correction of inaccurate or incomplete personal data</li>
              <li>We will correct the data within a reasonable timeframe after verification</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>8.3 Right to Erasure (Right to be Forgotten)</h3>
            <ul className={styles.list}>
              <li>You have the right to request deletion of your personal data</li>
              <li>We will delete your data within 30 days of receiving a verified deletion request</li>
              <li>Some data may be retained if legally required (e.g., for tax records, ongoing disputes)</li>
            </ul>
            <p className={styles.p}><strong>To Delete Your Account:</strong></p>
            <ul className={styles.list}>
              <li>You may delete your account at any time by in-app linkage in Profile &gt; Settings &gt; Delete Account</li>
              <li>Visit our <Link href="/delete-account">Delete Account</Link> page for instructions or the in app linkage for account deletion</li>
              <li>Email us from your registered email address or phone number at <em>contact@anantor.com</em></li>
              <li>We will verify your identity before processing the deletion request</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>8.5 Right to Withdraw Consent</h3>
            <ul className={styles.list}>
              <li>You can withdraw your consent for data processing at any time</li>
              <li>Withdrawal of consent will not affect the lawfulness of processing before withdrawal</li>
              <li>To withdraw consent for contact access, manage permissions through your device settings</li>
              <li>To withdraw consent for notifications, disable them via device settings</li>
            </ul>
            <p className={styles.p}><strong>Consequences of Withdrawal:</strong> If you withdraw consent for essential data processing (such as birth information required for astrology services), we may not be able to provide you with the App's core features.</p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>8.6 Right to Grievance Redressal</h3>
            <p className={styles.p}>You have the right to file a complaint regarding the processing of your personal data by contacting us at <em>contact@anantor.coma</em></p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>8.7 Permission Management</h3>
            <ul className={styles.list}>
              <li><strong>Contacts Permission:</strong> Manage through your device settings (Settings &gt; Apps &gt; Anantor &gt; Permissions)</li>
              <li><strong>Notifications Permission:</strong> Disable push notifications through your device settings</li>
            </ul>
            <p className={styles.p}>The App remains fully functional even if you deny or revoke these permissions.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>9. Your Duties as a Data Principal</h2>
            <p className={styles.p}>Under the DPDPA, you also have certain responsibilities:</p>
            <ul className={styles.list}>
              <li><strong>Comply with Applicable Law:</strong> You must not impersonate another person or provide false information</li>
              <li><strong>Furnish Only Accurate Information:</strong> You must provide complete and accurate information</li>
              <li><strong>Respect Others' Rights:</strong> You must not do anything that violates the rights of other Data Principals</li>
            </ul>
            <p className={styles.p}>Failure to comply with these duties may result in penalties as prescribed under the DPDPA.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>10. Third-Party Services and Links</h2>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>10.1 Third-Party Service Providers</h3>
            <p className={styles.p}>Anantor integrates with the following third-party services:</p>
            <ul className={styles.list}>
              <li>Firebase Cloud Messaging (Google LLC): For delivering push notifications</li>
              <li>Subject to Google's Privacy Policy</li>
            </ul>
            <p className={styles.p}>These third parties act as Data Processors and are bound by our data processing agreements.</p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>10.2 Third-Party Links</h3>
            <p className={styles.p}>The App may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies before providing any personal information.</p>
            <p className={styles.p}>We are not liable for the data practices of third-party services.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>11. Children's Privacy and Parental Consent</h2>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>11.1 Age Restriction</h3>
            <p className={styles.p}>Anantor is intended for users who are 18 years of age or older. </p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>11.2 Verifiable Parental Consent</h3>
            <p className={styles.p}>If you are under 18 years of age, you may use this App only with the verifiable consent of your parent or legal guardian. </p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>11.3 Prohibited Activities for Children</h3>
            <ul className={styles.list}>
              <li>Tracking or behavioral monitoring of users under 18</li>
              <li>Targeted advertising directed at users under 18</li>
              <li>Any processing that may cause detrimental effects on the well-being of children</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>11.4 No Knowingly Collection from Minors Without Consent</h3>
            <p className={styles.p}>We do not knowingly collect personal information from anyone under 18 without verifiable parental consent. If we discover that we have inadvertently collected personal information from a child under 18 without proper parental consent, we will:</p>
            <ul className={styles.list}>
              <li>Take immediate steps to delete such information from our servers</li>
              <li>Notify the parent/guardian if possible</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>11.5 Parental Rights</h3>
            <p className={styles.p}>If you are a parent or guardian and believe your child has provided us with personal information without your consent, please contact us immediately at <em>contact@anantor.com</em>. You have the right to:</p>
            <ul className={styles.list}>
              <li>Access your child's personal data</li>
              <li>Request correction or deletion of your child's data</li>
              <li>Withdraw consent for processing your child's data</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>14. Changes to This Privacy Policy</h2>
            <p className={styles.p}>We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or for operational reasons. When we make changes:</p>
            <ul className={styles.list}>
              <li>We will update the "Last Updated" date at the top of this policy</li>
              <li>For material changes affecting your rights, we will notify you through In-app notifications and SMS to your registered phone number and Prominent notice on our website</li>
              <li>We will provide the updated policy in a clear and accessible manner</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>14.2 Your Acceptance</h3>
            <p className={styles.p}>Your continued use of Anantor after the effective date of the updated Privacy Policy constitutes your acceptance of the changes. If you do not agree with the changes, you may stop using the App and request deletion of your account.</p>
            <p className={styles.p}>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>15. Contact Us and Data Protection Officer</h2>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>15.1 General Inquiries</h3>
            <p className={styles.p}>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at: <em>contact@anantor.com</em></p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>16. Governing Law and Jurisdiction</h2>
            <p className={styles.p}>This Privacy Policy is governed by the laws of India, including but not limited to:</p>
            <ul className={styles.list}>
              <li>The Digital Personal Data Protection Act, 2023</li>
              <li>The Information Technology Act, 2000</li>
              <li>The Indian Contract Act, 1872</li>
              <li>The Constitution of India</li>
            </ul>
            <p className={styles.p}>Any disputes arising from this Privacy Policy or the processing of personal data shall be subject to the exclusive jurisdiction of courts in Delhi, India.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>17. Data Safety Summary for Google Play</h2>
            <p className={styles.p}>For transparency and in accordance with Google Play's Data Safety requirements, here is a summary of our data practices:</p>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>Data Collected:</h3>
            <ul className={styles.list}>
              <li>Personal information: Name, phone number, date/time/place of birth</li>
              <li>Contact information (with explicit permission)</li>
              <li>Device identifiers and technical data</li>
              <li>User-generated content (questions, feedback)</li>
              <li>AI-generated astrological content</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>Data Usage:</h3>
            <ul className={styles.list}>
              <li>Provide Vedic astrology services and personalized readings</li>
              <li>Enable social features (friend connections, compatibility)</li>
              <li>Send service notifications</li>
              <li>Improve App functionality, security, and user experience</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>Data Sharing:</h3>
            <ul className={styles.list}>
              <li>Data Processors: Hosting, cloud services, AI processing, push notifications</li>
              <li>Friends you connect with: Limited profile information</li>
              <li>Legal authorities: When required by law</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>Data Security:</h3>
            <ul className={styles.list}>
              <li>TLS encryption for data in transit</li>
              <li>Encryption at rest for sensitive data</li>
              <li>Regular security audits and monitoring</li>
              <li>Incident response procedures</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>User Control:</h3>
            <ul className={styles.list}>
              <li>Access, correct, and delete your information</li>
              <li>Withdraw consent at any time</li>
              <li>Manage permissions through device settings</li>
              <li>Disable notifications anytime</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>Data Retention:</h3>
            <ul className={styles.list}>
              <li>Active account data: Duration of service use</li>
              <li>Deleted account data: Removed within 30 days (backup systems within 90 days)</li>
              <li>Legal retention: As required by Indian law</li>
            </ul>
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>Legal Compliance:</h3>
            <ul className={styles.list}>
              <li>Compliant with Digital Personal Data Protection Act, 2023</li>
              <li>Compliant with Information Technology Act, 2000</li>
              <li>Subject to oversight by Data Protection Board of India</li>
            </ul>
            <br/>
            <p className={styles.p}>By using Anantor, you acknowledge that you have read, understood, and agree to this Privacy Policy and our compliance with the Digital Personal Data Protection Act, 2023.</p>
            <br/>
            <p className={styles.p}><strong>Notice to Users in India:</strong> This App complies with the Digital Personal Data Protection Act, 2023. Your personal data will be processed in accordance with Indian data protection laws. You have specific rights under the DPDPA, including the right to access, correct, and delete your data, and to file complaints with the Data Protection Board of India. For more information about your rights or to exercise them, please contact us at <em>contact@anantor.com</em>.</p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}

