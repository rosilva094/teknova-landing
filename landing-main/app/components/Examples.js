'use client'
import { useRef, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionWrapper from './shared/SectionWrapper'
import SectionTitle from './shared/SectionTitle'

const examples = [
  { title: "Gastronomía", img: "/images/gastronomia.png" },
  { title: "Estética", img: "/images/estetica.png" },
  { title: "Gimnasios", img: "/images/gimnasios.png" },
  { title: "Profesionales", img: "/images/profesionales.png" },
  { title: "Eventos", img: "/images/eventos.png" },
]

export default function Examples() {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const scroll = (direction) => {
    const container = scrollRef.current
    if (!container) return
    const scrollAmount = container.offsetWidth * 0.8
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const interval = setInterval(() => {
      if (!isPaused) {
        const atEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10
        if (atEnd) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: container.offsetWidth * 0.6, behavior: 'smooth' })
        }
      }
    }, 4000) // cada 4 segundos

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <SectionWrapper id="examples">
      <SectionTitle>Lo que estás buscando</SectionTitle>
      <p className="text-text-dark mb-6 text-center">
        Mirá cómo se ven nuestros diseños en acción.
      </p>

      <div
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Flechas */}
        <button
          onClick={() => scroll('left')}
          className="hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1 sm:px-4 no-scrollbar"
        >
          {examples.map((item, idx) => (
            <div
              key={idx}
              className="snap-start min-w-[80%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] rounded-lg shadow-md relative overflow-hidden group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-lg font-semibold text-right">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
