export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-semibold uppercase tracking-[0.25em]">ModularDom Group</div>
          <p className="mt-3 text-sm text-stone/45">Construcción industrializada, sostenible y premium.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.2em] text-stone/55">
          <a href="#grupo" className="hover:text-champagne">Grupo</a>
          <a href="#marcas" className="hover:text-champagne">Marcas</a>
          <a href="#modelo" className="hover:text-champagne">Modelo</a>
          <a href="#contacto" className="hover:text-champagne">Contacto</a>
        </div>
        <p className="text-xs text-stone/35">© {new Date().getFullYear()} ModularDom Group. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
