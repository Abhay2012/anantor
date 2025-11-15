export const dynamic = 'force-static'
export const metadata = {
  title: 'Anantor - Astrology App for Daily Predictions & Cosmic Compatibility',
  description: 'Connect with the planets through Anantor. Get daily free astrology predictions, ask questions about your future and check compatibility with friends.',
  keywords: [
    'astrology app',
    'daily horoscope',
    'planetary predictions',
    'cosmic compatibility',
    'astrology for teens',
    'ask the universe',
    'friend compatibility',
  ],
  openGraph: {
    title: 'Anantor - Astrology App for Daily Predictions & Cosmic Compatibility',
    description: 'Connect with the planets through Anantor. Get daily astrology predictions, ask questions about your future, and discover compatibility with friends.',
    url: 'https://www.anantor.com/',
    siteName: 'Anantor',
    images: [
      { url: '/text-logo.png', width: 1200, height: 630, alt: 'Anantor' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anantor - Astrology App for Daily Predictions & Cosmic Compatibility',
    description: 'Connect with the planets through Anantor. Get daily free astrology predictions, ask questions about your future and check compatibility with friends.',
    images: ['/text-logo.png'],
  },
}
import HomeClient from './components/HomeClient'

function HomePage() {
  return <HomeClient />
}

export default HomePage
