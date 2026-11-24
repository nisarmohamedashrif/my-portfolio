import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio.js'
import { MenuIcon, XIcon } from './Icons.jsx'

export default function Navbar({ links }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  // Add a border and blur once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link for the section crossing the middle of the viewport.
  useEffect(() => {
    const ids = ['home', ...links.map((link) => link.id), 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [links])

  // Let Escape close the mobile menu.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open ? 'border-line bg-white/90 backdrop-blur-md' : 'border-transparent bg-white'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a className="flex items-center gap-3 rounded-lg" href="#home" onClick={close}>
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-sm font-bold tracking-tight text-white"
          >
            {portfolio.initials}
          </span>
          <span className="text-base font-bold tracking-tight text-ink">{portfolio.name}</span>
        </a>

        <div className="hidden items-center md:flex">
          <ul className="flex items-center gap-1">
            {links.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative block px-3.5 py-2 text-sm font-medium transition-colors duration-200 hover:text-ink ${
                      isActive ? 'text-ink' : 'text-body'
                    }`}
                    href={`#${link.id}`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3.5 -bottom-px h-0.5 origin-left rounded-full bg-brand transition-transform duration-200 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
          <a
            className="ml-5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand"
            href="#contact"
          >
            Get in touch
          </a>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="-mr-2 rounded-lg p-2 text-ink transition-colors hover:bg-mist md:hidden"
          onClick={() => setOpen(!open)}
          type="button"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="menu-pop border-t border-line bg-white md:hidden" id="mobile-menu">
          <ul className="mx-auto max-w-6xl space-y-1 px-5 py-4 sm:px-8">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  aria-current={active === link.id ? 'location' : undefined}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${
                    active === link.id ? 'bg-mist text-ink' : 'text-body hover:bg-mist hover:text-ink'
                  }`}
                  href={`#${link.id}`}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                className="block rounded-full bg-ink px-5 py-3 text-center text-base font-semibold text-white"
                href="#contact"
                onClick={close}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
