import { MoonIcon, SunIcon } from './icons'

type ThemeToggleProps = {
  readonly isDark: boolean
  readonly onToggle: () => void
}

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      className="relative flex h-10 w-20 items-center rounded-full border border-white/20 bg-white/20 p-1 transition-colors duration-300 ease-out hover:border-white/40 hover:bg-white/30 dark:border-white/10 dark:bg-white/10 dark:hover:border-white/20 dark:hover:bg-white/20"
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 shadow transition-transform duration-300 ease-out dark:bg-slate-800 dark:text-slate-100 ${isDark ? 'translate-x-10' : 'translate-x-0'}`}
      >
        {isDark ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
      </span>
    </button>
  )
}
export default ThemeToggle
