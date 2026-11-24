import { portfolio } from '../data/portfolio.js'
import { ArrowUp } from './Icons.jsx'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="on-dark border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {portfolio.name}
        </p>
        <a
          className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-white"
          href="#home"
        >
          Back to top <ArrowUp />
        </a>
      </div>
    </footer>
  )
}
