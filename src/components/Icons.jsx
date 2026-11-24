function Svg({ className, children, ...props }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" {...props}>
      {children}
    </svg>
  )
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 1.75,
}

export function ArrowUpRight({ className = 'h-4 w-4' }) {
  return (
    <Svg className={className}>
      <path d="M7 17 17 7M8 7h9v9" {...stroke} />
    </Svg>
  )
}

export function ArrowUp({ className = 'h-4 w-4' }) {
  return (
    <Svg className={className}>
      <path d="M12 19V5m-6 6 6-6 6 6" {...stroke} />
    </Svg>
  )
}

export function MenuIcon({ className = 'h-6 w-6' }) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" {...stroke} />
    </Svg>
  )
}

export function XIcon({ className = 'h-6 w-6' }) {
  return (
    <Svg className={className}>
      <path d="m6 6 12 12M18 6 6 18" {...stroke} />
    </Svg>
  )
}

export function CheckIcon({ className = 'h-5 w-5' }) {
  return (
    <Svg className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" {...stroke} strokeWidth={2} />
    </Svg>
  )
}

export function CopyIcon({ className = 'h-5 w-5' }) {
  return (
    <Svg className={className}>
      <rect height="12" rx="2" width="12" x="8.5" y="8.5" {...stroke} />
      <path d="M15.5 8.5v-2a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2" {...stroke} />
    </Svg>
  )
}

export function MailIcon({ className = 'h-5 w-5' }) {
  return (
    <Svg className={className}>
      <rect height="15" rx="2.5" width="18" x="3" y="4.5" {...stroke} />
      <path d="m4 7 8 6 8-6" {...stroke} />
    </Svg>
  )
}

export function GithubIcon({ className = 'h-5 w-5' }) {
  return (
    <Svg className={className} fill="currentColor">
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.68.08-.68 1.12.08 1.72 1.15 1.72 1.15 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.11 2.98.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.11 5.52.4.35.76 1.04.76 2.1v3.12c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </Svg>
  )
}

export function LinkedInIcon({ className = 'h-5 w-5' }) {
  return (
    <Svg className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </Svg>
  )
}
