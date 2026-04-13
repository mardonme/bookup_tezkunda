import { motion } from 'framer-motion'

/**
 * Glassmorphism card wrapper with hover lift + accent border on hover.
 * Children render inside; tweak via className.
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  ...rest
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`group relative overflow-hidden rounded-2xl glass p-6 transition-colors duration-300 ${
        hover ? 'hover:border-accent/40' : ''
      } ${className}`}
      {...rest}
    >
      {/* Subtle accent gradient that fades in on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(400px circle at var(--mx, 50%) var(--my, 0%), rgba(255,0,79,0.12), transparent 60%)',
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
