import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

export const Projects = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="projets"
      ref={ref}
      className={`glass-panel px-8 py-14 transition-all duration-700 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="flex flex-col gap-4 text-slate-800 dark:text-slate-200">
        <span className="text-2xl font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
          Projets
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Des solutions concrètes pour les utilisateurs
        </h2>
        <p className="max-w-3xl text-base text-slate-700 dark:text-slate-300">
          Chaque projet est pensé comme un produit complet : cadrage fonctionnel, design system cohérent, pipeline CI/CD et accompagnement des utilisateurs.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:-translate-y-3 hover:shadow-3xl dark:border-white/10"
          >
            <div className={`relative h-48 w-full bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo}`}>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <span className="inline-flex w-fit items-center rounded-full border border-white/40 bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em]">
                  {project.badge}
                </span>
                <span className="text-5xl font-black tracking-tight text-white/70">
                  {project.title.slice(0, 2)}
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 px-6 py-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-3 text-sm font-semibold">
                {!project.liveUrl ? null : (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-slate-700 transition-colors duration-300 hover:border-sky-400 hover:text-sky-600 dark:text-slate-200"
                >
                  Démo live
                  <span aria-hidden={true}>↗</span>
                </a>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-slate-700 transition-colors duration-300 hover:border-slate-400 hover:text-slate-900 dark:text-slate-200"
                >
                  Code source
                  <span aria-hidden={true}>↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
