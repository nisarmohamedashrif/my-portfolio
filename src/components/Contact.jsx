import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio.js'
import { ArrowUpRight, CheckIcon, CopyIcon, GithubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'
import { Section, SectionHeading } from './ui.jsx'

const contactLinks = [
  { label: 'Email', value: portfolio.email, href: `mailto:${portfolio.email}`, icon: MailIcon, external: false },
  {
    label: 'GitHub',
    value: portfolio.github.replace(/^https:\/\//, ''),
    href: portfolio.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: portfolio.linkedin.replace(/^https:\/\/(www\.)?/, ''),
    href: portfolio.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return undefined
    const timer = setTimeout(() => setCopied(false), 2200)
    return () => clearTimeout(timer)
  }, [copied])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(portfolio.email)
      setCopied(true)
    } catch {
      // Clipboard access can be blocked; the email link above still works.
    }
  }

  return (
    <Section className="on-dark" id="contact" labelledBy="contact-title" tone="ink">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            dark
            description="Have a question or an opportunity to share? Email is the quickest way to reach me, and you can also find me on GitHub and LinkedIn."
            id="contact-title"
            title="Get in touch"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-slate-200"
              href={`mailto:${portfolio.email}`}
            >
              Send an email
            </a>
            <button
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/60"
              onClick={copyEmail}
              type="button"
            >
              {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
              {copied ? 'Email copied' : 'Copy email address'}
            </button>
            <span aria-live="polite" className="sr-only">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>
        </div>

        <ul className="space-y-3">
          {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                className="group flex items-center gap-4 rounded-xl border border-white/15 p-4 transition-colors duration-200 hover:border-white/40 hover:bg-white/5"
                href={href}
                rel={external ? 'noopener noreferrer' : undefined}
                target={external ? '_blank' : undefined}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/10 text-white">
                  <Icon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-slate-400">{label}</span>
                  <span className="block break-all font-medium text-white">{value}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-white" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
