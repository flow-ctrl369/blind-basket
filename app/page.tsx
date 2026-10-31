import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { SiteShell } from '@/components/site'
import { business } from '@/lib/content'

export default function Home() {
  return <SiteShell>
    <section className="hero section-wrap">
      <div className="hero-copy"><p className="eyebrow">BLIND BASKET · TAKAPUNA, AUCKLAND</p><h1>Your everyday café, with a little more character.</h1><p className="lede">Good coffee, good food, and a welcome pause in your day — right here on Barrys Point Road, Takapuna.</p><div className="button-row"><Link className="button button-primary" href="/menu">Explore the menu <ArrowRight size={17} /></Link><Link className="button button-quiet" href="/visit-us">Find us <ArrowUpRight size={17} /></Link></div></div>
      <div className="hero-media"><Image src="/blind-basket-hero.png" alt="Coffee on a warm stone table" fill priority sizes="(max-width: 800px) 100vw, 48vw" /></div>
    </section>
    <section className="statement section-wrap"><p className="eyebrow">A GOOD PLACE TO PAUSE</p><h2>Make a little room<br />in your day.</h2><p>Some visits are for the first coffee. Some are for a proper bite to eat. Others are simply a chance to step away from the rush. Find your own reason to stop by Blind Basket.</p></section>
    <section className="menu-tease section-wrap"><div><p className="eyebrow">SOMETHING GOOD TO LOOK FORWARD TO</p><h2>A menu worth<br />a closer look.</h2></div><div><p className="body-copy">Explore the current food and drink offering, from the first coffee of the day to a satisfying daytime meal.</p><Link className="text-link" href="/menu">See the full menu <ArrowRight size={17} /></Link></div></section>
    <section className="visit-band"><div className="section-wrap visit-grid"><div><p className="eyebrow">FIND YOUR WAY HERE</p><h2>Meet us on<br />Barrys Point Road.</h2></div><div><p>{business.address}</p><p className="muted">Opening hours are being confirmed. Please call ahead before visiting.</p><Link className="button button-light" href="/visit-us">Visit us <ArrowUpRight size={17} /></Link></div></div></section>
    <section className="final-cta section-wrap"><p className="eyebrow">SEE YOU SOON</p><h2>Your next coffee stop<br />is sorted.</h2><p>Explore the menu, find your way here, and make Blind Basket part of your day.</p><div className="button-row"><Link className="button button-primary" href="/menu">Explore the menu <ArrowRight size={17} /></Link><a className="button button-quiet" href={business.maps} target="_blank" rel="noreferrer"><MapPin size={17} /> Get directions</a></div></section>
  </SiteShell>
}
