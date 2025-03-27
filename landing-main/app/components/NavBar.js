export default function NavBar() {
  return (
    <nav className="bg-primary text-white py-4 px-6 fixed w-full z-50 top-0 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">MiNegocio</div>
        <div className="hidden md:block space-x-6">
          <a href="#benefits" className="hover:text-accent">Beneficios</a>
          <a href="#examples" className="hover:text-accent">Ejemplos</a>
          <a href="#steps" className="hover:text-accent">Pasos</a>
          <a href="#contact" className="hover:text-accent">Contacto</a>
        </div>
      </div>
    </nav>
  )
}
