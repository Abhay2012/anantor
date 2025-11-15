'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import styles from '../home.module.css'
import Modal from './Modal'

export default function HomeClient() {
  const [stars, setStars] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [isCtaDismissed, setIsCtaDismissed] = useState(false)

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
      if (!isCtaDismissed) {
        setShowStickyCTA(scrollTop > 400)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isCtaDismissed])

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex)
  }

  const handleDismissCTA = () => {
    setIsCtaDismissed(true)
    setShowStickyCTA(false)
  }

  const scrollToFeatures = () => {
    const el = document.getElementById('features')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.app}>
      <Header showTopHeader />

      {/* Background: stars and glows */}
      {/* <div className={styles.starfield}>
        {stars.map((star) => (
          <div
            key={star.id}
            className={styles.star}
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
      </div> */}
      <div className={styles.glowOrbs} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orbPurple}`}></div>
        <div className={`${styles.orb} ${styles.orbPink}`}></div>
        <div className={`${styles.orb} ${styles.orbBlue}`}></div>
      </div>
      {/* <div className={styles.gradientOverlay} aria-hidden="true" /> */}

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
            {/* <div className={styles.heroLeft}> */}
              {/* <div className={styles.badge}>AI-Powered Astrology</div> */}
              <h1 className={styles['hero-title']}>
                <span className={styles['gradient-text']}>Discover Your Cosmic Path with AI Astrology</span>
              </h1>
              <p className={styles['hero-description']}>
                Personalized Daily Horoscope, Compatibility & Future Predictions - powered by Ancient Vedic Wisdom and AI.
              </p>

              <div className={styles.storeButtons}>
                <button className={styles.storeBtn} onClick={() => window.open("https://play.google.com/store/apps/details?id=com.yourcompany.anantor")}>
                  Get it on Google Play
                </button>
              </div>

              <img className={styles['hero-img']} src="hero_img.png" alt="Anantor App Screens"/>
              {/* <button onClick={scrollToFeatures} className={styles.scrollLink}>
                Explore Features ↓
              </button> */}
            {/* </div> */}
        </div>
      </section>

      {/* Quick Features */}
      <section id="features" className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.featuresHead}>
            <h2 className={styles['section-title']}>Your Personalized Astrology Companion</h2>
            <p className={styles['section-description']}>Experience the power of AI-driven cosmic insights tailored just for you</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✨</div>


              <h3 className={styles.featureTitle}>Daily Personalized Horoscope</h3>
              <p className={styles.featureText}>Get hyper personalized insights based on your complete birth chart, not just your sun sign</p>
              <ul className={styles.featureListBullets}>
                <li>Daily forecasts tied to your rising sign and planetary transits</li>
                <li>Align decisions with your strengths and transit windows</li>
                <li>Practical tips for relationships, career, and rhythm of the day</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💬</div>
              <h3 className={styles.featureTitle}>Ask Questions</h3>
              <p className={styles.featureText}>Ask a question and get a clear astrological perspective based on Vedic wisdom</p>
              <ul className={styles.featureListBullets}>
                <li>Unlimited Questions, private and confidential</li>
                <li>Specific, goal-focused answers</li>
                <li>Evidence-based: draws on your birth-chart and current transits</li>
              </ul>
            </div>

            

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💖</div>
              <h3 className={styles.featureTitle}>Relationship Compatibility</h3>
              <p className={styles.featureText}>Understand relationship dynamics through comprehensive birth chart analysis</p>
              <ul className={styles.featureListBullets}>
                <li>What fuels the bond, potential friction, long-term compatibility signals</li>
                <li>Practical tips for improving communication and conflict moments</li>
                <li>Romantic compatibility, Friendship analysis and Family dynamics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Planets (kept, with improved heading already present) */}
      <section className={styles['planets-song-section']}>
        <div className={styles.container}>
          <div className={styles['planets-song-content']}>
            <h2 className={styles['section-title']}>
              The Song of the <span className={styles['gradient-text']}>Planets</span>
            </h2>
            <p className={styles['section-description']} style={{ fontSize: "1.125rem", color: "#99a1af" }}>Every Soul is a Constellation</p>
            <p className={styles['planets-conclusion']} style={{ fontSize: "1rem", color: "#6a7282" }}>
            Anantor analyzes how these celestial forces interact in your unique birth chart to reveal your life's story
            </p>
            <div className={styles['planets-grid']}>
              <div className={styles['planet-card']}>
                <div className={styles['planet-icon']}>☉</div>
                <h4 className={styles['planet-name']}>Sun</h4>
                <p className={styles['planet-description']}>Your core self, radiant and unique.</p>
              </div>

              <div className={styles['planet-card']}>
                <div className={styles['planet-icon']}>☽</div>
                <h4 className={styles['planet-name']}>Moon</h4>
                <p className={styles['planet-description']}>The tides of feeling and empathy within.</p>
              </div>

              <div className={styles['planet-card']}>
                <div className={styles['planet-icon']}>☿</div>
                <h4 className={styles['planet-name']}>Mercury</h4>
                <p className={styles['planet-description']}>The bridge between minds and hearts.</p>
              </div>

              <div className={styles['planet-card']}>
                <div className={styles['planet-icon']}>♀</div>
                <h4 className={styles['planet-name']}>Venus</h4>
                <p className={styles['planet-description']}>The poetry of love and harmony.</p>
              </div>

              <div className={styles['planet-card']}>
                <div className={styles['planet-icon']}>♂</div>
                <h4 className={styles['planet-name']}>Mars</h4>
                <p className={styles['planet-description']}>The spark of courage and movement.</p>
              </div>

              <div className={styles['planet-card']}>
                <div className={styles['planet-icon']}>♃</div>
                <h4 className={styles['planet-name']}>Jupiter</h4>
                <p className={styles['planet-description']}>Horizons ever expanding, the spirit's journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Ready to Unlock Your Cosmic Blueprint?</h3>
            <p className={styles['cta-description']}>Download Anantor now and get your first personalized reading free. Your destiny awaits.</p>
            <div className={styles.storeButtons} style={{ justifyContent: "center" }}>
                <button className={styles.storeBtn} onClick={() => window.open("https://play.google.com/store/apps/details?id=com.yourcompany.anantor")}>
                  Get it on Google Play
                </button>
          
              </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky Mobile CTA */}
      {showStickyCTA && (
        <div className={styles.stickyCta}>
          <button className={styles.stickyDismiss} aria-label="Dismiss" onClick={handleDismissCTA}>×</button>
          <div className={styles.stickyInner}>
            <div className={styles.stickyLeft}>
              <img src="/text-logo.png" alt="Anantor" className={styles.stickyLogo} />
              <div>
                <div className={styles.stickyTitle}>Download Anantor App</div>
                <div className={styles.stickySubtitle}>Free AI Astrology & Horoscope</div>
              </div>
            </div>
            <div className={styles.stickyButtons}>
              <button className={styles.stickyBtn} onClick={() => window.open("https://play.google.com/store/apps/details?id=com.yourcompany.anantor")}>Play</button>

            </div>
          </div>
        </div>
      )}

      <Modal
        open={showModal}
        title="Join Anantor"
        subtext="Please share your email to get early access"
        onClose={() => { setShowModal(false); setError(''); setSuccess(''); }}
      >
        {success ? (
          <>
            <div className={styles.success}>{success}</div>
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.submitBtn}
                onClick={() => { setShowModal(false); setSuccess(''); setError(''); }}
              >
                Close
              </button>
            </div>
          </>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              setError('')
              setSuccess('')
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
              if (!emailRegex.test(email)) {
                setError('Please enter a valid email address.')
                return
              }
              try {
                setIsSubmitting(true)
                const res = await fetch('https://anantor-api.onrender.com/api/feedback', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email }),
                })
                if (!res.ok) {
                  const text = await res.text().catch(() => '')
                  throw new Error(text || 'Request failed')
                }
                setSuccess('Thanks! You’re on the list. We’ll send you an email with the steps to get started.')
                setEmail('')
              } catch (err) {
                setError('Something went wrong. Please try again in a moment.')
              } finally {
                setIsSubmitting(false)
              }
            }}
            className={styles.form}
          >
            <div className="field-group">
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                required
                disabled={isSubmitting}
              />
            </div>
            {error ? <div className={styles.error}>{error}</div> : null}
            <div className={styles.actions}>
              <button type="button" onClick={() => { setShowModal(false); setError(''); setSuccess(''); }} className={styles.cancelBtn} disabled={isSubmitting}>
                Cancel
              </button>
              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  )
}
