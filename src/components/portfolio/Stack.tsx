const GROUPS = [
  { title: "Programming", items: ["Python"] },
  { title: "Data Science & Analytics", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] },
  { title: "Machine Learning", items: ["Scikit-Learn"] },
  { title: "Deep Learning", items: ["TensorFlow", "Keras", "ANN", "CNN", "RNN", "LSTM"] },
];

export function Stack()
{
  return (
    <section id="stack" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="reveal text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--emerald-bright)]">
          Tools & Technologies
        </div>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Core <span className="text-glow text-[color:var(--emerald-bright)]">Tech Stack</span>
        </h2>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {GROUPS.map((g) => (
          <div key={g.title} className="reveal-scale glass-card rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-foreground">{g.title}</h3>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-muted)]">
                {String(g.items.length).padStart(2, "0")} tools
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {g.items.map((it) => (
                <div
                  key={it}
                  className="group flex items-center gap-2 rounded-md border border-[color:var(--emerald)]/15 bg-background/40 px-3 py-2.5 transition-all duration-300 hover:scale-[1.04] hover:border-[color:var(--emerald)]/60 hover:emerald-glow"
                >
                  <span className="h-2 w-2 rounded-sm bg-[color:var(--emerald-bright)] shadow-[0_0_6px_currentColor] transition-transform group-hover:rotate-45" />
                  <span className="font-mono text-sm text-[color:var(--text-light)] group-hover:text-foreground">
                    {it}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
