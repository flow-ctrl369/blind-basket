import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blind Basket Cafe | Café in Takapuna, Auckland',
  description: 'Discover Blind Basket Cafe on Barrys Point Road in Takapuna. Explore the current menu, find our opening hours, and plan your visit.',
  generator: 'v0.app',
  openGraph: { title: 'Blind Basket Cafe | Takapuna', description: 'A neighbourhood café on Barrys Point Road, Takapuna.', type: 'website' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f7f5ef', width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-NZ"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
