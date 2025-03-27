'use client'
import SectionWrapper from './shared/SectionWrapper'
import SectionTitle from './shared/SectionTitle'
import Card from './shared/Card'

const stepsData = [
  {
    icon: '🖼️',
    title: 'Elegí tu diseño',
    summary: 'Seleccioná la opción que más te guste.',
    details: 'Tenemos plantillas pensadas para diferentes rubros. Solo elegí la que más se acerque a lo que buscás y nosotros nos encargamos del resto.'
  },
  {
    icon: '🛠️',
    title: 'Lo personalizamos',
    summary: 'Adaptamos la web a tu negocio.',
    details: 'Ajustamos contenidos, colores, imágenes, textos y formas de contacto para que la web sea una extensión de tu marca.'
  },
  {
    icon: '🚀',
    title: 'Tu sitio en vivo',
    summary: 'Publicado online antes de 24hs.',
    details: 'Usamos herramientas automatizadas para tener tu sitio funcionando en tiempo récord, sin sacrificar calidad ni diseño.'
  }
]

export default function Steps() {
  return (
    <SectionWrapper id="steps">
      <SectionTitle>¿Cómo funciona?</SectionTitle>
      <div className="grid gap-6 md:grid-cols-3">
        {stepsData.map((s, i) => (
          <Card
            key={i}
            icon={s.icon}
            title={s.title}
            summary={s.summary}
            details={s.details}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
