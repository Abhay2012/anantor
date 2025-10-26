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
        <p className={styles.p} style={{ opacity: 0.9, marginBottom: '1rem' }}>Last Updated: 24 October, 2025</p>
        <section>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.p}>
            Welcome to Anantor ("we," "our," "us," or the "Service"). These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("you," "your," or "User") and Anantor, governing your access to and use of the Anantor mobile application and all related services (collectively, the "Service").
          </p>
          <p className={styles.p}><strong>IMPORTANT:</strong> Please read these Terms carefully before using the Service. By downloading, installing, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must not use the Service.</p>
        </section>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <section>
            <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>1.1 Binding Agreement</h3>
            <ul className={styles.list}>
              <li>You agree to comply with these Terms and all applicable laws, including but not limited to the Digital Personal Data Protection Act, 2023 ("DPDPA"), and the Information Technology Act, 2000</li>
              <li>You have read and understood our Privacy Policy, which is incorporated into these Terms by reference</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>1.2 Age Requirement</h3>
            <p>The Service is intended for users who are <b>18 years of age or older</b>:</p>
            <ul className={styles.list}>
              <li>If you are 18 years or older: You may use the Service by accepting these Terms directly</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>1.3 Jurisdiction</h3>
            <p className={styles.p}>These Terms are governed by the laws of India. By using the Service, you consent to the exclusive jurisdiction of courts in Delhi, India for any disputes arising from these Terms or your use of the Service.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>2. Description of the Service</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>2.1 Nature of Service</h3>
            <p>Anantor is an <b>entertainment application</b> that provides Vedic astrology-related content and features, including but not limited to:</p>
            <ul className={styles.list}>
              <li><b>Personalized Astrological Insights:</b> AI-generated horoscopes, birth chart analysis, and personalized readings based on your date, time, and place of birth.</li>
              <li><b>"About You" Feature:</b> Detailed personality insights and astrological profiles.</li>
              <li><b>Question & Answer:</b> Ability to ask questions and receive AI-generated astrological guidance and responses.</li>
              <li><b>Social Features:</b> Option to connect with friends via device contact matching, view compatibility analysis, and share insights.</li>
              <li><b>Notifications:</b> Service-related updates, friend requests, and astrological content notifications.</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>2.2 Entertainment Purpose Only</h3>
            <p className={styles.p}><strong>CRITICAL DISCLAIMER:</strong> The Service is provided solely for <b>entertainment and informational purposes</b>. All astrological content, readings, predictions, insights, and guidance generated by our AI system are:</p>
            <ul className={styles.list}>
              <li><b>Not professional advice:</b> The Service does not provide medical, legal, financial, psychological, relationship, career, or any other professional advice</li>
              <li><b>Not scientifically validated:</b> Astrological interpretations are based on Vedic astrology traditions and are not scientifically proven or verifiable</li>
              <li><b>Not guaranteed to be accurate:</b> We make no representations or warranties about the accuracy, completeness, reliability, or applicability of any astrological content</li>
              <li><b>For entertainment use only:</b> You should not make any significant life decisions based solely on information provided by the Service</li>
            </ul>
            <p className={styles.p}>You acknowledge that the Service uses artificial intelligence to generate astrological content, and such content may contain errors, inaccuracies, or inconsistencies.</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>2.3 No Professional Relationship</h3>
            <p className={styles.p}>Use of the Service does not create any professional relationship (e.g., astrologer-client, doctor-patient, attorney-client, or financial advisor-client) between you and Anantor or any third party.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>3. User Accounts and Registration</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>3.1 Account Creation</h3>
            <p>To access the Service, you must create an account by providing accurate and complete information, including:</p>
            <ul className={styles.list}>
              <li>Your full name</li>
              <li>A valid phone number for account verification</li>
              <li>Your date of birth (required for astrological calculations)</li>
              <li>Your time of birth (required for accurate birth chart generation)</li>
              <li>Your place of birth (geographic location required for astrological chart generation)</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>3.2 Accuracy of Information</h3>
            <p>You represent and warrant that:</p>
            <ul className={styles.list}>
              <li>All information you provide during registration and while using the Service is accurate, current, and complete</li>
              <li>You will promptly update your account information if it changes</li>
              <li>You understand that inaccurate birth details (date, time, or place) will result in inaccurate astrological readings and content</li>
            </ul>
            <p className={styles.p}><strong>Important:</strong> Birth information is fundamental to Vedic astrology calculations. Inaccurate information will affect the quality and relevance of the content you receive.</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>3.3 Account Security</h3>
            <p>You are solely responsible for:</p>
            <ul className={styles.list}>
              <li>Maintaining the confidentiality of your account credentials and login information</li>
              <li>All activities that occur under your account, whether or not authorized by you</li>
              <li>Any device from which you access the Service</li>
              <li>Ensuring that no unauthorized person has access to your account</li>
            </ul>
            <p className={styles.p}>You agree to:</p>
            <p>Notify us immediately at <em>contact@anantor.com</em> if you suspect any unauthorized use of your account or any security breach. We are not liable for any loss or damage arising from your failure to maintain account security.</p>
            <p><b>We are not liable for any loss or damage arising from your failure to maintain account security.</b></p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>3.4 Account Suspension or Termination</h3>
            <p>We reserve the right to suspend, disable, or terminate your account at any time, with or without notice, if:</p>
            <ul className={styles.list}>
              <li>You violate these Terms or our Privacy Policy</li>
              <li>You engage in prohibited conduct (as defined in Section 5)</li>
              <li>We suspect fraudulent, abusive, or illegal activity</li>
              <li>Required by law or legal process</li>
              <li>Necessary to protect the Service, our rights, or other users</li>
            </ul>
            <p className={styles.p}>You may delete your account at any time by in app linkage to delete account in profile section or following the instructions in our Privacy Policy or by contacting us at <em>contact@anantor.com</em>.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>4. User Content and Intellectual Property</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>4.1 Your Content</h3>
            <p>"User Content" means any information, data, questions, text, or other materials you submit, upload, or transmit through the Service, including:</p>
            <ul className={styles.list}>
              <li>Questions you ask within the app</li>
              <li>Personal information you provide (name, birth details, etc.)</li>
              <li>Feedback, comments, or communications you send to us</li>
              <li>Any other content you create or share through the Service</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>4.2 Ownership of User Content</h3>
            <p className={styles.p}>You retain ownership, but grant us a <b>non-exclusive, worldwide, royalty-free, sublicensable, transferable license </b> to:</p>
            <ul className={styles.list}>
              <li>Use, store, reproduce, process, adapt, modify, and display your User Content.</li>
              <li>Generate AI-based astrological content.</li>
              <li>Improve and enhance the Service and AI algorithms.</li>
              <li>Comply with legal obligations and enforce these Terms.</li>
            </ul>
            <p className={styles.p}>This license exists solely to enable us to operate, provide, and improve the Service. We will not sell or share your User Content with third parties for their marketing purposes.</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>4.4 Our Intellectual Property</h3>
            <p className={styles.p}>The Service, including but not limited to its software, design, features, functionality, trademarks, logos, graphics, user interface, AI algorithms, and all content generated by us (excluding User Content), is owned by Anantor or our licensors and is protected by:
            <br/>Copyright laws
            <br/>Trademark laws
            <br/>Patent laws
            <br/>Trade secret laws
            <br/>Other intellectual property laws of India and international treaties
            <br/>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal, non-commercial use only, subject to these Terms.</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>4.5 Restrictions on Use</h3>
            <p>You may not, and you agree not to:</p>
            <ul className={styles.list}>
              <li>Copy, modify, distribute, sell, lease, rent, or sublicense any part of the Service</li>
              <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Service</li>
              <li>Remove, alter, or obscure any copyright, trademark, or other proprietary rights notices</li>
              <li>Use the Service to create a competing product or service</li>
              <li>Use any automated systems (bots, scrapers, crawlers) to access or collect data from the Service</li>
              <li>Frame or mirror any part of the Service without our prior written permission</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>4.6 AI-Generated Content</h3>
            <p className={styles.p}>All astrological content generated by our AI system (readings, insights, predictions, compatibility analyses, etc.) is owned by Anantor. While this content is personalized for you, it is created using our proprietary AI technology and algorithms, and you do not acquire any ownership rights to the AI-generated content.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>5. Prohibited Conduct and User Responsibilities</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>5.1 Prohibited Activities</h3>
            <p>You agree that you will not, and will not permit others to:</p>
            <ol className={styles.list} style={{ listStyleType: 'none' }}>
              <li><strong>a) Violate Laws or Regulations:</strong> 
              <ul className={styles.list}>
                <li>Use the Service in any way that violates applicable laws, regulations, or legal requirements, including but not limited to the Information Technology Act, 2000, DPDPA, Indian Penal Code, or any other Indian laws </li>
                <li>Engage in any activity that is unlawful, fraudulent, or harmful</li>
              </ul>
              </li>
              <li><strong>b) Misuse the Service:</strong> 
              <ul className={styles.list}>
                <li>Use the Service for any commercial purpose without our prior written consent</li>
                <li>Interfere with, disrupt, or damage the Service, servers, or networks</li>
                <li>Attempt to gain unauthorized access to any part of the Service, other user accounts, or computer systems or networks</li>
                <li>Use the Service to transmit viruses, malware, spyware, or any other malicious code</li>
                <li>Overload, flood, spam, or mail-bomb the Service</li>
                <li>Circumvent or bypass any security features, authentication measures, or access controls</li>
              </ul>
              </li>
              <li><strong>c) Harmful or Abusive Content:</strong> 
              <p>Upload, post, or transmit any content that is :</p>
              <ul className={styles.list}>
                <li>unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or hateful</li>
                <li>Invasive of another person's privacy or publicity rights</li>
                <li>Infringing on intellectual property rights</li>
                <li>Containing child sexual abuse material (CSAM) or content that exploits or endangers children</li>
                <li>Promoting violence, terrorism, or illegal activities</li>
                <li>Contains false, misleading, or fraudulent information</li>
                <li>Constitutes spam or unsolicited advertising</li>
              </ul>
              </li>
              <li><strong>d) Impersonation and Misrepresentation:</strong> 
              <ul className={styles.list}>
                <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity</li>
                <li>Use another person's account without permission</li>
                <li>Provide false, inaccurate, or misleading information (including false birth details)</li>
                <li>Create multiple accounts to abuse the Service or circumvent restrictions</li>
              </ul>
              </li>
              <li><strong>e) Scraping and Data Mining:</strong> 
              <ul className={styles.list}>
                <li>Use any automated means (including bots, scripts, or web crawlers) to access, scrape, or collect data from the Service</li>
                <li>Extract or harvest user information without authorization</li>
                <li>Use data mining, robots, or similar data gathering or extraction methods</li>
              </ul>
              </li>
              <li><strong>f) Abuse of Social Features:</strong> 
              <ul className={styles.list}>
                <li>Spam friend requests or messages</li>
                <li>Harass, stalk, threaten, or intimidate other users</li>
                <li>Share another user's personal information without consent</li>
                <li>Use the contact-matching feature to spam or harass contacts</li>
              </ul>
              </li>
            </ol>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>5.2 Consequences</h3>
            <p>If you engage in any prohibited conduct, we may:</p>
            <ul className={styles.list}>
              <li>Issue a warning</li>
              <li>Temporarily suspend your account</li>
              <li>Permanently terminate your account and access to the Service</li>
              <li>Remove any prohibited content you have posted</li>
              <li>Report your conduct to law enforcement or regulatory authorities</li>
              <li>Take legal action to recover damages and costs</li>
              <li>Cooperate with investigations by law enforcement or government agencies</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>5.3 Your Responsibilities</h3>
            <p>You are responsible for:</p>
            <ul className={styles.list}>
              <li>Ensuring your use of the Service complies with all applicable laws</li>
              <li>All content you submit through the Service</li>
              <li>Your interactions with other users</li>
              <li>Any consequences resulting from your use of the Service</li>
              <li>Maintaining the security of your account</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>6. Contacts Access and Social Features</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>6.1 Optional Contacts Permission</h3>
            <p className={styles.p}>The Service includes a feature that allows you to find friends who also use Anantor. This feature is <b>entirely optional</b> and requires your explicit permission to access your device contacts.</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>6.2 How Contacts Matching Works</h3>
            <p>If you grant contacts permission:</p>
            <ul className={styles.list}>
              <li>We will access names and phone numbers from your device address book</li>
              <li>We will normalize phone numbers to a standard format (e.g., adding country codes)</li>
              <li>We will securely transmit these normalized phone numbers to our servers</li>
              <li>We will match them against existing Anantor users</li>
              <li>You will be able to see which of your contacts use Anantor and send them friend requests</li>
              <li>Your contacts who use Anantor may see you in their suggested friends list</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>6.3 Your Control Over Contacts Access</h3>
            <ul className={styles.list}>
              <li><b>You can deny permission:</b> The Service remains fully functional if you choose not to grant contacts access</li>
              <li><b>You can revoke permission:</b> You can revoke contacts access at any time through your device settings (Settings &gt; Apps &gt; Anantor &gt; Permissions)</li>
              <li><b>No penalty for denial:</b> Denying or revoking contacts permission will not affect your ability to use other features of the Service</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>6.4 Data Processing for Contacts</h3>

            <ul className={styles.list}>
              <li>We do not store your full address book on our servers permanently</li>
              <li>We only store hashed or normalized phone numbers for matching purposes</li>
              <li>We do not share your contacts' information with third parties for marketing purposes</li>
              <li>Our use of contact information is governed by our Privacy Policy and the DPDPA</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>6.5 Friend Connections and Compatibility</h3>
            <ul className={styles.list}>
              <li>When you connect with friends on Anantor, they may see your name, profile information, and astrological compatibility analysis</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>7. Notifications and Communications</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>7.1 Push Notifications</h3>
            <p>If you enable push notifications, we may send you:</p>
            <ul className={styles.list}>
              <li>Service-related notifications (account security, important updates)</li>
              <li>Astrological content notifications (daily horoscopes, personalized insights)</li>
              <li>Social notifications (friend requests, compatibility updates)</li>
              <li>Promotional notifications about new features (you can opt out of these)</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>7.2 Controlling Notifications</h3>
            <ul className={styles.list}>
              <li>You can enable or disable push notifications at any time through your device settings</li>
              <li>Disabling notifications will not affect your ability to use the Service</li>
              <li>We may still send you critical service-related communications via email or SMS even if you disable push notifications</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>7.3 Communications from Anantor</h3>
            <p>By using the Service, you consent to receive communications from us via:</p>
            <ul className={styles.list}>
              <li>In-app notifications</li>
              <li>SMS to your registered phone number</li>
              <li>Push notifications (if enabled)</li>
            </ul>
            <p>These communications may include:</p>
            <ul className={styles.list}>
              <li>Service announcements and updates</li>
              <li>Security alerts</li>
              <li>Responses to your inquiries</li>
              <li>Legal notices</li>
              <li>Changes to Terms or Privacy Policy</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>8. Privacy and Data Protection (DPDPA Compliance)</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>8.1 Privacy Policy</h3>
            <p className={styles.p}>Your privacy is important to us. Our Privacy Policy explains:</p>
            <ul className={styles.list}>
              <li>What personal information we collect</li>
              <li>How we use and process your information</li>
              <li>How we protect your information</li>
              <li>Your rights under the Digital Personal Data Protection Act, 2023</li>
              <li>How to exercise your rights</li>
            </ul>
            <p><b>You must read our Privacy Policy before using the Service. By using the Service, you consent to the collection, use, and processing of your personal data as described in our Privacy Policy.</b></p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>8.2 Data Fiduciary and Data Principal</h3>
            <ul className={styles.list}>
              <li><b>Anantor is the Data Fiduciary</b> under the DPDPA, responsible for processing your personal data</li>
              <li><b>You are the Data Principal</b> under the DPDPA, with specific rights regarding your personal data</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>8.3 Your Rights Under DPDPA</h3>
            <p>As a Data Principal, you have the right to:</p>
            <ul className={styles.list}>
              <li><b>Access</b>: Request a summary of your personal data we hold</li>
              <li><b>Correction</b>: Request correction of inaccurate or incomplete data</li>
              <li><b>Erasure</b>: Request deletion of your account and personal data</li>
              <li><b>Consent Withdrawal</b>: Withdraw your consent for data processing at any time</li>
              <li><b>Grievance Redressal</b>: File complaints if your rights are violated</li>
              <li><b>Nominate</b>: Nominate another individual to exercise your rights in case of death or incapacity</li>
            </ul>
            <p>To exercise these rights, contact us at <b>contact@anantor.com</b>. We will respond within the timelines prescribed under the DPDPA.</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>8.4 Data Security</h3>
            <p>We implement reasonable security safeguards to protect your personal data, including:</p>
            <ul className={styles.list}>
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security audits and monitoring</li>
            </ul>
            <p>However, no method of electronic transmission or storage is 100% secure. You use the Service at your own risk.</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>8.5 Data Breach Notification</h3>
            <p>In the event of a personal data breach that is likely to cause harm to you, we will:</p>
            <ul className={styles.list}>
              <li>Notify the Data Protection Board of India as required by the DPDPA</li>
              <li>Notify affected users promptly via email, SMS, or in-app notification</li>
              <li>Provide information about the nature of the breach and remedial measures</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>8.6 Third-Party Data Sharing</h3>
            <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
            <ul className={styles.list}>
              <li>Service providers who assist in operating the Service (subject to data processing agreements)</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Third parties with your explicit consent</li>
            </ul>
            <p>For complete details, please refer to our Privacy Policy.</p>
          </section>

          <p className={styles.p}><strong> As of the date of these Terms, the Service does not offer any paid subscriptions, in-app purchases, or premium features.</strong> All features are currently available free of charge.</p>

          <section>
            <h2 className={styles.sectionTitle}>9. Disclaimers</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>9.1 No Professional Advice Disclaimer</h3>
            <p><b>THE SERVICE IS FOR ENTERTAINMENT PURPOSES ONLY AND DOES NOT CONSTITUTE PROFESSIONAL ADVICE.</b> Specifically:</p>
            <ul className={styles.list}>
              <li>Not medical advice: The Service does not diagnose, treat, cure, or prevent any medical condition. Always consult a qualified healthcare professional for medical concerns</li>
              <li>Not legal advice: The Service does not provide legal advice or substitute for consultation with a qualified attorney</li>
              <li>Not financial advice: The Service does not provide financial, investment, or tax advice. Consult a certified financial advisor for financial decisions</li>
              <li>Not psychological advice: The Service does not provide mental health counseling or therapy. Seek professional help for psychological or emotional concerns</li>
              <li>Not relationship advice: The Service does not replace professional relationship counseling or therapy</li>
            </ul>
            <p><b>YOU ASSUME ALL RISKS ASSOCIATED WITH RELYING ON INFORMATION PROVIDED BY THE SERVICE.</b></p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>9.2 AI-Generated Content Disclaimer</h3>
            <p>All astrological content is generated using artificial intelligence (AI) algorithms based on Vedic astrology principles. You acknowledge and agree that:</p>
            <ul className={styles.list}>
              <li>AI-generated content may contain errors, inaccuracies, inconsistencies, or biases</li>
              <li>AI technology is not perfect and may produce unexpected or inappropriate results</li>
              <li>We do not manually review or verify all AI-generated content before it is provided to you</li>
              <li>We are not responsible for any decisions you make based on AI-generated content</li>
              <li>AI-generated content is not a substitute for professional consultation or advice</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>9.3 Third-Party Services and Links</h3>
            <p>The Service may contain links to third-party websites, services, or resources that are not owned or controlled by Anantor. We:</p>
            <ul className={styles.list}>
              <li>Do not endorse or assume any responsibility for third-party content, privacy policies, or practices</li>
              <li>Are not liable for any damage or loss caused by your use of third-party services</li>
              <li>Encourage you to review the terms and privacy policies of any third-party services you access</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>9.4 User Interactions</h3>
            <p>You are solely responsible for your interactions with other users of the Service. We:
            </p>
            <ul className={styles.list}>
              <li>Do not screen or verify users</li>
              <li>Are not responsible for the conduct of any user</li>
              <li>Are not liable for any disputes, conflicts, or harm arising from user interactions</li>
              <li>Reserve the right (but have no obligation) to monitor or intervene in disputes</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>9.5 Limitation of Liability</h3>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY INDIAN LAW, ANANTOR, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR:
            </p>
            <ol className={styles.list}>
              <li><strong>a) Indirect, Incidental, Special, Consequential, or Punitive Damages, including but not limited to:</strong> 
              <ul>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or information</li>
                <li>Loss of goodwill or reputation</li>
                <li>Emotional distress or mental anguish</li>
                <li>Cost of substitute services</li>
                <li>Any other intangible losses</li>
              </ul>
              </li>
              <li><strong>b) Direct Damages arising from or related to:</strong> 
              <ul>
                <li>Your use of or inability to use the Service</li>
                <li>Reliance on any content, information, or advice provided through the Service</li>
                <li>Decisions made based on astrological content</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Errors, bugs, viruses, or malicious code in the Service</li>
                <li>Interruptions, delays, or unavailability of the Service</li>
                <li>Actions or omissions of third parties</li>

              </ul>
              </li>
            </ol>
            <p><b>EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</b></p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>9.6 Basis of the Bargain</h3>
            <p className={styles.p}>You acknowledge that the disclaimers and limitations of liability in this Section 9 are fundamental elements of the agreement between you and Anantor. The Service would not be provided to you without these limitations.</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>9.7 Jurisdiction-Specific Rights</h3>
            <p className={styles.p}>Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>10. Indemnification</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>10.1 Your Indemnification Obligations</h3>
            <p className={styles.p}>You agree to indemnify, defend, and hold harmless Anantor, its parent company, subsidiaries, affiliates, directors, officers, employees, agents, partners, licensors, service providers, and contractors (collectively, the "Indemnified Parties") from and against any and all:</p>
            <ul className={styles.list}>
              <li>Claims, demands, actions, or proceedings</li>
              <li>Liabilities, damages, losses, and expenses (including reasonable legal fees and costs)</li>
            </ul>
            <p className={styles.p}>Arising out of or related to:</p>
            <ol className={styles.list}>
              <li><strong>a) Your Use of the Service:</strong> 
              <ul>
                <li>Your access to or use of the Service</li>
                <li>Your reliance on any content or information provided by the Service</li>
                <li>Decisions you make based on astrological content</li>
              </ul>
              </li>
              <li><strong>b) Your Violation of These Terms:</strong> 
              <ul>
                <li>Breach of any representation, warranty, or obligation in these Terms</li>
                <li>Violation of any applicable laws or regulations</li>
                <li>Infringement of third-party intellectual property, privacy, or other rights</li>
              </ul>
              </li>
              <li><strong>c) Your User Content:</strong> 
              <ul>
                <li>Any User Content you submit, upload, or transmit through the Service</li>
                <li>Claims that your User Content infringes third-party rights</li>
              </ul>
              </li>
              <li><strong>d) Your Conduct:</strong> 
              <ul>
                <li>Your interactions with other users</li>
                <li>Prohibited conduct or activities</li>
                <li>Damage to the Service, servers, or networks</li>
              </ul>
              </li>
            </ol>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>10.2 Cooperation in Defense</h3>
            <p>You agree to: </p>
            <ul className={styles.list}>
              <li>Cooperate fully with us in the defense of any claim</li>
              <li>Provide us with all necessary assistance, information, and authority to defend</li>
              <li>Not settle any claim without our prior written consent</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>10.3 Our Right to Assume Defense</h3>
            <p>We reserve the right, at our own expense, to assume the exclusive defense and control of any matter subject to indemnification by you. You agree to cooperate with our defense of such claims.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>11. Term and Termination</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>11.1 Term</h3>
            <p className={styles.p}>These Terms commence on the date you first access or use the Service and continue until terminated in accordance with this Section 12.</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>11.2 Termination by You</h3>
            <ul className={styles.list}>
              <li>Deleting your account through the app or by contacting us at <em>contact@anantor.com</em></li>
              <li>Uninstalling the app from your device</li>
              <li>Ceasing all access and use of the Service</li>
            </ul>
            <p className={styles.p}>Upon termination by you: 
              <ul className={styles.list}>
                <li>Your account and personal data will be deleted in accordance with our Privacy Policy and the DPDPA</li>
                <li>You will lose access to all content, data, and features associated with your account</li>
              </ul>
            </p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>11.3 Termination by Us</h3>
            <p>We may suspend or terminate your access to the Service, with or without notice, if:</p>
            <ul className={styles.list}>
              <li>You violate these Terms or our Privacy Policy</li>
              <li>You engage in prohibited conduct</li>
              <li>We suspect fraudulent, abusive, or illegal activity</li>
              <li>Required by law, court order, or regulatory authority</li>
              <li>We discontinue the Service (in whole or in part)</li>
              <li>Necessary to protect the Service, our rights, or other users' safety</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>11.4 Effect of Termination</h3>
            <p className={styles.p}>Upon termination of these Terms (by either party): </p>
              <ul className={styles.list}>
                <li>Your right to access and use the Service immediately ceases</li>
                <li>All licenses granted to you in these Terms will immediately terminate</li>
                <li>We may delete your account, User Content, and all associated data</li>
              </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>12. Changes to These Terms</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>12.1 Right to Modify</h3>
            <p className={styles.p}>We reserve the right to modify, amend, or update these Terms at any time, at our sole discretion. </p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>12.2 Notice of Changes</h3>
            <p className={styles.p}>When we make changes to these Terms: </p>
              <ul className={styles.list}>
                <li>We will update the "Last Updated" date at the top of these Terms</li>
                <li>For material changes that significantly affect your rights or obligations, we will notify you through In-app notifications or prominent notice within the app</li>
              </ul>
            
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>12.3 Your Acceptance of Changes</h3>
            <p className={styles.p}>Your continued use of the Service after the effective date of the updated Terms constitutes your acceptance of the changes. If you do not agree with the updated Terms: </p>
              <ul className={styles.list}>
                <li>You must stop using the Service immediately</li>
                <li>You may delete your account by contacting us at <em>contact@anantor.com</em></li>
              </ul>
            
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>12.4 Review Terms Regularly</h3>
            <p className={styles.p}>We encourage you to review these Terms periodically to stay informed of any changes. The "Last Updated" date will indicate when the Terms were last revised.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>13. Dispute Resolution and Governing Law</h2>
            <p className={styles.p}>These Terms, and any disputes arising from or related to these Terms or your use of the Service, shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. This includes but is not limited to: </p>
              <ul className={styles.list}>
                <li>The Digital Personal Data Protection Act, 2023</li>
                <li>The Information Technology Act, 2000</li>
                <li>The Indian Contract Act, 1872</li>
                <li>The Consumer Protection Act, 2019</li>
                <li>The Indian Penal Code, 1860</li>
              </ul>
            <p className={styles.p}><strong>Jurisdiction and Venue</strong><br/>Subject to the arbitration provisions below (if applicable), you agree that any legal action, suit, or proceeding arising out of or related to these Terms or the Service shall be brought exclusively in the courts located in Delhi, India, and you consent to the exclusive jurisdiction of such courts.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>14. Feedback and Suggestions</h2>
            <p className={styles.p}>We welcome your feedback, suggestions, ideas, and comments about the Service ("Feedback"). You may submit Feedback through In-app feedback forms, Email to <em>contact@anantor.com</em>, and App store reviews</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>License to Use Feedback</h3>
            <p className={styles.p}>By submitting Feedback, you grant us a perpetual, irrevocable, worldwide, royalty-free, fully sublicensable, and transferable license to: Incorporate your Feedback into the Service or other products, Publicly display, perform, and distribute your Feedback and Commercialize products or services based on your Feedback</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>No Obligation or Compensation</h3>
            <p>You acknowledge and agree that:</p>
            <ul className={styles.list}>
              <li>We have no obligation to implement, use, or respond to your Feedback</li>
              <li>You will not receive any compensation or credit for your Feedback</li>
              <li>We may already be working on similar ideas independently</li>
              <li>Your Feedback is provided voluntarily and does not create a confidential relationship</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>No Confidential Information</h3>
            <p className={styles.p}>Do not submit any Feedback that contains: </p>
              <ul className={styles.list}>
                <li>Confidential or proprietary information</li>
                <li>Personal information about yourself or others</li>
                <li>Trade secrets or sensitive business information</li>
              </ul>
              <p> Any Feedback you submit will be treated as non-confidential and non-proprietary.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>15. Updates</h2>
            <p className={styles.p}>We may release updates or modify/suspend features. Maintenance may temporarily interrupt the Service.</p>
            <p> You are responsible for downloading and installing updates. Failure to update may reduce functionality or security. We are not liable for issues arising from failure to update.</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>16. Specific Disclaimers for Astrological Content</h2>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>16.1 Nature of Vedic Astrology</h3>
            <p className={styles.p}>Vedic astrology is a traditional system of astrology originating from ancient India. It is based on: Astronomical calculations of planetary positions, Interpretive frameworks developed over centuries and Cultural and philosophical beliefs
            <br/><b>Vedic astrology is not a science.</b> It is a belief system and cultural practice. There is no scientific evidence that astrological predictions are accurate or that planetary positions influence human affairs.</p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>16.2 AI-Generated Interpretations</h3>
            <p>All astrological content in the Service is generated by artificial intelligence algorithms trained on Vedic astrology texts, principles, and interpretations. You acknowledge that:</p>
            <ul className={styles.list}>
              <li>AI interpretations may differ from those of human astrologers</li>
              <li>AI may generate content that is inconsistent, contradictory, or culturally insensitive</li>
              <li>AI may produce errors, hallucinations, or nonsensical output</li>
              <li>AI-generated content is based on patterns in training data and does not reflect divine, mystical, or supernatural knowledge</li>
            </ul>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>16.3 No Guarantees or Predictions</h3>
            <p>We make absolutely no guarantees, warranties, or representations that:</p>
            <ul className={styles.list}>
              <li>Astrological predictions will come true or be accurate</li>
              <li>Astrological insights reflect your actual personality, destiny, or future</li>
              <li>Compatibility analyses accurately reflect relationship dynamics</li>
              <li>Following astrological guidance will lead to positive outcomes</li>
              <li>Any specific event predicted by the Service will occur</li>
            </ul>
            <p><b>Astrological content is speculative, interpretive, and for entertainment only.</b></p>
            <h3 className={styles.p} style={{ fontWeight: 600, marginBottom: '0.5rem' }}>16.4 Personal Responsibility for Decisions</h3>
            <p className={styles.p}>You are solely responsible for all decisions you make, whether or not influenced by content from the Service. You should:</p>
            <ul className={styles.list}>
              <li>Use common sense and critical thinking</li>
              <li>Consult qualified professionals (doctors, lawyers, financial advisors, therapists) for important decisions</li>
              <li>Not make major life decisions (marriage, divorce, career changes, medical treatments, financial investments, legal matters) based solely on astrological content</li>
              <li>Recognize that you have free will and agency over your life</li>
            </ul>
            <br/><strong>DO NOT rely on astrological content for:</strong>
            <ul className={styles.list}>
              <li>Medical diagnoses or treatment decisions</li>
              <li>Legal advice or decisions</li>
              <li>Financial investments or business decisions</li>
              <li>Relationship decisions (marriage, divorce, dating)</li>
              <li>Career or educational choices</li>
              <li>Mental health or psychological issues</li>
              <li>Safety or emergency situations</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>17. Grievance Redressal Mechanism</h2>
            <p className={styles.p}>To file a grievance or complaint, send an email to <em>contact@anantor.com</em> with the subject line "Grievance - [Brief Description]" and Include the following information:
            <ul className={styles.list}>
              <li>Your name and registered phone number</li>
              <li>Description of the grievance or complaint</li>
              <li>Specific content, feature, or user involved (if applicable)</li>
              <li>Date and time of the incident</li>
              <li>Desired resolution or remedy</li>
              <li>Supporting documentation (screenshots, emails, etc.)</li>
            </ul>
            <br/>Supporting documentation (screenshots, emails, etc.)
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>18. Contact Us</h2>
            <p className={styles.p}>If you have any questions, concerns, or feedback regarding these Terms, please contact us: <em>contact@anantor.com</em></p>
            <p className={styles.p}><strong>BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE, YOU MUST NOT USE THE SERVICE.</strong></p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
