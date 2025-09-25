import React from 'react'
import { Link } from 'react-router-dom'

function DeleteAccount() {
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
            <a href="/contact-us" className="navbar-link">Contact Us</a>
          </div>
        </div>
      </nav>

      <section className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem', color: '#e5e7eb' }}>
        <h1 className="hero-title" style={{ fontSize: '2.25rem', lineHeight: 1.2, marginBottom: '1rem' }}>Request Account & Data Deletion</h1>
        <p style={{ opacity: 0.9, marginBottom: '2rem' }}>
          We respect your privacy. You can request deletion of your account and all associated data at any time by contacting us via email.
        </p>

        <div style={{ display: 'grid', gap: '1.75rem' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>How to Request Deletion</h2>
            <ul style={{ marginLeft: '1rem', listStyle: 'disc', display: 'grid', gap: '0.5rem' }}>
              <li>Send an email to: <a href="mailto:contact@anantor.com" style={{ color: '#C7AAFF', textDecoration: 'underline' }}>contact@anantor.com</a></li>
              <li>Include your registered phone number in the email.</li>
              <li>Our team will process your request and confirm when your account and data have been deleted.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>Data That Will Be Deleted</h2>
            <ul style={{ marginLeft: '1rem', listStyle: 'disc', display: 'grid', gap: '0.5rem' }}>
              <li>Phone number used for login</li>
              <li>User-specific preferences stored in the backend</li>
              <li>Any temporary OTP data</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>Data That May Be Retained</h2>
            <ul style={{ marginLeft: '1rem', listStyle: 'disc', display: 'grid', gap: '0.5rem' }}>
              <li>Anonymous analytics or crash reports (not linked to your account)</li>
              <li>Logs required by law or for security purposes</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>Retention Period</h2>
            <p>Your account and personal data will be deleted as soon as your request is processed, except for any data we are legally required to keep.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#C7AAFF' }}>Contact Us</h2>
            <p>If you face any issues or do not receive confirmation, please email <a href="mailto:contact@anantor.com" style={{ color: '#C7AAFF', textDecoration: 'underline' }}>contact@anantor.com</a></p>
          </section>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 ANANTOR. All rights reserved. Made with ✨ for the cosmos.</p>
        </div>
      </footer>
    </div>
  )
}

export default DeleteAccount
