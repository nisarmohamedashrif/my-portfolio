import { portfolio } from '../data/portfolio.js'
import { Section, SectionHeading } from './ui.jsx'

// Rendered only when portfolio.activities has entries (see App.jsx).
export default function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title" tone="mist">
      <SectionHeading
        description="Activities, teams and hands-on experience beyond coursework."
        id="experience-title"
        title="Experience"
      />
      <ol className="mt-12 space-y-10 border-l border-line pl-8">
        {portfolio.activities.map((activity, index) => (
          <li className="relative" key={`${activity.title}-${index}`}>
            <span
              aria-hidden="true"
              className="absolute -left-[2.4rem] top-1.5 h-3 w-3 rounded-full border-2 border-brand bg-mist"
            />
            <p className="text-sm text-muted">{activity.dates}</p>
            <h3 className="mt-1 text-lg font-bold text-ink">{activity.title}</h3>
            <p className="text-sm font-semibold text-brand">{activity.role}</p>
            <p className="mt-2 max-w-2xl leading-7">{activity.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
