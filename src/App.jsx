import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import FeaturedBooks from './components/FeaturedBooks.jsx'
import Benefits from './components/Benefits.jsx'
import CTASection from './components/CTASection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-800 text-white overflow-hidden">
      {/* Ambient backdrop glow shared across the page */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-[0.35]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[60vh] bg-radial-accent"
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedBooks />
        <Benefits />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
