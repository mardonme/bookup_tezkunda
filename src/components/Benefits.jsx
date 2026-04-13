import { motion } from 'framer-motion'
import {
  Brain,
  Clock,
  Filter,
  Layers,
  MessageCircle,
  Zap,
} from 'lucide-react'
import SectionHeader from './ui/SectionHeader.jsx'
import GlassCard from './ui/GlassCard.jsx'

const BENEFITS = [
  {
    icon: Brain,
    title: 'Sharpen your thinking',
    body: 'Each book is selected for the ideas it leaves in your head — not the hype around it.',
  },
  {
    icon: Filter,
    title: 'Cut through the noise',
    body: 'Skip the bestseller treadmill. Get titles that actually deserve your attention.',
  },
  {
    icon: Clock,
    title: 'Save hours per week',
    body: 'Reviews give you the gist in 60 seconds — read deeper only when it’s worth it.',
  },
  {
    icon: Layers,
    title: 'Across every domain',
    body: 'Psychology, design, philosophy, biographies — a balanced diet for curious minds.',
  },
  {
    icon: MessageCircle,
    title: 'A real community',
    body: 'Discuss, recommend, and trade notes with thousands of other thoughtful readers.',
  },
  {
    icon: Zap,
    title: 'Zero spam, all signal',
    body: 'No ads, no affiliate dumps. Just the next book worth reading — and why.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why join"
          title="Built for readers who hate wasting time."
          subtitle="Six reasons Bookup has become the quiet ritual in the week of thousands of curious people."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
            >
              <GlassCard className="h-full">
                <div className="flex flex-col gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-accent/15 group-hover:ring-accent/40">
                    <Icon className="h-5 w-5 text-white/80 transition-colors group-hover:text-accent" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {body}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
