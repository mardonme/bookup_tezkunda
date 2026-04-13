import { motion } from 'framer-motion'
import { Compass, Library, Sparkles } from 'lucide-react'
import SectionHeader from './ui/SectionHeader.jsx'
import GlassCard from './ui/GlassCard.jsx'

const PILLARS = [
  {
    icon: Compass,
    title: 'Curated, not crowdsourced',
    body: 'Every recommendation is read first. No clickbait, no filler — just the books worth your weekend.',
  },
  {
    icon: Library,
    title: 'A growing library',
    body: 'Tap into hundreds of reviews across psychology, design, business, philosophy, and fiction.',
  },
  {
    icon: Sparkles,
    title: 'Built for builders',
    body: 'Thinkers, founders, and students who want sharper ideas — delivered without the noise.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What is Bookup"
          title="A quiet corner of the internet for serious readers."
          subtitle="Bookup is a Telegram channel where one carefully chosen book lands in your feed each week — with notes on why it matters and who it's for."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 ring-1 ring-accent/30">
                    <Icon className="h-5 w-5 text-accent" />
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
