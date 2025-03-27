import Image from 'next/image'

export default function Banner() {
  return (
    <header className="h-screen bg-gradient-to-b from-primary to-background flex flex-col items-center justify-center pt-18 relative text-text-dark">
      <div className="max-w-4xl mx-auto text-center px-3">
        <h1 className="text-5xl font-bold mb-6">
          Tu negocio en línea, fácil y sin esfuerzo
        </h1>
        <p className="text-2xl text-text-light font-bold mb-8">
          Una solución a tu medida, sin complicaciones.
        </p>
        <button className="bg-primary text-text-light py-3 px-6 rounded-lg hover:bg-background hover:text-text-dark hover:shadow-xl hover:text-2xl transition font-semibold">
          ¡Ver más!
        </button>
      </div>
    </header>
  )
}
