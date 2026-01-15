import { socialLinks } from '../data/socials'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import { useScrollReveal } from '../hooks/useScrollReveal'

const heroIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
} as const

export const Hero = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="accueil"
      ref={ref}
      className={`relative flex flex-col gap-12 overflow-hidden rounded-[32px] border border-white/20 bg-white/10 px-8 py-16 shadow-2xl backdrop-blur-2xl transition-all duration-700 dark:border-white/10 dark:bg-white/5 md:flex-row md:items-center md:justify-between ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 flex max-w-xl flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
          Développeur web moderne
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Florian Claux
        </h1>
        <p className="text-lg font-semibold text-sky-600 dark:text-sky-400">
          Développeur Web Full Stack
        </p>
        <p className="max-w-lg text-base text-slate-700 dark:text-slate-300">
          Étudiant en BUT Informatique à Limoges, passionné par la création d'expériences web fluides, durables et accessibles. J'aime transformer les idées ambitieuses en produits élégants et performants.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-sky-500/40"
          >
            Me contacter
          </a>
          <a
            href="#projets"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/20 px-6 py-3 text-sm font-semibold text-slate-900 transition-transform duration-300 ease-out hover:-translate-y-1 hover:bg-white/30 dark:text-white"
          >
            Voir mes projets
          </a>
        </div>
        <div className="mt-4 flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = heroIconMap[social.platform]
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-slate-900 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20 dark:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex h-72 w-72 items-center justify-center rounded-[32px] border border-white/20 bg-gradient-to-br from-sky-400/40 via-white/20 to-purple-500/40 p-6 shadow-2xl shadow-purple-500/20 backdrop-blur-xl dark:border-white/10">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-[24px] bg-slate-900/60 text-white backdrop-blur-xl">
          <span className="text-sm uppercase tracking-[0.35em] text-slate-400">Florian</span>
          <span className="mt-2 text-5xl font-black tracking-tight">FC</span>
          <span className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 text-center">
            Passion. Rigueur. Impact.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
