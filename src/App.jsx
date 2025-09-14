import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [stars, setStars] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)

  // Generate animated starfield
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
          animationDuration: Math.random() * 3 + 2
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  // Handle scroll effect for logo
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  // Color palette data
  const colorPalette = {
    primary: [
      { name: 'Deep Space Black', hex: '#000000', category: 'Primary' },
      { name: 'Cosmic Purple', hex: '#6B46C1', category: 'Primary' },
      { name: 'Nebula Pink', hex: '#EC4899', category: 'Primary' },
      { name: 'Stellar Blue', hex: '#3B82F6', category: 'Primary' },
      { name: 'Aurora Green', hex: '#10B981', category: 'Primary' }
    ],
    secondary: [
      { name: 'Midnight Navy', hex: '#0A0A0A', category: 'Secondary' },
      { name: 'Lavender Mist', hex: '#C7AAFF', category: 'Secondary' },
      { name: 'Rose Quartz', hex: '#FBB6CE', category: 'Secondary' },
      { name: 'Celestial Teal', hex: '#22D3EE', category: 'Secondary' },
      { name: 'Starlight Gold', hex: '#FBBF24', category: 'Secondary' }
    ]
  }

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex)
    // You could add a toast notification here
  }

  return (
    <div className="app">
      {/* Animated Starfield Background */}
      <div className="starfield">
        {stars.map(star => (
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
              animationDuration: `${star.animationDuration}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo-container">
            <div className="logo-wrapper">
              <img 
                src="/anator_logo_transparent.png" 
                alt="ANANTOR Logo" 
                className={`logo-image ${isScrolled ? 'transitioning' : ''}`}
              />
              <h1 className="logo">ANANTOR</h1>
            </div>
            <p className="tagline">Your cosmic destiny awaits</p>
          </div>
        </div>
      </header>

      {/* Fixed Navbar */}
      <nav className={`fixed-navbar ${isScrolled ? 'visible' : ''}`}>
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src="/anator_logo_transparent.png" alt="ANANTOR Logo" className="navbar-logo-image" />
            <span className="navbar-logo-text">ANANTOR</span>
          </div>
          <div className="navbar-menu">
            <a href="#features" className="navbar-link">Features</a>
            <a href="#download" className="navbar-link">Download</a>
            <a href="#contact" className="navbar-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">
                Anantor: 
              <span className="gradient-text"> Discover the Cosmos Within</span>
            </h2>
            <p className="hero-description">
            Reveal the mysteries of your soul and the bonds you share. Connect, reflect, and journey through the stars together.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary">
                <span>Begin Your Divine Journey</span>
                <div className="button-glow"></div>
              </button>
              {/* <button className="cta-button secondary">
                <span>Watch Demo</span>
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Showcase */}
      <section className="color-palette">
        <div className="container">
          <h3 className="section-title">Cosmic Color Palette</h3>
          <div className="palette-grid">
            <div className="palette-section">
              <h4 className="palette-category">Primary Colors</h4>
              <div className="color-swatches">
                {colorPalette.primary.map((color, index) => (
                  <div
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex)}
                  >
                    <div className="color-info">
                      <span className="color-name">{color.name}</span>
                      <span className="color-hex">{color.hex}</span>
                    </div>
                    <div className="swatch-glow"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="palette-section">
              <h4 className="palette-category">Secondary Colors</h4>
              <div className="color-swatches">
                {colorPalette.secondary.map((color, index) => (
                  <div
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex)}
                  >
                    <div className="color-info">
                      <span className="color-name">{color.name}</span>
                      <span className="color-hex">{color.hex}</span>
                    </div>
                    <div className="swatch-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Mockup Section */}
      <section className="phone-mockup">
        <div className="container">
          <div className="mockup-content">
            <div className="mockup-text">
              <h3 className="section-title">Experience the Magic</h3>
              <p className="mockup-description">
                Immerse yourself in stunning visuals and intuitive design. 
                Every interaction feels like touching the stars.
              </p>
              <ul className="feature-list">
                <li>✨ Personalized birth chart readings</li>
                <li>🌟 Daily cosmic insights</li>
                <li>🔮 Compatibility matching</li>
                <li>📱 Beautiful, intuitive interface</li>
              </ul>
            </div>
            <div className="phone-container">
              <div className="phone-mockup-device">
                <div className="phone-screen">
                  <div className="app-preview">
                    <div className="app-header">
                      <div className="status-bar"></div>
                      <div className="app-title">ANANTOR</div>
                    </div>
                    <div className="app-content">
                      <div className="horoscope-card">
                        <div className="zodiac-sign">♈</div>
                        <h4>Today's Reading</h4>
                        <p>Your cosmic energy is aligned for new beginnings...</p>
                      </div>
                      <div className="feature-grid">
                        <div className="feature-item">🔮 Tarot</div>
                        <div className="feature-item">🌙 Moon</div>
                        <div className="feature-item">⭐ Stars</div>
                        <div className="feature-item">💫 Destiny</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Explore Your Destiny?</h3>
            <p className="cta-description">
              Join thousands of Gen Z users discovering their cosmic path
            </p>
            <button className="download-button">
              <span className="button-text">Download ANANTOR</span>
              <div className="button-particles"></div>
            </button>
            <div className="app-stores">
              <div className="store-badge">App Store</div>
              <div className="store-badge">Google Play</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 ANANTOR. All rights reserved. Made with ✨ for the cosmos.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
