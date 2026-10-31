'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbcafe1-REXJnQMhbUIXDkrYOdQOzxH1Dxhwb0.png', alt: 'Handmade dumplings in a rich broth' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbcafe2-saG6TPV47T3zNkpLLWTIBYQcYABBab.png', alt: 'Breakfast plates with eggs, bacon, sausage and toast' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbcafe-5wtM418i4yYo9TDXLj6wnDhFMMK0w7.png', alt: 'Cups of coffee with latte art' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbcafe-86pVJcDG7lDWsQXZvPgCYYB87fMdSS.png', alt: 'Fresh salmon platter with herbs and vegetables' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2026-10-28_20-15-16-2MEIxzAAJMzymcmP3uwU3IqJanfc0J.png', alt: 'Bright cafe dining room with communal tables' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2026-10-28_15-28-30-eS1ovEC1E6HzfE37cbav4PQflB83W4.png', alt: 'Crispy breakfast stack with bacon, egg and greens' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2026-10-28_15-27-39-431vHZ7UYxzRyZrQBYTjSfCqFsaQIG.png', alt: 'Crispy golden bites served over rice and greens' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2026-10-28_20-14-51-QVv3qOefgMWyDuuHUa7xu38wa8w2K3.png', alt: 'Cafe flowers, pastries and coffee service' },
]

export function HeroCarousel() {
  const [active, setActive] = useState(0)
  const previous = () => setActive((current) => (current - 1 + images.length) % images.length)
  const next = () => setActive((current) => (current + 1) % images.length)

  return (
    <section className="hero-carousel section-wrap" aria-label="A taste of Blind Basket">
      <div className="carousel-frame">
        <img src={images[active].src} alt={images[active].alt} />
        <div className="carousel-controls">
          <p>{String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</p>
          <div className="carousel-buttons">
            <button type="button" onClick={previous} aria-label="Previous image"><ChevronLeft size={18} /></button>
            <button type="button" onClick={next} aria-label="Next image"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
      <div className="carousel-caption">
        <p className="eyebrow">FROM OUR KITCHEN &amp; TABLE</p>
        <p>A little look at what&apos;s waiting for you.</p>
      </div>
    </section>
  )
}
