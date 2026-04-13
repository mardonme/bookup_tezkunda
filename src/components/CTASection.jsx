import { motion } from 'framer-motion'
import Button from './ui/Button.jsx'
import TelegramIcon from './ui/TelegramIcon.jsx'
import { TELEGRAM_URL } from '../config.js'

export default function CTASection() {
  return (
    <section id="join" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl glass-strong px-8 py-16 text-center sm:px-16"
        >
          {/* Decorative background blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid opacity-30"
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Free forever
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-gradient">
              One book a week. Zero noise.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-white/65">
              Join thousands of readers who use Bookup as their weekly signal.
              You can leave anytime — but most people don't.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                icon={TelegramIcon}
                className="px-8 py-4 text-base"
              >
                Join the Telegram Channel
              </Button>
              <span className="text-xs text-white/40">
                No account needed · 1 message per week
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
