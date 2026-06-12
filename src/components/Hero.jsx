import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90">
          <source src="https://cdn.coverr.co/videos/coverr-luxury-modern-house-9714/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/55 via-obsidian/40 to-obsidian" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(200,169,106,.18),transparent_34%)]" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-36 md:px-10 md:pb-28">
        <motion.div initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} className="max-w-5xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.38em] text-champagne">Industrialized living · Premium architecture · National vision</p>
          <h1 className="font-display text-6xl font-semibold leading-[0.88] tracking-[-0.055em] text-balance md:text-8xl lg:text-9xl">Construimos el futuro de la vivienda.</h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-stone/78 md:text-2xl">Un grupo. Tres marcas. Una visión: redefinir la forma de vivir.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#grupo" className="rounded-full bg-stone px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-obsidian transition hover:bg-champagne">Descubrir el Grupo</a>
            <a href="#contacto" className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-stone transition hover:border-champagne hover:text-champagne">Solicitar información</a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 right-8 hidden text-right text-xs uppercase tracking-[0.28em] text-stone/45 md:block">Scroll<br />to explore</div>
    </section>
  )
}
