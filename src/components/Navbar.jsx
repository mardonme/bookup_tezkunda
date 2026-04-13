import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import Button from './ui/Button.jsx'
import TelegramIcon from './ui/TelegramIcon.jsx'
import { TELEGRAM_URL, BRAND } from '../config.js'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Featured', href: '#featured' },
  { label: 'Benefits', href: '#benefits' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  // Adds a subtle blur + border when the user scrolls past 24px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-ink-800/70 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 ring-1 ring-accent/30">
            <BookOpen className="h-4 w-4 text-accent" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            {BRAND.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          icon={TelegramIcon}
          className="hidden sm:inline-flex"
        >
          Join Channel
        </Button>
      </nav>
    </motion.header>
  )
}
