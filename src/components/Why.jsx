import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { values } from '../data'

export default function Why() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-10 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,169,106,.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle eyebrow="Por qué ModularDom Group" title="La combinación entre visión empresarial, arquitectura y construcción eficiente." />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => (
            <motion.div key={item} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: index * .05 }} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-champagne/40 hover:bg-white/[0.07]">
              <div className="mb-12 h-px w-12 bg-champagne" />
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
