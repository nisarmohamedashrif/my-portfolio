import { portfolio } from '../data/portfolio.js'
import { ArrowUpRight, CheckIcon, GithubIcon } from './Icons.jsx'
import { Section, SectionHeading } from './ui.jsx'

const statusStyles = {
  'In progress': 'bg-brand/10 text-brand',
  Completed: 'bg-emerald-50 text-emerald-700',
}

function ProjectFrame({ project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_24px_48px_-24px_rgba(14,26,51,0.3)]">
      <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-line bg-mist px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#cfd7e6]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#cfd7e6]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#cfd7e6]" />
      </div>
      {/* the slight scale trims the thin capture line along the top of the screenshots */}
      <div className="overflow-hidden">
        <img
          alt={`${project.name} interface screenshot`}
          className="aspect-[16/9] w-full origin-bottom scale-[1.025] object-cover object-top"
          loading="lazy"
          src={project.image}
        />
      </div>
    </div>
  )
}

function ProjectDetails({ project }) {
  const linkClass =
    'inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors duration-200 hover:text-brand-dark'

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {project.status && (
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              statusStyles[project.status] ?? 'bg-mist text-body'
            }`}
          >
            {project.status}
          </span>
        )}
        <span className="text-sm font-medium text-muted">{project.type}</span>
      </div>

      <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{project.name}</h3>
      <p className="mt-4 leading-7">{project.description}</p>

      <ul className="mt-6 space-y-3">
        {project.highlights.map((highlight) => (
          <li className="flex gap-3 leading-6" key={highlight}>
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <ul aria-label="Technologies used" className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            className="rounded-md border border-line bg-white px-2.5 py-1 text-sm font-medium text-ink"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>

      {(project.githubUrl || project.demoUrl) && (
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
          {project.githubUrl && (
            <a className={linkClass} href={project.githubUrl} rel="noopener noreferrer" target="_blank">
              <GithubIcon className="h-4 w-4" /> View code
            </a>
          )}
          {project.demoUrl && (
            <a className={linkClass} href={project.demoUrl} rel="noopener noreferrer" target="_blank">
              Live demo <ArrowUpRight />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title" tone="mist">
      <SectionHeading
        description="Things I’ve built while studying, from embedded hardware to web applications."
        id="projects-title"
        title="Projects"
      />

      <div className="mt-14 space-y-20 lg:space-y-24">
        {portfolio.projects.map((project, index) => (
          <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14" key={project.name}>
            <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <ProjectFrame project={project} />
            </div>
            <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <ProjectDetails project={project} />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <a
          className="inline-flex items-center gap-2 font-semibold text-ink transition-colors duration-200 hover:text-brand"
          href={portfolio.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubIcon className="h-5 w-5" /> See more on GitHub
        </a>
      </div>
    </Section>
  )
}
