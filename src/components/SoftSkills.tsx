import { useScrollReveal } from '../hooks/useScrollReveal'
import { Brain, Users, Lightbulb, Target } from 'lucide-react' // Pense à installer lucide-react

const softSkills = [
  {
    title: "Communication",
    description: "Capacité à vulgariser des concepts techniques et à collaborer efficacement en équipe.",
    icon: <Users className="w-6 h-6 text-sky-500" />
  },
  {
    title: "Résolution de problèmes",
    description: "Approche analytique pour décomposer des défis complexes en solutions simples.",
    icon: <Brain className="w-6 h-6 text-indigo-500" />
  },
  {
    title: "Adaptabilité",
    description: "Veille constante et apprentissage rapide face aux nouvelles technologies.",
    icon: <Lightbulb className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "Rigueur",
    description: "Souci du détail, respect des bonnes pratiques et de la qualité du code.",
    icon: <Target className="w-6 h-6 text-rose-500" />
  }
]

export const SoftSkills = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="soft-skills"
      ref={ref}
      className={`glass-panel px-8 py-14 transition-all duration-700 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="mb-12 flex flex-col gap-3">
        <span className="text-2xl font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
          Savoir-être
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Au-delà du code
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/10 dark:border-white/10"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-all group-hover:bg-indigo-500/20" />
            
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
              {skill.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SoftSkills