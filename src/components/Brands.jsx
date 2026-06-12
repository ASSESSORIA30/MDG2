import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { brands } from '../data'

export default function Brands() {
  return (
    <section id="marcas" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Nuestras marcas" title="Tres divisiones. Tres clientes. Una arquitectura de grupo." />
        <div className="mt-16 grid gap-7">
          {brands.map((brand, index) => (
            <motion.article key={brand.name} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: index * .08 }} className="group grid overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.035] lg:grid-cols-[.95fr_1.05fr]">
              <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
                <img src={brand.image} alt={brand.name} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian/35 to-transparent" />
              </div>
              <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-champagne">{brand.label}</p>
                  <h3 className="mt-6 font-display text-5xl font-semibold tracking-[-0.04em] md:text-7xl">{brand.name}</h3>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-stone/72">{brand.description}</p>
                </div>
                <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm text-stone/50">{brand.tone}</span>
                  <a href="#contacto" className="rounded-full border border-champagne/45 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-champagne transition hover:bg-champagne hover:text-obsidian">{brand.cta}</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
