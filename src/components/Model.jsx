import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { process } from '../data'

export default function Model() {
  return (
    <section id="modelo" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Nuestro modelo" title="Del concepto arquitectónico a la entrega, con metodología industrial." text="El ecosistema del grupo permite controlar cada etapa crítica del proyecto: diseño, precisión técnica, producción, ejecución y entrega final." align="center" />
        <div className="mt-16 grid gap-4 md:grid-cols-5">
          {process.map((step, index) => (
            <motion.div key={step} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65, delay: index * .08 }} className="relative min-h-56 rounded-[1.7rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6">
              <span className="text-xs font-bold text-champagne">0{index + 1}</span>
              <h3 className="mt-20 text-2xl font-semibold tracking-[-0.04em]">{step}</h3>
              {index < process.length - 1 && <span className="absolute right-5 top-6 hidden text-stone/25 md:block">→</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
