import { BookOpen } from 'lucide-react'
import TelegramIcon from './ui/TelegramIcon.jsx'
import { TELEGRAM_URL, BRAND } from '../config.js'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 ring-1 ring-accent/30">
            <BookOpen className="h-4 w-4 text-accent" />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            {BRAND.name}
          </span>
          <span className="ml-2 text-xs text-white/40">
            © {new Date().getFullYear()} — {BRAND.tagline}
          </span>
        </div>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent"
        >
          <TelegramIcon className="h-4 w-4" />
          <span>t.me/bookup</span>
        </a>
      </div>
    </footer>
  )
}
