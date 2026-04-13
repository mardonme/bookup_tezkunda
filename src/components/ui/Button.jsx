import { motion } from 'framer-motion'

/**
 * Premium button with three variants:
 *  - primary  : solid accent with glow (used for the Telegram CTA)
 *  - secondary: glass surface with subtle border
 *  - ghost    : minimal text link with underline reveal
 */
export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  icon: Icon,
  children,
  className = '',
  ...rest
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60'

  const variants = {
    primary:
      'bg-accent text-white glow-ring hover:shadow-glow-lg hover:-translate-y-0.5',
    secondary:
      'glass text-white/90 hover:text-white hover:border-white/20 hover:-translate-y-0.5',
    ghost:
      'text-white/70 hover:text-white px-2 py-1 rounded-none',
  }

  const MotionTag = motion(Tag)

  return (
    <MotionTag
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {/* animated sheen for primary buttons */}
      {variant === 'primary' && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <span className="absolute -inset-y-2 -left-1/3 w-1/3 -skew-x-12 bg-white/20 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
        </span>
      )}
      {Icon && <Icon className="h-4 w-4" />}
      <span>{children}</span>
    </MotionTag>
  )
}
