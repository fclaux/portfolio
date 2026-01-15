import { navigationItems } from '../data/navigation'
import { socialLinks } from '../data/socials'

export const Footer = () => {
  return (
    <footer className="mx-auto mt-20 w-full max-w-6xl px-6 pb-10">
      <div className="glass-panel flex flex-col gap-8 px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 text-slate-800 dark:text-slate-200">
          <span className="text-lg font-semibold">Florian Claux</span>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Développeur Web Full Stack
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-700 dark:text-slate-300">
          {navigationItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-sky-500 dark:hover:text-sky-400">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 transition-transform duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 sm:flex-row">
        <span>© 2025 Florian Claux. Tous droits réservés.</span>
  <span>Design glassmorphism - React + Tailwind CSS</span>
      </div>
    </footer>
  )
}

export default Footer
