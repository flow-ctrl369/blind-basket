'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type CarouselImage = { src: string; alt: string }

type InfoCarouselProps = {
  images: CarouselImage[]
  label: string
}

export function InfoCarousel({ images, label }: InfoCarouselProps) {
  const [active, setActive] = useState(0)
  const previous = () => setActive((current) => (current - 1 + images.length) % images.length)
  const next = () => setActive((current) => (current + 1) % images.length)

  return (
    <div className="info-carousel" aria-label={label}>
      <img key={images[active].src} src={images[active].src} alt={images[active].alt} />
      <div className="info-carousel-controls">
        <span>{String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
        <div>
          <button type="button" onClick={previous} aria-label={`Previous ${label} image`}><ChevronLeft size={16} /></button>
          <button type="button" onClick={next} aria-label={`Next ${label} image`}><ChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  )
}
