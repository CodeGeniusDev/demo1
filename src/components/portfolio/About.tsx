const TAGS = [
  "AI Engineer",
  "Computer Science Student",
  "Aviation Intelligence Vision",
  "Deep Learning Enthusiast",
];

const STATS = [
  "22+ Projects Completed",
  "AI & ML Focus",
  "Deep Learning Research",
  "Aviation Intelligence Goal",
];

export function About()
{
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="grid items-start gap-12 lg:grid-cols-1">
        <div className="reveal-left order-1">
          <div className="glass-card relative overflow-hidden rounded-2xl p-8 float-soft">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[color:var(--emerald)]/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-[color:var(--emerald)]/50 bg-background/60 font-mono text-lg font-bold text-[color:var(--emerald-bright)] emerald-glow">
                  AQ
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[color:var(--emerald-bright)]">
                    Identity
                  </div>
                  <div className="text-sm text-[color:var(--text-light)]">Abdullah Qaiser</div>
                </div>
              </div>

              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[color:var(--emerald)]/40 to-transparent" />

              <ul className="space-y-3">
                {TAGS.map((t) => (
                  <li key={t} className="flex items-center gap-3 font-mono text-sm text-[color:var(--text-light)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--emerald-bright)] shadow-[0_0_6px_currentColor]" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-md border border-[color:var(--emerald)]/20 bg-background/40 p-4 font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-muted)]">
                <div className="flex items-center justify-between">
                  <span>Status</span>
                  <span className="text-[color:var(--emerald-bright)]">● Active Research</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span>Focus</span>
                  <span className="text-[color:var(--text-light)]">RNN / LSTM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-right order-2">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--emerald-bright)]">
            Who I Am
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About <span className="text-glow text-[color:var(--emerald-bright)]">Me</span>
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-[color:var(--text-light)] sm:text-lg">
            <p>
              I am a Bachelor of Science in Computer Science student at the{" "}
              <span className="text-[color:var(--emerald-bright)]">University of Lahore</span>, focused on
              Artificial Intelligence, Machine Learning, and Deep Learning.
            </p>
            <p>
              My ultimate professional mission is to engineer <span className="text-foreground">high-safety, scalable AI systems</span> tailored
              specifically for the global <span className="text-[color:var(--emerald-bright)]">Aviation Industry</span>.
            </p>
            <p className="text-[color:var(--text-muted)]">
              I aim to contribute toward predictive intelligence, intelligent automation, operational
              optimization, and next-generation decision-support systems capable of improving aviation
              safety and efficiency.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {STATS.map((s) => (
              <div key={s} className="glass-card rounded-lg px-4 py-3 text-sm text-[color:var(--text-light)]">
                <span className="mr-2 text-[color:var(--emerald-bright)]">▹</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
