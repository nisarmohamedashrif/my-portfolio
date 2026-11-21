import { portfolio } from '../data/portfolio.js'
import {
  ArrowRight,
  ArrowUpRight,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
} from './Icons.jsx'

function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-200/70">
        {eyebrow}
      </p>
      <h2
        className="text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl"
        id={id}
      >
        {title}
      </h2>
      {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
    </div>
  )
}

function Section({ children, className = '', ...props }) {
  return (
    <section
      className={`border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 ${className}`}
      {...props}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

export function AboutSection() {
  return (
    <Section aria-labelledby="about-title" id="about">
      <SectionHeading eyebrow="About" id="about-title" title="A little about me." />
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <p className="font-mono text-sm leading-7 text-slate-500">
          IT undergraduate
          <br />
          SLIIT
          <br />
          Interested in Data Science
        </p>
        <div className="space-y-5 text-base leading-8 text-slate-400">
          <p>
            I’m an IT undergraduate at SLIIT with a strong interest in software development
            and technology. I enjoy solving problems and building practical projects as a
            way to learn.
          </p>
          <p>
            I’m working to develop my technical knowledge and professional skills, and I’m
            interested in pursuing Data Science in the future.
          </p>
        </div>
      </div>
    </Section>
  )
}

function ProjectCard({ project, index }) {
  const statusStyles = {
    Completed: 'border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-200',
    'In Progress': 'border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-100',
    Planned: 'border-violet-300/20 bg-violet-300/[0.06] text-violet-200',
    'Status to confirm': 'border-white/10 bg-white/[0.04] text-slate-400',
  }

  return (
    <article className="group overflow-hidden rounded-xl border border-white/[0.09] bg-[#0e1118] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25">
      <div className="project-art flex aspect-[16/9] items-center justify-center border-b border-white/[0.08]">
        {project.image ? (
          <img alt={`${project.name} preview`} className="h-full w-full object-cover" src={project.image} />
        ) : (
          <div className="text-center">
            <span className="font-mono text-5xl tracking-[-0.08em] text-white/10">
              0{index + 1}
            </span>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
              Image placeholder
            </p>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium text-white">{project.name}</h3>
          <span
            aria-label={`Project status: ${project.status}`}
            className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
              statusStyles[project.status] ?? statusStyles['Status to confirm']
            }`}
          >
            {project.status}
          </span>
        </div>
        <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{project.description}</p>
        <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              className="rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[10px] text-slate-400"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {project.githubUrl ? (
            <a className="inline-flex items-center gap-1.5 text-xs text-cyan-100 hover:text-white" href={project.githubUrl}>
              GitHub <ArrowUpRight />
            </a>
          ) : (
            <span className="text-xs text-slate-600">GitHub link not added</span>
          )}
          {project.demoUrl ? (
            <a className="inline-flex items-center gap-1.5 text-xs text-cyan-100 hover:text-white" href={project.demoUrl}>
              Live demo <ArrowUpRight />
            </a>
          ) : (
            <span className="text-xs text-slate-600">Demo link not added</span>
          )}
        </div>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <Section aria-labelledby="projects-title" className="bg-white/[0.012]" id="projects">
      <SectionHeading
        description="Project summaries, technologies, and current status. Repository, demo, and image details will appear when available."
        eyebrow="Selected work"
        id="projects-title"
        title="My projects."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {portfolio.projects.map((project, index) => (
          <ProjectCard index={index} key={`${project.name}-${index}`} project={project} />
        ))}
      </div>
    </Section>
  )
}

export function SkillsSection() {
  return (
    <Section aria-labelledby="skills-title" id="skills">
      <SectionHeading
        description="A snapshot of what I currently use, what I’m learning, and areas I’m interested in exploring."
        eyebrow="Toolkit"
        id="skills-title"
        title="Skills & learning."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {portfolio.skills.map((group, index) => (
          <article className="rounded-xl border border-white/[0.09] bg-[#0e1118] p-6" key={group.category}>
            <span className="font-mono text-xs text-cyan-200/60">0{index + 1}</span>
            <h3 className="mt-5 text-base font-medium text-white">{group.category}</h3>
            <ul className="mt-5 space-y-3">
              {group.items.map((skill) => (
                <li
                  className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-sm"
                  key={skill.name}
                >
                  <span className="flex items-center gap-3 text-slate-300">
                    <span
                      aria-hidden="true"
                      className={`h-1 w-1 rounded-full ${
                        skill.status === 'Learning'
                          ? 'bg-violet-200/80'
                          : skill.status === 'Interested in'
                            ? 'bg-slate-500'
                            : 'bg-cyan-200/70'
                      }`}
                    />
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">{skill.status}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

function ActivityCard({ activity }) {
  return (
    <article className="rounded-xl border border-white/[0.09] bg-[#0e1118] p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-200/70">
        {activity.area}
      </p>
      <h3 className="mt-5 text-base font-medium text-white">{activity.title}</h3>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] text-slate-500">
        <p>
          <span className="text-slate-600">Role </span>
          {activity.role}
        </p>
        <p>
          <span className="text-slate-600">Dates </span>
          {activity.dates}
        </p>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{activity.detail}</p>
    </article>
  )
}

export function ActivitiesSection() {
  return (
    <Section aria-labelledby="activities-title" className="bg-white/[0.012]" id="activities">
      <SectionHeading
        description="A growing collection of hands-on learning, community involvement, and practical experiences."
        eyebrow="Beyond the classroom"
        id="activities-title"
        title="Activities & experience."
      />
      {portfolio.activities.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.activities.map((activity, index) => (
            <ActivityCard
              activity={activity}
              key={`${activity.area}-${index}`}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-white/[0.09] bg-[#0e1118] px-6 py-10 text-center">
          <p className="text-base font-medium text-slate-200">Experience coming soon</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            This section will be updated with verified activities, projects, and contributions.
          </p>
        </div>
      )}
    </Section>
  )
}

function ContactLinkCard({ external, href, icon: Icon, label, value }) {
  return (
    <a
      className="group flex min-w-0 items-center gap-4 rounded-xl border border-white/[0.09] bg-[#0e1118] p-4 transition hover:border-cyan-200/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-cyan-100/80 transition group-hover:border-cyan-200/20">
        <Icon />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
          {label}
        </span>
        <span className="mt-1 block break-all text-sm text-slate-200">{value}</span>
      </span>
      <ArrowUpRight />
    </a>
  )
}

export function ContactSection() {
  return (
    <Section aria-labelledby="contact-title" className="bg-[#0d1117]" id="contact">
      <div className="grid gap-12 md:grid-cols-[1fr_0.7fr] md:items-end">
        <div>
          <SectionHeading
            description="Have a question or an opportunity to share? Reach out by email or connect with me online."
            eyebrow="Contact"
            id="contact-title"
            title="Let’s start a conversation."
          />
          <a
            className="inline-flex items-center gap-2 text-sm text-cyan-100 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            href="#home"
          >
            Back to the top <ArrowRight />
          </a>
        </div>
        <div className="space-y-3 pb-1">
          <ContactLinkCard
            href={`mailto:${portfolio.email}`}
            icon={MailIcon}
            label="Email"
            value={portfolio.email}
          />
          <ContactLinkCard
            external
            href={portfolio.github}
            icon={GithubIcon}
            label="GitHub"
            value={portfolio.github}
          />
          <ContactLinkCard
            external
            href={portfolio.linkedin}
            icon={LinkedInIcon}
            label="LinkedIn"
            value={portfolio.linkedin.replace(/^https:\/\/(www\.)?/, '')}
          />
        </div>
      </div>
    </Section>
  )
}

export function Footer() {
  const socialProfiles = [
    ['GitHub', portfolio.github],
    ['LinkedIn', portfolio.linkedin],
  ]

  return (
    <footer className="border-t border-white/[0.07] px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {portfolio.name}. Built with care.</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {socialProfiles.map(([label, url]) => (
            url.startsWith('https://') ? (
              <a
                className="transition hover:text-slate-300"
                href={url}
                key={label}
                rel="noreferrer"
                target="_blank"
              >
                {label}
              </a>
            ) : (
              <span key={label}>{label} · add profile URL</span>
            )
          ))}
          <a className="inline-flex items-center gap-1.5 transition hover:text-slate-300" href="#home">
            Back to top <ArrowUpRight />
          </a>
        </div>
      </div>
    </footer>
  )
}
