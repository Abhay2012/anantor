import React from 'react'

function ContactUs() {
  return (
    <div className="app" style={{ paddingTop: '6rem' }}>
      <section className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem', color: '#e5e7eb' }}>
        <h1 className="hero-title" style={{ fontSize: '2.25rem', lineHeight: 1.2, marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ opacity: 0.9, marginBottom: '2rem' }}>
          We'd love to hear from you. For support, feedback, partnerships, or general inquiries, reach out using the details below.
        </p>

        <div style={{ display: 'grid', gap: '2rem' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>Email</h2>
            <p>
              You can contact us at <a href="mailto:contact@anantor.com" style={{ color: '#C7AAFF', textDecoration: 'underline' }}>contact@anantor.com</a>
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>What to Include</h2>
            <ul style={{ marginLeft: '1rem', listStyle: 'disc', display: 'grid', gap: '0.5rem' }}>
              <li>Your name</li>
              <li>A brief description of your request</li>
              <li>Any relevant screenshots or device details (optional)</li>
            </ul>
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

export default ContactUs
