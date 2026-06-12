import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="grupo" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
        <SectionTitle eyebrow="Quiénes somos" title="Un grupo diseñado para liderar la nueva construcción residencial." text="ModularDom Group integra diseño, ingeniería, industrialización y ejecución para ofrecer viviendas modernas, eficientes y escalables. Tres marcas, tres posicionamientos y una misma obsesión: construir mejor, más rápido y con una experiencia de cliente superior." />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }} className="glass rounded-[2rem] p-8 md:p-10">
          <p className="text-2xl font-light leading-10 text-stone/86">La compañía nace para ocupar un espacio claro en el mercado: viviendas industrializadas con imagen de gran corporación, procesos profesionales y una arquitectura capaz de competir con las promotoras internacionales más avanzadas.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {['Solidez', 'Tecnología', 'Escala'].map((item) => <div key={item} className="rounded-2xl border border-white/10 p-5 text-sm uppercase tracking-[0.2em] text-champagne">{item}</div>)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
