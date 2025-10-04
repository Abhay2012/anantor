import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './page.module.css'
import homeStyles from '../home.module.css'

export const dynamic = 'force-static'
export const metadata = {
  title: "Anantor Features: Daily Horoscope, Cosmic Q&A & Friend Compatibility",
  description: "Explore Anantor's three powerful features—personalized daily horoscopes with Today's Forecast, unlimited cosmic questions across 5 categories, and detailed friend compatibility insights.",
  keywords: [
    'astrology app features',
    'personalized horoscope',
    'daily forecast',
    'ask astrology questions',
    'friend compatibility calculator',
    'birth chart analysis',
  ],
  openGraph: {
    title: 'Anantor Features: Daily Horoscope, Cosmic Q&A & Friend Compatibility',
    description: "Explore Anantor's three powerful features—personalized daily horoscopes, cosmic questions, and friend compatibility insights.",
    url: 'https://www.anantor.com/features',
    siteName: 'Anantor',
    images: [
      { url: '/text-logo.png', width: 1200, height: 630, alt: 'Anantor' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anantor Features: Daily Horoscope, Cosmic Q&A & Friend Compatibility',
    description: "Explore Anantor's powerful features—horoscope, Q&A, and compatibility.",
    images: ['/text-logo.png'],
  },
}

export default function FeaturesPage() {
    return (
        <div className={styles.app}>
            <Header />

            <section className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Explore Anantor's Astrology</h1>
                    <p className={styles.subtitle}>Anantor is your personal guide to the cosmos. Built on ancient astrological scriptures and empowered by advanced technology, our app provides deep, personalized insights into your universe.</p>
                </div>
            </section>

            {/* 3-planet cards summary section (reusing home page styles) */}
            <section className={styles.cardsSection}>
                <div className={styles.container}>
                    <div className={homeStyles['planets-grid']}>
                        <a href="#feature-horoscope" className={`${homeStyles['planet-card']} ${styles.cardLink}`} style={{ textDecoration: 'none' }}>
                            {/* <div className={homeStyles['planet-icon']}>☉</div> */}
                            <h3 className={homeStyles['planet-name']}>Your Personalized Horoscope</h3>
                            <p className={homeStyles['planet-description']}>Unlock a deeper understanding of yourself with a daily horoscope built from your unique cosmic blueprint. Go beyond general forecasts to explore your inherent strengths, navigate challenges, and align with your true potential.</p>
                        </a>
                        <a href="#feature-ask" className={`${homeStyles['planet-card']} ${styles.cardLink}`} style={{ textDecoration: 'none' }}>
                            {/* <div className={homeStyles['planet-icon']}>☿</div> */}
                            <h3 className={homeStyles['planet-name']}>Ask the Universe</h3>
                            <p className={homeStyles['planet-description']}>Have questions about your career, relationships, health, or personal growth? Anantor lets you ask anything and get an astrological perspective. Our system delivers clear, insightful answers, helping you navigate life's challenges with cosmic wisdom.</p>
                        </a>
                        <a href="#feature-compatibility" className={`${homeStyles['planet-card']} ${styles.cardLink}`} style={{ textDecoration: 'none' }}>
                            {/* <div className={homeStyles['planet-icon']}>♀</div> */}
                            <h3 className={homeStyles['planet-name']}>Compatibility</h3>
                            <p className={homeStyles['planet-description']}>Explore the celestial bonds between you and your friends. By analyzing your combined birth charts, Anantor reveals how your energies align, what makes your connection strong, and where there's room to grow together.</p>
                        </a>
                    </div>
                </div>
            </section>
            <section className={styles.container}>
                <div className={homeStyles['section-content']}>
                    <div id="feature-horoscope" className={[homeStyles['feature-item'], styles['feature-item']].join(' ')}>
                        <div className={homeStyles['feature-item-text']}>
                            <h2 className={homeStyles['feature-item-title']}>Your Personalized Horoscope</h2>
                            <p className={homeStyles['feature-item-description']}></p>
                            <div>
                                <h3 className={styles['feature-item-subtitle']}> Today at a Glance</h3>
                                <p className={styles['list-icon']}>Get your essential daily overview—your cosmic weather report in seconds. See your overall energy levels, key themes for the day, and what the universe has in store.</p>
                                <h3 className={styles['feature-item-subtitle']}> Hearts in Cosmic Alignment</h3>
                                <p className={styles['list-icon']}>Discover how planetary positions influence your relationships and emotional connections today. Learn when love energy is strongest and how to nurture your closest bonds.</p>
                                <h3 className={styles['feature-item-subtitle']}> Where Stars Crown You</h3>
                                <p className={styles['list-icon']}>Identify your areas of cosmic advantage today. These are the moments when planets align in your favor—perfect timing for important conversations, creative projects, or bold moves.</p>
                                <h3 className={styles['feature-item-subtitle']}> Cosmic Currents to Navigate</h3>
                                <p className={styles['list-icon']}>Forewarned is forearmed. Understand the challenging planetary aspects and learn how to flow with (not against) difficult energies. Turn obstacles into opportunities for growth.</p>
                            </div>
                        </div>

                        <div className={homeStyles['phone-container']}>
                            <div className={homeStyles['phone-mockup-device']}>
                                <img src="https://assets.anantor.com/Screenshot_1759431922.png" alt="Daily Horoscope Screen" className={homeStyles['phone-mockup-image']} />
                            </div>
                        </div>
                    </div>

                    <div id="feature-ask" className={[homeStyles['feature-item'], styles['feature-item']].join(' ')} style={{ minHeight: '100vh' }}>
                        <div className={homeStyles['feature-item-text']}>
                            <h2 className={homeStyles['feature-item-title']}>Ask the Universe, Get an Answer</h2>
                            <div>
                                <h3 className={styles['feature-item-subtitle']}> Love & Relationships</h3>
                                <p className={styles['list-icon']}>Get cosmic guidance on matters of the heart.</p>
                                <h3 className={styles['feature-item-subtitle']}> Career & Education</h3>
                                <p className={styles['list-icon']}>Navigate your professional and academic journey with planetary wisdom. </p>
                                <h3 className={styles['feature-item-subtitle']}> Money & Abundance</h3>
                                <p className={styles['list-icon']}>Understand your financial energy and opportunities. </p>
                                <h3 className={styles['feature-item-subtitle']}> Family & Home</h3>
                                <p className={styles['list-icon']}>Get insights on family dynamics and domestic life.</p>
                                <h3 className={styles['feature-item-subtitle']}> Spirituality & Growth</h3>
                                <p className={styles['list-icon']}>Deepen your spiritual journey and self-awareness.</p>
                            </div>
                        </div>
                        <div className={homeStyles['phone-container']}>
                            <div className={homeStyles['phone-mockup-device']}>
                                <img src="https://assets.anantor.com/Screenshot_1759589285.png" alt="Ask the Universe Anything Screen" className={homeStyles['phone-mockup-image']} />
                            </div>
                        </div>
                    </div>

                    <div id="feature-compatibility" className={[homeStyles['feature-item'], styles['feature-item']].join(' ')}>
                        <div className={homeStyles['feature-item-text']}>
                            <h2 className={homeStyles['feature-item-title']}>Check Your Compatibility</h2>
                            <div>
                                <h3 className={styles['feature-item-subtitle']}> What Aligns</h3>
                                <p className={styles['list-icon']}>Your Cosmic Strengths Together. Discover the beautiful ways your cosmic energies harmonize.</p>
                                <h3 className={styles['feature-item-subtitle']}> What You Differ</h3>
                                <p className={styles['list-icon']}>Growth Through Contrast. Differences aren't weaknesses, they're opportunities for growth and balance</p>
                                <h3 className={styles['feature-item-subtitle']}> Planetary Insights</h3>
                                <p className={styles['list-icon']}>The Cosmic Blueprint of Your Bond. Go deeper with detailed planetary analysis of your friendship.</p>
                            </div>
                        </div>
                        <div className={homeStyles['phone-container']}>
                            <div className={homeStyles['phone-mockup-device']}>
                                <img src="https://assets.anantor.com/Screenshot_1758845474.png" alt="Discover Cosmic Connections Screen" className={homeStyles['phone-mockup-image']} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
