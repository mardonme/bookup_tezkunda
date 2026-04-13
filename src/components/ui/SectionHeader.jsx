import { motion } from 'framer-motion'

/**
 * Consistent section header used across the page.
 * - eyebrow: small accent label above the title
 * - title  : large display heading (gradient)
 * - subtitle: muted descriptive text
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-gradient"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="max-w-2xl text-base md:text-lg text-white/60"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
