export const metadata = {
  title: 'Anantor',
  description: 'Discover the cosmos within',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
