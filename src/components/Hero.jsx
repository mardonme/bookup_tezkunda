import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from './ui/Button.jsx'
import TelegramIcon from './ui/TelegramIcon.jsx'
import HeroScene from './three/HeroScene.jsx'
import { TELEGRAM_URL } from '../config.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden pt-24"
    >
      {/* 3D background */}
      <div className="absolute inset-0 -z-10">
        <HeroScene />
        {/* Gradient overlay so text always remains readable on top of the canvas */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-800/40 via-ink-800/10 to-ink-800" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
        {/* Eyebrow */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          A curated reading channel
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight"
        >
          <span className="block text-white">Discover Books</span>
          <span className="block text-gradient">
            That Change Your Mind
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="max-w-2xl text-base md:text-lg text-white/60"
        >
          Hand-picked recommendations delivered straight to your Telegram —
          big ideas, deep focus, and the books that shaped how brilliant
          people think.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-2 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            icon={TelegramIcon}
            className="px-7 py-3.5 text-base"
          >
            Join Telegram Channel
          </Button>
          <Button
            href="#about"
            variant="secondary"
            icon={ArrowRight}
            className="px-7 py-3.5 text-base"
          >
            Explore the Library
          </Button>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-10 grid w-full max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-2xl glass py-4"
        >
          {[
            ['12k+', 'Readers'],
            ['300+', 'Books reviewed'],
            ['Weekly', 'New drops'],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col items-center px-4">
              <span className="font-display text-xl md:text-2xl font-semibold text-white">
                {n}
              </span>
              <span className="text-xs uppercase tracking-wider text-white/50">
                {l}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="block h-1.5 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  )
}
