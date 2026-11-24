import { portfolio } from '../data/portfolio.js'
import { Section, SectionHeading } from './ui.jsx'

export default function About() {
  const { about } = portfolio

  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading id="about-title" title="About me" />
          <div className="mt-6 max-w-prose space-y-5 text-lg leading-8">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside
          aria-labelledby="education-title"
          className="self-start rounded-2xl border border-line bg-mist p-7 lg:col-span-5"
        >
          <h3 className="text-lg font-bold text-ink" id="education-title">
            Education
          </h3>
          <p className="mt-4 font-semibold text-ink">{about.education.institution}</p>
          <p className="mt-1">{about.education.programme}</p>

          <div className="mt-6 border-t border-line pt-5">
            <p className="text-sm text-muted">Relevant coursework</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.education.coursework.map((item) => (
                <li
                  className="rounded-md border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  )
}
