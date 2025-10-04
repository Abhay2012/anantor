'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

function HomePage() {
  const [stars, setStars] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          animationDelay: Math.random() * 3,
          animationDuration: Math.random() * 3 + 2,
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const colorPalette = {
    primary: [
      { name: 'Deep Space Black', hex: '#000000', category: 'Primary' },
      { name: 'Cosmic Purple', hex: '#6B46C1', category: 'Primary' },
      { name: 'Nebula Pink', hex: '#EC4899', category: 'Primary' },
      { name: 'Stellar Blue', hex: '#3B82F6', category: 'Primary' },
      { name: 'Aurora Green', hex: '#10B981', category: 'Primary' },
    ],
    secondary: [
      { name: 'Midnight Navy', hex: '#0A0A0A', category: 'Secondary' },
      { name: 'Lavender Mist', hex: '#C7AAFF', category: 'Secondary' },
      { name: 'Rose Quartz', hex: '#FBB6CE', category: 'Secondary' },
      { name: 'Celestial Teal', hex: '#22D3EE', category: 'Secondary' },
      { name: 'Starlight Gold', hex: '#FBBF24', category: 'Secondary' },
    ],
  }

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex)
  }

  return (
    <div className="app">
      <div className="starfield">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      </div>

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo-container">
            <div className="logo-wrapper">
              <Link href="/">
                <img
                  src="/anator_logo_transparent.png"
                  alt="ANANTOR Logo"
                  className={`logo-image ${isScrolled ? 'transitioning' : ''}`}
                />
              </Link>
            </div>
            <p className="tagline">Your cosmic destiny awaits</p>
          </div>
        </div>
      </header>

      <nav className={`fixed-navbar ${isScrolled ? 'visible' : ''}`}>
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link href="/">
              <img src="/anator_logo_transparent.png" alt="ANANTOR Logo" className="navbar-logo-image" />
            </Link>
            <span className="navbar-logo-text">ANANTOR</span>
          </div>
          <div className="navbar-menu">
            <Link href="/contact-us" className="navbar-link">Contact Us</Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">
              Anantor: <span className="gradient-text"> Discover the Cosmos Within</span>
            </h2>
            <p className="hero-description">
              Reveal the mysteries of your soul and the bonds you share. Connect, reflect, and journey through the stars together.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary">
                <span>Begin Your Divine Journey</span>
                <div className="button-glow"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: '6rem' }} className="">
        <div className="container">
          <div className="wisdom-content">
            <h2 className="wisdom-heading">
              Human Wisdom, <span className="gradient-text">Cosmic Guidance</span>
            </h2>
            <h3 className="wisdom-subheading">Ancient Stars, Personal Stories</h3>
            <p className="wisdom-text">
              No lines to cross, no waiting for answers. Anantor brings the universe's wisdom into your daily life. Drawing from the poetry of time honored scriptures and the guidance of gifted astrologers, Anantor offers gentle, immediate insights about you and the people who matter most.
            </p>
          </div>
        </div>
      </section>

      <section className="deeper-connections-section">
        <div className="container">
          <div className="deeper-connections-content">
            <h2 className="deeper-connections-heading">
              <span className="gradient-text">Deeper Connections</span>
            </h2>
            <h3 className="deeper-connections-subheading">Together, Beneath the Same Stars</h3>

            <div className="connections-grid">
              <div className="connection-card">
                <h4 className="connection-card-title">Shared Journeys</h4>
                <p className="connection-card-text">
                  Use your palm to reflect on inner truths, then invite friends to uncover the unique symphony of energies that connects you both. Celebrate the patterns of fate and friendship that the stars illuminate.
                </p>
              </div>

              <div className="connection-card">
                <h4 className="connection-card-title">Instant Insights, Enduring Meaning</h4>
                <p className="connection-card-text">
                  Receive beautiful, personal readings filled with clarity and compassion, not predictions, but maps for mindful living and deeper understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="planets-song-section">
        <div className="container">
          <div className="planets-song-content">
            <h2 className="planets-song-heading">
              The Song of the <span className="gradient-text">Planets</span>
            </h2>
            <h3 className="planets-song-subheading">Every Soul is a Constellation</h3>

            <div className="planets-grid">
              <div className="planet-card">
                <div className="planet-icon">☉</div>
                <h4 className="planet-name">Sun</h4>
                <p className="planet-description">Your core self, radiant and unique.</p>
              </div>

              <div className="planet-card">
                <div className="planet-icon">☽</div>
                <h4 className="planet-name">Moon</h4>
                <p className="planet-description">The tides of feeling and empathy within.</p>
              </div>

              <div className="planet-card">
                <div className="planet-icon">☿</div>
                <h4 className="planet-name">Mercury</h4>
                <p className="planet-description">The bridge between minds and hearts.</p>
              </div>

              <div className="planet-card">
                <div className="planet-icon">♀</div>
                <h4 className="planet-name">Venus</h4>
                <p className="planet-description">The poetry of love and harmony.</p>
              </div>

              <div className="planet-card">
                <div className="planet-icon">♂</div>
                <h4 className="planet-name">Mars</h4>
                <p className="planet-description">The spark of courage and movement.</p>
              </div>

              <div className="planet-card">
                <div className="planet-icon">♃</div>
                <h4 className="planet-name">Jupiter</h4>
                <p className="planet-description">Horizons ever expanding, the spirit's journey.</p>
              </div>
            </div>

            <p className="planets-conclusion">
              These celestial companions compose the background music of every friendship and life story.
            </p>
          </div>
        </div>
      </section>

      <section className="phone-mockup">
        <div className="container">
          <div className="mockup-content">
            <div className="mockup-text">
              <h3 style={{ textAlign: 'left' }} className="section-title">The Anantor Way</h3>
              <p className="mockup-description">Intuitive. Gentle. Deeply Personal.</p>
              <ul className="feature-list">
                <li>✨ Rooted in the living heart of the world’s star wisdom</li>
                <li>🌟 Palm readings and soulful insights for everyday clarity</li>
                <li>🔮 Celebrate yourself and your friends, wherever you are</li>
                <li>📱 Beautiful, serene experience for all</li>
              </ul>
            </div>
            <div className="phone-container">
              <div className="phone-mockup-device">
                <img src="/anantor_today.png" alt="ANANTOR Logo" className="phone-mockup-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Explore Your Destiny?</h3>
            <p className="cta-description">Step Into Your Constellation</p>
            <button className="download-button">
              <span className="button-text">Begin My Story</span>
              <div className="button-particles"></div>
            </button>
            <div className="app-stores">
              <div className="store-badge">App Store</div>
              <div className="store-badge">Google Play</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2025 ANANTOR. All rights reserved. Made with ✨ for the cosmos.
            <span style={{ marginLeft: '0.75rem' }}>
              <Link href="/privacy" style={{ color: '#C7AAFF', textDecoration: 'underline' }}>Privacy Policy</Link>
            </span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
