'use client'

import Link from 'next/link'
import { ArrowUpRight, Menu as MenuIcon, Phone, MapPin, X } from 'lucide-react'
import { useState } from 'react'
import { business } from '@/lib/content'

export { business }

export function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Home', '/'], ['Menu', '/menu'], ['Our Story', '/about'], ['Visit Us', '/visit-us'], ['Contact', '/contact']]
  return <>
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Blind Basket Cafe home"><span>BLIND BASKET</span><small>CAFE · TAKAPUNA</small></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="header-actions"><Link href="/menu" className="header-cta">Explore the menu <ArrowUpRight size={16} /></Link><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <MenuIcon />}</button></div>
    </header>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></Link>)}</nav>}
  </>
}

export function BottomBar() { return <div className="bottom-bar"><a href={`tel:${business.phone.replaceAll(' ', '')}`}><Phone size={17} /> Call</a><a href={business.maps} target="_blank" rel="noreferrer"><MapPin size={17} /> Directions</a></div> }

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) { return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{copy}</p></section> }

export function Footer() { return <footer><div className="footer-brand"><Link href="/" className="wordmark"><span>BLIND BASKET</span><small>CAFE · TAKAPUNA</small></Link><p>A neighbourhood café on Barrys Point Road, Auckland.</p></div><div className="footer-links"><div><p className="eyebrow">Explore</p><Link href="/menu">Menu</Link><Link href="/about">Our story</Link><Link href="/visit-us">Visit us</Link></div><div><p className="eyebrow">Say hello</p><a href={`tel:${business.phone.replaceAll(' ', '')}`}>{business.phone}</a><a href={business.maps} target="_blank" rel="noreferrer">Get directions</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Blind Basket Cafe</span><Link href="/privacy">Privacy</Link></div></footer> }

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Header /><main>{children}</main><Footer /><BottomBar /></> }
