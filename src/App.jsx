import { useState } from 'react'
import { portfolio } from './data/portfolio.js'
import profileImage from './assets/images/profile.jpg'
import {
  AboutSection,
  ActivitiesSection,
  ContactSection,
  Footer,
  ProjectsSection,
  SkillsSection,
} from './components/PortfolioSections.jsx'
import { ArrowUpRight, MenuIcon, XIcon } from './components/Icons.jsx'
import './App.css'

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Activities', 'activities'],
  ['Contact', 'contact'],
]

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#090b10]/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <a
          className="font-mono text-sm font-semibold tracking-tight text-white"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          {portfolio.name}
          <span className="ml-1 text-cyan-300">.</span>
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="rounded-lg border border-white/10 p-2 text-slate-200 transition hover:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>

        <div
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-[#090b10] px-5 py-4 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          id="primary-navigation"
        >
          {navigation.map(([label, target]) => (
            <a
              className="rounded-md px-3 py-2 text-sm text-slate-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:px-0 md:py-1"
              href={`#${target}`}
              key={target}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-200/70 hover:bg-cyan-200/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:mt-0"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch <ArrowUpRight />
          </a>
        </div>
      </nav>
    </header>
  )
}

function HeroSection() {
  return (
    <section
      className="hero-grid relative isolate overflow-hidden"
      id="home"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-8 -z-10 h-96 w-96 rounded-full bg-cyan-300/[0.06] blur-3xl"
      />
      <div className="mx-auto grid min-h-[min(760px,calc(100svh-72px))] max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-28">
        <div className="hero-enter">
          <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-cyan-200/80">
            <span className="h-px w-8 bg-cyan-300/70" />
            Personal portfolio
          </p>
          <h1
            className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
            id="hero-title"
          >
            Hello, I’m
            <br />
            <span className="text-slate-500">{portfolio.hero.name}.</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm font-medium leading-6 text-cyan-100/90 sm:text-base sm:leading-7">
            {portfolio.hero.headline}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            {portfolio.hero.introduction}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-cyan-200 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              href="#projects"
            >
              Explore projects <ArrowUpRight />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-slate-200 transition hover:border-white/35 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              href="#contact"
            >
              Contact me
            </a>
          </div>
          <p className="mt-12 font-mono text-xs tracking-wide text-slate-600">
            CURRENTLY BUILDING THIS PORTFOLIO <span className="text-cyan-300">↗</span>
          </p>
        </div>

        <div className="hero-enter hero-enter-delayed relative mx-auto w-full max-w-md">
          <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/20">
            <img
              alt={`${portfolio.hero.name} profile`}
              className="aspect-[4/3] w-full object-cover object-[center_30%]"
              src={profileImage}
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#10141b]/90 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <span className="font-mono text-xs text-slate-500">A LITTLE ABOUT MY DIRECTION</span>
              <span className="font-mono text-xs text-cyan-200/70">01 — 03</span>
            </div>
            <div className="space-y-0">
              {[
                ['01', 'Information Technology', 'A foundation in computing'],
                ['02', 'Software Development', 'Learning by making'],
                ['03', 'Data Science', 'A future area of study'],
              ].map(([number, title, caption]) => (
                <div
                  className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-white/[0.08] py-6 last:border-b-0 last:pb-2"
                  key={number}
                >
                  <span className="pt-1 font-mono text-xs text-slate-600">{number}</span>
                  <div>
                    <h2 className="text-base font-medium text-slate-100">{title}</h2>
                    <p className="mt-1 text-sm text-slate-500">{caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="absolute -bottom-16 -right-12 h-32 w-32 rounded-full border border-cyan-200/10" />
            <div aria-hidden="true" className="absolute -bottom-10 -right-6 h-20 w-20 rounded-full border border-cyan-200/10" />
          </div>
          <p className="mt-4 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
            Learning in progress
          </p>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#090b10] text-slate-300">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cyan-200 focus:px-4 focus:py-2 focus:text-slate-950"
        href="#main-content"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ActivitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
