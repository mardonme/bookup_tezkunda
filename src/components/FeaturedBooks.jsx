import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader.jsx'
import { FEATURED_BOOKS } from '../data/books.js'

/**
 * BookCover renders a stylized 3D-tilting cover using pure CSS.
 * The hover lifts the cover and reveals a glow ring + label.
 */
function BookCover({ book, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="group relative"
    >
      {/* Cover wrapper preserves a book-like aspect ratio */}
      <div
        className="relative aspect-[2/3] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1.5deg] group-hover:shadow-glow"
        style={{ background: book.cover }}
      >
        {/* Spine highlight */}
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1.5 bg-black/30"
        />
        {/* Glossy highlight that sweeps on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Top tag */}
        <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur">
          {book.tag}
        </span>
        {/* Title block */}
        <div className="absolute inset-x-3 bottom-3">
          <h3 className="font-display text-base font-semibold leading-tight text-white drop-shadow">
            {book.title}
          </h3>
          <p className="mt-0.5 text-[11px] text-white/70">{book.author}</p>
        </div>
      </div>
    </motion.article>
  )
}

export default function FeaturedBooks() {
  return (
    <section id="featured" className="relative py-28 sm:py-36">
      {/* Soft accent halo behind the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Featured reads"
          title="Books that recently moved us."
          subtitle="A glimpse of what gets shared inside the channel — across thinking, building, and being human."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {FEATURED_BOOKS.map((book, i) => (
            <BookCover key={book.id} book={book} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
