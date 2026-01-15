import { skillsByCategory } from '../data/skills'
import { useScrollReveal } from '../hooks/useScrollReveal'

export const Skills = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="competences"
      ref={ref}
      className={`glass-panel px-8 py-14 transition-all duration-700 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="flex flex-col gap-4 text-slate-800 dark:text-slate-200">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
          Compétences
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Un socle technique complet et évolutif
        </h2>
        <p className="text-base text-slate-700 dark:text-slate-300">
          Je combine un socle JavaScript moderne avec de bonnes pratiques de conception, de tests et de collaboration pour livrer des interfaces fiables et engageantes.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {skillsByCategory.map((category) => (
          <article
            key={category.title}
            className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-inner backdrop-blur-xl dark:border-white/10"
          >
            <header>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h3>
            </header>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-800 transition-transform duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20 dark:text-slate-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
