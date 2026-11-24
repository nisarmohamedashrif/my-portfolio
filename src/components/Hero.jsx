import profileImage from '../assets/images/profile.jpg'
import { portfolio } from '../data/portfolio.js'
import { GithubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

const socials = [
  { label: 'GitHub', href: portfolio.github, icon: GithubIcon, external: true },
  { label: 'LinkedIn', href: portfolio.linkedin, icon: LinkedInIcon, external: true },
  { label: 'Email', href: `mailto:${portfolio.email}`, icon: MailIcon, external: false },
]

export default function Hero() {
  const { hero, name } = portfolio

  return (
    <section aria-labelledby="hero-title" className="bg-white" id="home">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <h1
            className="rise text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            id="hero-title"
          >
            {name}
          </h1>
          <p className="rise mt-5 text-xl font-semibold text-brand sm:text-2xl" style={{ '--d': '80ms' }}>
            {hero.role}
          </p>
          <p className="rise mt-5 max-w-xl text-lg leading-8" style={{ '--d': '160ms' }}>
            {hero.intro}
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3" style={{ '--d': '240ms' }}>
            <a
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-dark"
              href="#projects"
            >
              View projects
            </a>
            <a
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink"
              href="#contact"
            >
              Get in touch
            </a>
          </div>

          <ul className="rise mt-8 flex items-center gap-3" style={{ '--d': '300ms' }}>
            {socials.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-brand hover:text-brand"
                  href={href}
                  rel={external ? 'noopener noreferrer' : undefined}
                  target={external ? '_blank' : undefined}
                  title={label}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>

          <dl
            className="rise mt-12 grid grid-cols-3 gap-4 border-t border-line pt-6 sm:gap-6"
            style={{ '--d': '360ms' }}
          >
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-1 font-semibold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise mx-auto w-full max-w-sm lg:max-w-none" style={{ '--d': '200ms' }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-tint">
            {/* multiply blends the photo's white backdrop into the tinted panel */}
            <img
              alt={`Portrait of ${name}`}
              className="absolute bottom-[-22%] left-1/2 w-[135%] max-w-none -translate-x-[44%] mix-blend-multiply"
              fetchPriority="high"
              src={profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
