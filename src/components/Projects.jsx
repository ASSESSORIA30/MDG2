import SectionTitle from './SectionTitle'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Proyectos destacados" title="Una galería con lenguaje de revista de arquitectura." />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className={`group relative overflow-hidden rounded-[2rem] ${index === 0 ? 'lg:col-span-2' : ''} min-h-[520px]`}>
              <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">{project.brand}</p>
                <h3 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-[-0.04em]">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
