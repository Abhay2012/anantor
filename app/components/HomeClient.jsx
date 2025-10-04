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

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex)
  }

  return (
    <div className={styles.app}>
      <Header showTopHeader />

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

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles['hero-content']}>
            <h1 className={styles['hero-title']}>
              <span className={styles['gradient-text']}> Discover the Cosmos Within</span>
            </h1>
            <p className={styles['hero-description']}>
              Reveal the mysteries of your soul and the bonds you share. Connect, reflect, and journey through the stars together.
            </p>
            <div className={styles['hero-buttons']}>
              <button className={`${styles['cta-button']} ${styles.primary}`} onClick={() => setShowModal(true)}>
                <span>Begin Your Divine Journey</span>
                <div className={styles['button-glow']}></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: '6rem' }}>
        <div className={styles.container}>
          <h2 className={styles['section-title']}>Explore Your Cosmic Journey</h2>
          <p className={styles['section-description']}>Anantor brings you powerful ways to connect with planetary energies and understand your place in the cosmos.</p>
          <div className={styles['section-content']}>
            <div className={styles['feature-item']}>
              <div className={styles['feature-item-text']}>
                <h3 className={styles['feature-item-title']}>Your Daily Cosmic Insights</h3>
                <p className={styles['feature-item-description']}>Unlock a deeper understanding of yourself with a daily horoscope built from your unique cosmic blueprint. Go beyond general forecasts to explore your inherent strengths, navigate challenges, and align with your true potential.</p>
                <Link href="/features#feature-horoscope" className={styles['download-button']} style={{ display: 'inline-block', marginTop: 12, textDecoration: 'none', padding: '12px 30px', fontSize: '15px' }}>
                  Explore
                </Link>
              </div>
              <div className={styles['phone-container']}>
                <div className={styles['phone-mockup-device']}>
                  <img src="https://assets.anantor.com/Screenshot_1759431922.png" alt="Daily Horoscope Screen" className={styles['phone-mockup-image']} />
                </div>
              </div>
            </div>

            <div className={[styles['feature-item'], styles['feature-item-reverse']].join(' ')} style={{ minHeight: '100vh' }}>
              <div className={styles['phone-container']}>
                <div className={styles['phone-mockup-device']}>
                  <img src="https://assets.anantor.com/Screenshot_1759589285.png" alt="Ask the Universe Anything Screen" className={styles['phone-mockup-image']} />
                </div>
              </div>
              <div className={styles['feature-item-text']}>
                <h3 className={styles['feature-item-title']}>Ask the Universe Anything</h3>
                <p className={styles['feature-item-description']}>Have questions about your career, relationships, health, or personal growth? Anantor lets you ask anything and get an astrological perspective. Our system delivers clear, insightful answers, helping you navigate life's challenges with cosmic wisdom.</p>
                <Link href="/features#feature-ask" className={styles['download-button']} style={{ display: 'inline-block', marginTop: 12, textDecoration: 'none', padding: '12px 30px', fontSize: '15px' }}>
                  Explore
                </Link>
              </div>
            </div>

            <div className={styles['feature-item']}>
              <div className={styles['feature-item-text']}>
                <h3 className={styles['feature-item-title']}>Discover Cosmic Connections</h3>
                <p className={styles['feature-item-description']}>Explore the celestial bonds between you and your friends. By analyzing your combined birth charts, Anantor reveals how your energies align, what makes your connection strong, and where there's room to grow together.</p>
                <Link href="/features#feature-compatibility" className={styles['download-button']} style={{ display: 'inline-block', marginTop: 12, textDecoration: 'none', padding: '12px 30px', fontSize: '15px' }}>
                  Explore
                </Link>
              </div>
              <div className={styles['phone-container']}>
                <div className={styles['phone-mockup-device']}>
                  <img src="https://assets.anantor.com/Screenshot_1758845474.png" alt="Discover Cosmic Connections Screen" className={styles['phone-mockup-image']} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['planets-song-section']}>
        <div className={styles.container}>
          <div className={styles['planets-song-content']}>
            <h2 className={styles['section-title']}>
              The Song of the <span className={styles['gradient-text']}>Planets</span>
            </h2>
            <p className={styles['section-description']}>Every Soul is a Constellation</p>

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

            <p className={styles['planets-conclusion']}>
              These celestial companions compose the background music of every friendship and life story.
            </p>
          </div>
        </div>
      </section>

      <section className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Ready to Explore Your Destiny?</h3>
            <p className={styles['cta-description']}>Step Into Your Constellation</p>
            <button className={styles['download-button']} onClick={() => setShowModal(true)}>
              <span className="button-text">Begin My Story</span>
              <div className={styles['button-particles']}></div>
            </button>
          </div>
        </div>
      </section>

      <Footer />

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
