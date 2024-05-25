// These styles apply to every route in the application
import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'vorkasse-app',
  description: 'Berechne die Vorkasse für deine Bestellung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='de'>
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}
