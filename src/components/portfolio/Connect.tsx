const LINKS = [
  {
    label: "Email",
    value: "abdullah.q.mlworks@gmail.com",
    href: "mailto:abdullah.q.mlworks@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "@abdullahq-mlworks",
    href: "https://github.com/abdullahq-mlworks",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Abdullah Qaiser",
    href: "https://www.linkedin.com/in/abdullah-qaiser-32b514382/",
    external: true,
  },
  {
    label: "Instagram",
    value: "@abdullahq_mlworks",
    href: "https://www.instagram.com/abdullahq_mlworks/",
    external: true,
  },
];

export function Connect()
{
  return (
    <section id="connect" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="reveal text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--emerald-bright)]">
          Let's Connect
        </div>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Build Something <span className="text-glow text-[color:var(--emerald-bright)]">Meaningful</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[color:var(--text-muted)]">
          Open to internships, research collaborations, and aviation-AI ventures.
        </p>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="glass-card group flex items-center justify-between rounded-xl p-6 transition-all"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--emerald-bright)]">
                {l.label}
              </div>
              <div className="mt-1 font-display text-lg font-semibold text-foreground sm:text-xl">
                {l.value}
              </div>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--emerald)]/40 text-[color:var(--emerald-bright)] transition-all duration-300 group-hover:scale-110 group-hover:emerald-glow-strong group-hover:rotate-[-45deg]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="reveal mt-12 text-center">
        <a
          href="mailto:abdullah.q.mlworks@gmail.com"
          className="inline-flex items-center gap-3 rounded-md border-2 border-[color:var(--emerald)] bg-[color:var(--emerald)]/10 px-8 py-4 text-base font-semibold text-[color:var(--emerald-bright)] transition-all duration-300 hover:scale-105 hover:emerald-glow-strong pulse-border"
        >
          Start a Conversation
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8l9 6 9-6M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M3 8l2-2h14l2 2" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export function Footer()
{
  return (
    <footer className="relative border-t border-[color:var(--emerald)]/15 px-6 py-12">
      <div className="mx-auto max-w-7xl text-center">
        <div className="font-display text-2xl font-bold text-foreground">Abdullah Qaiser</div>
        <div className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--emerald-bright)]">
          AI & ML Engineer
        </div>
        <p className="mt-3 text-sm text-[color:var(--text-muted)]">
          Building the Future of Aviation Intelligence
        </p>
        <div className="mt-6 font-mono text-xs text-[color:var(--text-muted)]">
          © 2026 All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
