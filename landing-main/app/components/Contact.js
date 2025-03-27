import SectionWrapper from './shared/SectionWrapper'

export default function Contact() {
  return (
    <div className="bg-primary" id="contact">
      <SectionWrapper className="text-center text-white">
        <h2 className="text-3xl font-bold mb-4">¿Listo para tener tu web?</h2>
        <p className="text-lg mb-8 text-secondary">
          Dejanos tu contacto y te asesoramos.
        </p>
        <button className="bg-white text-primary py-3 px-6 rounded-lg hover:text-accent hover:shadow-xl transition font-semibold">
          Contáctanos
        </button>
      </SectionWrapper>
    </div>
  )
}
