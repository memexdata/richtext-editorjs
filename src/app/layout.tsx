import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/pretty-print-json.css'

export const metadata: Metadata = {
  title: 'Memex Rich Text Parser',
  description: 'Memex Rich Text Parser using Editor.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
