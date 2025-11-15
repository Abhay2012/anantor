export const metadata = {
  title: 'Anantor',
  description: 'Discover the cosmos within',
  metadataBase: new URL('https://www.anantor.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.ico'],
  },
}
import { Analytics } from '@vercel/analytics/next';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
