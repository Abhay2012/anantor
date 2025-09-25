import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <div className="app" style={{ paddingTop: '6rem' }}>
      {/* Permanent Fixed Navbar */}
      <nav className={`fixed-navbar visible`}>
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/">
              <img src="/anator_logo_transparent.png" alt="ANANTOR Logo" className="navbar-logo-image" />
            </Link>
            <span className="navbar-logo-text">ANANTOR</span>
          </div>
          <div className="navbar-menu">
            {/** <a href="#features" className="navbar-link">Features</a>
            <a href="#download" className="navbar-link">Download</a> **/}
            <a href="/contact-us" className="navbar-link">Contact Us</a>
          </div>
        </div>
      </nav>

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
