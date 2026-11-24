import { portfolio } from './data/portfolio.js'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import './App.css'

const hasExperience = portfolio.activities.length > 0

// The navigation is built from the sections that actually have content.
const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  ...(hasExperience ? [{ label: 'Experience', id: 'experience' }] : []),
]

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        href="#main-content"
      >
        Skip to content
      </a>
      <Navbar links={navLinks} />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        {hasExperience && <Experience />}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
