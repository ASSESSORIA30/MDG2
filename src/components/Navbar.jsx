import { motion } from 'framer-motion'

const links = ['Grupo', 'Marcas', 'Modelo', 'Proyectos', 'Contacto']

export default function Navbar() {
  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8 }} className="fixed left-0 right-0 top-0 z-50 px-5 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-obsidian/55 px-5 py-3 backdrop-blur-2xl">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-champagne/50 text-sm font-bold text-champagne">MG</span>
          <span className="text-sm font-semibold uppercase tracking-[0.22em]">ModularDom Group</span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-xs uppercase tracking-[0.22em] text-stone/65 transition hover:text-champagne">{link}</a>)}
        </div>
        <a href="#contacto" className="rounded-full bg-stone px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-obsidian transition hover:bg-champagne">Solicitar información</a>
      </nav>
    </motion.header>
  )
}
