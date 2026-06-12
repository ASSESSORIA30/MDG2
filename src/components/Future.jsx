import SectionTitle from './SectionTitle'

export default function Future() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <SectionTitle eyebrow="El futuro de la construcción" title="Industrializar no significa perder alma. Significa construir con inteligencia." />
        <div className="space-y-8 text-2xl font-light leading-10 text-stone/78">
          <p>La vivienda del futuro será más precisa, más eficiente, más sostenible y más personalizada. ModularDom Group trabaja para unir tecnología, arquitectura y procesos escalables sin renunciar a la emoción de vivir en una casa excepcional.</p>
          <p>Industrialización, sostenibilidad y diseño no son tendencias. Son el nuevo estándar.</p>
        </div>
      </div>
    </section>
  )
}
