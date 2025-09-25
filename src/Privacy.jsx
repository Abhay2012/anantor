import React from 'react'

function Privacy() {
  return (
    <div className="app" style={{ paddingTop: '6rem' }}>
      <section className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem', color: '#e5e7eb' }}>
        <h1 className="hero-title" style={{ fontSize: '2.25rem', lineHeight: 1.2, marginBottom: '1rem' }}>Privacy Policy</h1>
        <p style={{ opacity: 0.9, marginBottom: '2rem' }}>
          This Privacy Policy describes how Anantor ("we," "our," or "us") collects, uses, and protects your information when you use our mobile application. We are committed to protecting your privacy and ensuring you have a secure experience.
        </p>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>1. Information We Collect</h2>
            <p style={{ marginBottom: '0.5rem' }}>To provide you with your personalized cosmic insights, we collect information you provide directly to us:</p>
            <ul style={{ marginLeft: '1rem', listStyle: 'disc', display: 'grid', gap: '0.5rem' }}>
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
            <p style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}>We also collect some data automatically to improve the app:</p>
            <ul style={{ marginLeft: '1rem', listStyle: 'disc', display: 'grid', gap: '0.5rem' }}>
              <li>
                <strong>Device Information:</strong> We collect data about the device you use, such as the model and operating system.
              </li>
              <li>
                <strong>Usage Data:</strong> We track how you interact with the app, including the features you use and crash reports.
              </li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>2. How We Use Your Information</h2>
            <ul style={{ marginLeft: '1rem', listStyle: 'disc', display: 'grid', gap: '0.5rem' }}>
              <li>Deliver your personalized horoscopes, answers to your questions, and compatibility reports.</li>
              <li>Enhance and optimize the app's performance and user experience.</li>
              <li>Communicate with you about new features or support requests.</li>
              <li>Ensure the security of our app.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>3. Sharing of Your Information</h2>
            <p>We do not sell or rent your personal information. We may share it only in the following limited cases:</p>
            <ul style={{ marginLeft: '1rem', listStyle: 'disc', display: 'grid', gap: '0.5rem' }}>
              <li><strong>With Your Consent:</strong> If you give us explicit permission to share your information.</li>
              <li><strong>With Service Providers:</strong> We may share data with third-party services that help us operate our app, such as cloud hosting or analytics providers. These services are bound by confidentiality agreements.</li>
              <li><strong>For Legal Reasons:</strong> If required by law, court order, or government regulation.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>4. Data Security</h2>
            <p>We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. While we strive to protect your data, no internet transmission is 100% secure.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. To do so, please contact us at the email address below.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>6. Children's Privacy</h2>
            <p>Our app is intended for users who are 16 years of age or older. We do not knowingly collect personal information from children under 16.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>7. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy within the app or on our website. Your continued use of the app indicates your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>8. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <p><em>contact@anantor.com</em></p>
          </section>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 ANANTOR. All rights reserved. Made with ✨ for the cosmos.</p>
        </div>
      </footer>
    </div>
  )
}

export default Privacy
