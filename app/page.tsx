import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { SiteShell } from '@/components/site'
import { HeroCarousel } from '@/components/hero-carousel'
import { InfoCarousel } from '@/components/info-carousel'
import { business } from '@/lib/content'

const sectionImages = {
  pause: [
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbcafe-5wtM418i4yYo9TDXLj6wnDhFMMK0w7.png', alt: 'Latte art on a cafe table' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2026-10-28_20-14-51-QVv3qOefgMWyDuuHUa7xu38wa8w2K3.png', alt: 'Flowers and coffee at the cafe' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2026-10-28_20-15-16-2MEIxzAAJMzymcmP3uwU3IqJanfc0J.png', alt: 'Warm cafe dining room' },
  ],
  menu: [
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbcafe1-REXJnQMhbUIXDkrYOdQOzxH1Dxhwb0.png', alt: 'Dumplings in broth' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2026-10-28_15-28-30-eS1ovEC1E6HzfE37cbav4PQflB83W4.png', alt: 'Breakfast stack with bacon and egg' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbcafe-86pVJcDG7lDWsQXZvPgCYYB87fMdSS.png', alt: 'Fresh salmon platter' },
  ],
  visit: [
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2026-10-28_20-15-16-2MEIxzAAJMzymcmP3uwU3IqJanfc0J.png', alt: 'Cafe tables by the windows' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2026-10-28_20-14-51-QVv3qOefgMWyDuuHUa7xu38wa8w2K3.png', alt: 'Cafe counter with flowers and pastries' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbcafe-5wtM418i4yYo9TDXLj6wnDhFMMK0w7.png', alt: 'Coffee service at the cafe' },
  ],
}

export default function Home() {
  return <SiteShell>
    <section className="hero section-wrap">
      <div className="hero-copy"><p className="eyebrow">BLIND BASKET · TAKAPUNA, AUCKLAND</p><h1>Your everyday café, with a little more character.</h1><p className="lede">Good coffee, good food, and a welcome pause in your day — right here on Barrys Point Road, Takapuna.</p><div className="button-row"><Link className="button button-primary" href="/menu">Explore the menu <ArrowRight size={17} /></Link><Link className="button button-quiet" href="/visit-us">Find us <ArrowUpRight size={17} /></Link></div></div>
      <div className="hero-media"><Image src="/blind-basket-hero.png" alt="Coffee on a warm stone table" fill priority sizes="(max-width: 800px) 100vw, 48vw" /></div>
    </section>
    <HeroCarousel />
    <section className="statement section-wrap"><div className="info-section-copy"><p className="eyebrow">A GOOD PLACE TO PAUSE</p><h2>Make a little room<br />in your day.</h2><p>Some visits are for the first coffee. Some are for a proper bite to eat. Others are simply a chance to step away from the rush. Find your own reason to stop by Blind Basket.</p></div></section>
    <section className="menu-tease section-wrap"><div><p className="eyebrow">SOMETHING GOOD TO LOOK FORWARD TO</p><h2>A menu worth<br />a closer look.</h2></div><div><p className="body-copy">Explore the current food and drink offering, from the first coffee of the day to a satisfying daytime meal.</p><Link className="text-link" href="/menu">See the full menu <ArrowRight size={17} /></Link></div><InfoCarousel images={sectionImages.menu} label="Something good to look forward to" /></section>
    <section className="visit-band"><div className="section-wrap visit-grid"><div><p className="eyebrow">FIND YOUR WAY HERE</p><h2>Meet us on<br />Barrys Point Road.</h2></div><div><p>{business.address}</p><p className="muted">Opening hours are being confirmed. Please call ahead before visiting.</p><Link className="button button-light" href="/visit-us">Visit us <ArrowUpRight size={17} /></Link></div><InfoCarousel images={sectionImages.visit} label="Find your way here" /></div></section>
    <section className="final-cta section-wrap"><p className="eyebrow">SEE YOU SOON</p><h2>Your next coffee stop<br />is sorted.</h2><p>Explore the menu, find your way here, and make Blind Basket part of your day.</p><div className="button-row"><Link className="button button-primary" href="/menu">Explore the menu <ArrowRight size={17} /></Link><a className="button button-quiet" href={business.maps} target="_blank" rel="noreferrer"><MapPin size={17} /> Get directions</a></div></section>
  </SiteShell>
}
