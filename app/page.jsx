'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import styles from './home.module.css'

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
            <h2 className={styles['hero-title']}>
              <span className={styles['gradient-text']}> Discover the Cosmos Within</span>
            </h2>
            <p className={styles['hero-description']}>
              Reveal the mysteries of your soul and the bonds you share. Connect, reflect, and journey through the stars together.
            </p>
            <div className={styles['hero-buttons']}>
              <button className={`${styles['cta-button']} ${styles.primary}`}>
                <span>Begin Your Divine Journey</span>
                <div className={styles['button-glow']}></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: '6rem' }} className="">
        <div className={styles.container}>
          <div className={styles['wisdom-content']}>
            <h2 className={styles['wisdom-heading']}>
              Human Wisdom, <span className="gradient-text">Cosmic Guidance</span>
            </h2>
            <h3 className={styles['wisdom-subheading']}>Ancient Stars, Personal Stories</h3>
            <p className={styles['wisdom-text']}>
              No lines to cross, no waiting for answers. Anantor brings the universe's wisdom into your daily life. Drawing from the poetry of time honored scriptures and the guidance of gifted astrologers, Anantor offers gentle, immediate insights about you and the people who matter most.
            </p>
          </div>
        </div>
      </section>

      <section className={styles['deeper-connections-section']}>
        <div className={styles.container}>
          <div className={styles['deeper-connections-content']}>
            <h2 className={styles['deeper-connections-heading']}>
              <span className={styles['gradient-text']}>Deeper Connections</span>
            </h2>
            <h3 className={styles['deeper-connections-subheading']}>Together, Beneath the Same Stars</h3>

            <div className={styles['connections-grid']}>
              <div className={styles['connection-card']}>
                <h4 className={styles['connection-card-title']}>Shared Journeys</h4>
                <p className={styles['connection-card-text']}>
                  Use your palm to reflect on inner truths, then invite friends to uncover the unique symphony of energies that connects you both. Celebrate the patterns of fate and friendship that the stars illuminate.
                </p>
              </div>

              <div className={styles['connection-card']}>
                <h4 className={styles['connection-card-title']}>Instant Insights, Enduring Meaning</h4>
                <p className={styles['connection-card-text']}>
                  Receive beautiful, personal readings filled with clarity and compassion, not predictions, but maps for mindful living and deeper understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['planets-song-section']}>
        <div className={styles.container}>
          <div className={styles['planets-song-content']}>
            <h2 className={styles['planets-song-heading']}>
              The Song of the <span className={styles['gradient-text']}>Planets</span>
            </h2>
            <h3 className={styles['planets-song-subheading']}>Every Soul is a Constellation</h3>

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

      <section className={styles['phone-mockup']}>
        <div className={styles.container}>
          <div className={styles['mockup-content']}>
            <div className={styles['mockup-text']}>
              <h3 style={{ textAlign: 'left' }} className={styles['section-title']}>The Anantor Way</h3>
              <p className={styles['mockup-description']}>Intuitive. Gentle. Deeply Personal.</p>
              <ul className={styles['feature-list']}>
                <li>✨ Rooted in the living heart of the world’s star wisdom</li>
                <li>🌟 Palm readings and soulful insights for everyday clarity</li>
                <li>🔮 Celebrate yourself and your friends, wherever you are</li>
                <li>📱 Beautiful, serene experience for all</li>
              </ul>
            </div>
            <div className={styles['phone-container']}>
              <div className={styles['phone-mockup-device']}>
                <img src="/anantor_today.png" alt="ANANTOR Logo" className={styles['phone-mockup-image']} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Ready to Explore Your Destiny?</h3>
            <p className={styles['cta-description']}>Step Into Your Constellation</p>
            <button className={styles['download-button']}>
              <span className="button-text">Begin My Story</span>
              <div className={styles['button-particles']}></div>
            </button>
            <div className={styles['app-stores']}>
              <div className={styles['store-badge']}>App Store</div>
              <div className={styles['store-badge']}>Google Play</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default HomePage
