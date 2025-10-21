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
      <div className={styles.starfield}>
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
      </div>
      <div className={styles.glowOrbs} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orbPurple}`}></div>
        <div className={`${styles.orb} ${styles.orbPink}`}></div>
        <div className={`${styles.orb} ${styles.orbBlue}`}></div>
      </div>
      {/* <div className={styles.gradientOverlay} aria-hidden="true" /> */}

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.badge}>AI-Powered Astrology</div>
              <h1 className={styles['hero-title']}>
                <span className={styles['gradient-text']}>Discover Your Cosmic Path with AI Astrology</span>
              </h1>
              <p className={styles['hero-description']}>
                Personalized Daily Horoscope, Compatibility & Future Predictions — powered by Ancient Vedic Wisdom and AI.
              </p>

              <div className={styles.trustRow}>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon}>✨</div>
                  <div>
                    <div className={styles.trustMetric}>10,000+</div>
                    <div className={styles.trustLabel}>Active Users</div>
                  </div>
                </div>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon}>⭐</div>
                  <div>
                    <div className={styles.trustMetric}>4.8/5</div>
                    <div className={styles.trustLabel}>User Rating</div>
                  </div>
                </div>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon}>✔</div>
                  <div>
                    <div className={styles.trustMetric}>Free</div>
                    <div className={styles.trustLabel}>To Download</div>
                  </div>
                </div>
              </div>

              <div className={styles.storeButtons}>
                <button className={styles.storeBtn} onClick={() => setShowModal(true)}>
                  Get it on Google Play
                </button>
                <button className={styles.storeBtn} onClick={() => setShowModal(true)}>
                  Download on App Store
                </button>
              </div>

              {/* <button onClick={scrollToFeatures} className={styles.scrollLink}>
                Explore Features ↓
              </button> */}
            </div>
            <div className={styles.heroRight}>
              <div className={styles.mockPhoneWrap}>
                {/* <div className={styles['phone-mockup-device']}> */}
                  <img src="https://images.unsplash.com/photo-1663153206186-1ccea6b8e9e9?auto=format&fit=crop&w=900&q=80" alt="Anantor App Mockups" className={styles['phone-mockup-image']} />
                {/* </div> */}
                <div className={styles.phoneGlow} aria-hidden="true"></div>
              </div>
            </div>
          </div>
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
              <h3 className={styles.featureTitle}>Daily AI Horoscope</h3>
              <p className={styles.featureText}>Get hyper-personalized insights based on your complete birth chart, not just your sun sign.</p>
              <ul className={styles.featureListBullets}>
                <li>Detailed daily predictions</li>
                <li>Career & love guidance</li>
                <li>Planetary transit alerts</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💬</div>
              <h3 className={styles.featureTitle}>24/7 AI Astrologer</h3>
              <p className={styles.featureText}>Chat instantly with an AI astrologer trained on ancient Vedic wisdom and modern psychology.</p>
              <ul className={styles.featureListBullets}>
                <li>Unlimited questions</li>
                <li>Instant detailed answers</li>
                <li>Private & confidential</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💖</div>
              <h3 className={styles.featureTitle}>Love Compatibility</h3>
              <p className={styles.featureText}>Understand relationship dynamics through comprehensive birth chart analysis and synastry.</p>
              <ul className={styles.featureListBullets}>
                <li>Romantic compatibility</li>
                <li>Friendship analysis</li>
                <li>Family dynamics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Rows */}
      <section className={styles.deepDiveSection}>
        <div className={styles.container}>
          <div className={styles.deepDiveRow}>
            <div className={styles.deepDiveText}>
              <div className={styles.badge}>Feature 01</div>
              <h2 className={styles.deepDiveTitle}>Your Daily Cosmic Insights</h2>
              <p className={styles.deepDiveDesc}>Start each day with personalized guidance based on your complete birth chart. Our AI analyzes planetary positions to give you actionable insights for love, career, and personal growth.</p>
              <ul className={styles.deepDiveBullets}>
                <li>
                  <strong>Personalized to your birth chart</strong>
                  <span> Not generic zodiac predictions</span>
                </li>
                <li>
                  <strong>Updated daily at sunrise</strong>
                  <span> Fresh insights every morning</span>
                </li>
                <li>
                  <strong>Lucky numbers & colors</strong>
                  <span> Enhance your daily fortune</span>
                </li>
              </ul>
            </div>
            <div className={styles.deepDivePhone}>
              <div className={styles['phone-mockup-device']}>
                <img src="https://assets.anantor.com/Screenshot_1759431922.png" alt="Anantor App Mockups" className={styles['phone-mockup-image']} />
              </div>
              <div className={styles.phoneGlow} aria-hidden="true"></div>
            </div>
          </div>

          <div className={`${styles.deepDiveRow} ${styles.deepDiveAlt}`}>
            <div className={styles.deepDivePhone}>
              <div className={styles['phone-mockup-device']}>
                <img src="https://assets.anantor.com/Screenshot_1759589285.png" alt="Anantor App Mockups" className={styles['phone-mockup-image']} />
              </div>
              <div className={styles.phoneGlow} aria-hidden="true"></div>
            </div>
            <div className={styles.deepDiveText}>
              <div className={`${styles.badge} ${styles.badgePink}`}>Feature 02</div>
              <h2 className={styles.deepDiveTitle}>Ask the Universe Anything</h2>
              <p className={styles.deepDiveDesc}>No more waiting for astrologer appointments. Get instant answers from our AI trained on thousands of years of Vedic astrology knowledge, available 24/7.</p>
              <ul className={styles.deepDiveBullets}>
                <li><strong>Ask about love & relationships</strong> <span>Get clarity on your romantic path</span></li>
                <li><strong>Career guidance & decisions</strong> <span>Navigate professional challenges</span></li>
                <li><strong>Life purpose & spiritual growth</strong> <span>Discover your soul's mission</span></li>
              </ul>
            </div>
          </div>
          <div className={styles.deepDiveRow}>
            <div className={styles.deepDiveText}>
              <div className={styles.badge}>Feature 03</div>
              <h2 className={styles.deepDiveTitle}>Discover Cosmic Connections</h2>
              <p className={styles.deepDiveDesc}>Understanding compatibility goes beyond sun signs. Our AI analyzes complete birth charts to reveal the deeper cosmic bonds between you and your loved ones.</p>
              <ul className={styles.deepDiveBullets}>
                <li>
                  <strong>Comprehensive synastry analysis</strong>
                  <span> All planetary aspects considered</span>
                </li>
                <li>
                  <strong>Strengths & challenges revealed</strong>
                  <span> Know what to nurture and navigate</span>
                </li>
                <li>
                  <strong>Actionable relationship advice</strong>
                  <span> Improve your connections</span>
                </li>
              </ul>
            </div>
            <div className={styles.deepDivePhone}>
              <div className={styles['phone-mockup-device']}>
                <img src="https://assets.anantor.com/Screenshot_1758845474.png" alt="Anantor App Mockups" className={styles['phone-mockup-image']} />
              </div>
              <div className={styles.phoneGlow} aria-hidden="true"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.featuresHead}>
            <h2 className={styles['section-title']}>Loved by Cosmic Seekers Worldwide</h2>
            <p className={styles['section-description']}>Join thousands who discovered their path through Anantor</p>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.starsRow}>★★★★★</div>
              <p className={styles.testimonialText}>
                "Finally, an astrology app that feels real and accurate. The AI astrologer answered questions I've had for years!"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>PS</div>
                <div>
                  <div className={styles.authorName}>Priya S.</div>
                  <div className={styles.authorMeta}>Mumbai, India</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.starsRow}>★★★★★</div>
              <p className={styles.testimonialText}>
                "The compatibility feature helped me understand my partner so much better. Our relationship improved dramatically!"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>RK</div>
                <div>
                  <div className={styles.authorName}>Raj K.</div>
                  <div className={styles.authorMeta}>Delhi, India</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.starsRow}>★★★★★</div>
              <p className={styles.testimonialText}>
                "I check my daily horoscope every morning. It's scary how accurate it is. Changed my life!"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>AM</div>
                <div>
                  <div className={styles.authorName}>Ananya M.</div>
                  <div className={styles.authorMeta}>Bangalore, India</div>
                </div>
              </div>
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
                <button className={styles.storeBtn} onClick={() => setShowModal(true)}>
                  Get it on Google Play
                </button>
                <button className={styles.storeBtn} onClick={() => setShowModal(true)}>
                  Download on App Store
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
              <button className={styles.stickyBtn} onClick={() => setShowModal(true)}>Play</button>
              <button className={styles.stickyBtn} onClick={() => setShowModal(true)}>iOS</button>
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
