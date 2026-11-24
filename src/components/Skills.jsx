import { portfolio } from '../data/portfolio.js'
import { Section, SectionHeading } from './ui.jsx'

export default function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            description="Technologies I work with, and the areas I’m exploring next."
            id="skills-title"
            title="Skills and tools"
          />
        </div>

        <div className="lg:col-span-8">
          <dl className="border-b border-line">
            {portfolio.skills.map((group) => (
              <div
                className="grid gap-3 border-t border-line py-6 sm:grid-cols-[11rem_1fr] sm:gap-6"
                key={group.category}
              >
                <dt className="font-semibold text-ink sm:pt-1.5">{group.category}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                          group.exploring
                            ? 'border border-dashed border-muted/60 text-body'
                            : 'border border-line bg-mist text-ink'
                        }`}
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted">A dashed outline marks areas I’m still exploring.</p>
        </div>
      </div>
    </Section>
  )
}
