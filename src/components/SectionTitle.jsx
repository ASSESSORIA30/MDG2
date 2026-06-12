import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, text, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-champagne">{eyebrow}</p>
      <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-balance md:text-7xl">{title}</h2>
      {text && <p className="mt-7 max-w-2xl text-lg leading-8 text-stone/70 md:text-xl">{text}</p>}
    </motion.div>
  )
}
