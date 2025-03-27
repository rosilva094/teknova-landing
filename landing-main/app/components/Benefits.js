'use client'
import SectionWrapper from './shared/SectionWrapper'
import SectionTitle from './shared/SectionTitle'
import Card from './shared/Card'

const benefitsData = [
  {
    icon: '⚡',
    title: 'Carga rápida',
    summary: 'Tu página se abre en segundos.',
    details: 'Optimizamos cada plantilla para que cargue velozmente, incluso en conexiones móviles lentas. Esto mejora la experiencia del usuario y tu posicionamiento en Google.'
  },
  {
    icon: '🎨',
    title: 'Perfiles personalizados',
    summary: 'Diseño adaptado a tu marca.',
    details: 'No usamos plantillas genéricas. Ajustamos colores, imágenes y tipografía para que la web represente tu identidad desde el primer vistazo.'
  },
  {
    icon: '🤖',
    title: 'Nos ocupamos de todo',
    summary: 'Unas pocas preguntas y listo.',
    details: 'No necesitás saber de tecnología. Te pedimos la información mínima y armamos todo por vos, incluso integraciones con WhatsApp o reservas.'
  },
  {
    icon: '🌍',
    title: 'Siempre online',
    summary: 'Disponibilidad 24/7.',
    details: 'Usamos infraestructura de Google Cloud para que tu sitio esté siempre disponible y con copia de seguridad automática.'
  }
]

export default function Benefits() {
  return (
    <div className="bg-background">
      <SectionWrapper id="benefits">
        <SectionTitle>¿Por qué elegirnos?</SectionTitle>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {benefitsData.map((b, i) => (
            <Card
              key={i}
              icon={b.icon}
              title={b.title}
              summary={b.summary}
              details={b.details}
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
