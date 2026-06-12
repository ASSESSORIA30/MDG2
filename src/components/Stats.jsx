import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stats } from '../data'

function AnimatedStat({ value, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const numeric = Number(String(value).replace(/[^0-9]/g, '')) || 0
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 })
  const [display, setDisplay] = useState(value.includes('ES') ? 'ES' : '0')

  useEffect(() => {
    if (!inView || value.includes('ES')) return
    motionValue.set(numeric)
    return spring.on('change', latest => setDisplay(`${value.startsWith('+') ? '+' : ''}${Math.round(latest)}`))
  }, [inView])

  return (
    <div ref={ref} className="border-t border-white/10 py-8">
      <div className="font-display text-6xl font-semibold tracking-[-0.05em] text-champagne md:text-7xl">{value.includes('ES') ? 'ES' : display}</div>
      <p className="mt-3 text-sm uppercase tracking-[0.22em] text-stone/55">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-platinum text-obsidian p-8 md:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-obsidian/50">Cifras del grupo</p>
        <div className="mt-10 grid gap-8 md:grid-cols-5">
          {stats.map(([value, label]) => <AnimatedStat key={label} value={value} label={label} />)}
        </div>
        <p className="mt-6 text-sm text-obsidian/50">*Cifras editables fácilmente en <code>src/data.js</code>.</p>
      </motion.div>
    </section>
  )
}
