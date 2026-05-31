const STAGES = [
  {
    n: "01",
    title: "Classical Machine Learning & Feature Engineering",
    status: "Completed",
    items: [
      "Decision Trees", "Logistic Regression", "KNN", "Naive Bayes",
      "Linear Regression", "Random Forest", "PCA", "KMeans Clustering",
      "Hierarchical Clustering", "Voting Classifiers", "Bagging Classifiers",
      "XGBoost", "LightGBM", "Advanced Model Stacking",
    ],
  },
  {
    n: "02",
    title: "Deep Learning Architectures",
    status: "Completed",
    items: ["TensorFlow", "Keras", "Artificial Neural Networks (ANN)"],
  },
  {
    n: "03",
    title: "Computer Vision Systems",
    status: "Completed",
    items: ["CNN Development", "Object Classification", "Tracking Applications", "Image Classification"],
  },
  {
    n: "04",
    title: "Sequential AI & NLP Research",
    status: "Active",
    items: [
      "Recurrent Neural Networks (RNN)",
      "Long Short-Term Memory Networks (LSTM)",
      "Sequence Prediction",
      "Language Understanding",
    ],
  },
];

export function Journey()
{
  return (
    <section id="journey" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="reveal text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--emerald-bright)]">
          Learning Roadmap
        </div>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Technical <span className="text-glow text-[color:var(--emerald-bright)]">Journey</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[color:var(--text-muted)]">
          Sequential progression through the AI/ML stack — from classical learning to sequential intelligence.
        </p>
      </div>

      <div className="relative mt-20">
        <div className="space-y-12">
          {STAGES.map((s) => (
            <div key={s.n} className="reveal">
              <div className="mb-4">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                  Stage {s.n}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {s.title}
                </h3>
                <div
                  className={`mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${
                    s.status === "Active"
                      ? "border-[color:var(--emerald)] bg-[color:var(--emerald)]/10 text-[color:var(--emerald-bright)] pulse-border"
                      : "border-[color:var(--emerald)]/30 text-[color:var(--text-muted)]"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${s.status === "Active" ? "bg-[color:var(--emerald-bright)] shadow-[0_0_8px_currentColor]" : "bg-[color:var(--emerald)]/60"}`} />
                  {s.status}
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-md border border-[color:var(--emerald)]/20 bg-background/40 px-2.5 py-1 font-mono text-xs text-[color:var(--text-light)] transition-colors hover:border-[color:var(--emerald)]/60 hover:text-[color:var(--emerald-bright)]"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
