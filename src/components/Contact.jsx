import SectionTitle from './SectionTitle'

export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12 lg:grid-cols-[.85fr_1.15fr]">
        <SectionTitle eyebrow="Contacto" title="Hablemos del próximo proyecto." text="Completa el formulario y el equipo de ModularDom Group contactará contigo para estudiar la mejor solución dentro del ecosistema del grupo." />
        <form action="https://formspree.io/f/TU_ENDPOINT" method="POST" className="grid gap-5">
          <input name="name" required placeholder="Nombre" className="rounded-2xl border border-white/10 bg-obsidian/70 px-5 py-4 text-stone outline-none transition placeholder:text-stone/35 focus:border-champagne" />
          <input name="phone" required placeholder="Teléfono" className="rounded-2xl border border-white/10 bg-obsidian/70 px-5 py-4 text-stone outline-none transition placeholder:text-stone/35 focus:border-champagne" />
          <input name="email" type="email" required placeholder="Email" className="rounded-2xl border border-white/10 bg-obsidian/70 px-5 py-4 text-stone outline-none transition placeholder:text-stone/35 focus:border-champagne" />
          <textarea name="message" rows="6" placeholder="Mensaje" className="rounded-2xl border border-white/10 bg-obsidian/70 px-5 py-4 text-stone outline-none transition placeholder:text-stone/35 focus:border-champagne" />
          <button className="rounded-full bg-champagne px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-obsidian transition hover:bg-stone">Solicitar información</button>
        </form>
      </div>
    </section>
  )
}
