const tones = {
  paper: 'bg-white',
  mist: 'bg-mist',
  ink: 'bg-ink text-white',
}

export function Section({ id, labelledBy, tone = 'paper', className = '', children }) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={`${tones[tone]} py-20 sm:py-24 lg:py-28 ${className}`}
      id={id}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  )
}

export function SectionHeading({ id, title, description, dark = false }) {
  return (
    <div className="max-w-2xl">
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`}
        id={id}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-8 ${dark ? 'text-slate-300' : 'text-body'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
