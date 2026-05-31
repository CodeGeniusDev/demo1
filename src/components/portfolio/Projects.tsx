const PROJECTS = [
  {
    title: "Face Mask Detection Web App",
    desc: "Custom Convolutional Neural Network (CNN) model for high-accuracy mask classification, deployed through Streamlit.",
    tech: ["CNN", "TensorFlow", "Keras", "Streamlit", "OpenCV"],
    github: "https://github.com/abdullahq-mlworks/Web-App-Face-mask-CNN",
    tag: "Computer Vision",
  },
  {
    title: "Digit Recognition",
    desc: "Custom Artificial Neural Network (ANN) architecture benchmarked on image datasets for handwritten digit recognition.",
    tech: ["ANN", "TensorFlow", "Keras", "NumPy"],
    github: "https://github.com/abdullahq-mlworks/Digit-Recognition--ANN-",
    tag: "Deep Learning",
  },
  {
    title: "Credit Card Fraud Detection",
    desc: "End-to-end Machine Learning pipeline optimized using advanced XGBoost boosting techniques.",
    tech: ["XGBoost", "Scikit-Learn", "Pandas", "Feature Engineering"],
    github: "https://github.com/abdullahq-mlworks/Fraud-Detection-using-XGBoost",
    tag: "Classical ML",
  },
  {
    title: "Loan Default Prediction",
    desc: "Advanced model deployment using custom Stacking Ensemble learning classifiers.",
    tech: ["Stacking", "Scikit-Learn", "XGBoost", "LightGBM"],
    github: "https://github.com/abdullahq-mlworks/Loan-Prediction--Stacking-",
    tag: "Ensemble Learning",
  },
];

export function Projects()
{
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="reveal text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--emerald-bright)]">
          Featured Work
        </div>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Selected <span className="text-glow text-[color:var(--emerald-bright)]">Projects</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[color:var(--text-muted)]">
          Production-grade AI/ML systems spanning classical learning, deep architectures, and computer vision.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            className="reveal-scale glass-card group relative overflow-hidden rounded-2xl p-8"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[color:var(--emerald)]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--emerald-bright)]">
                  {p.tag}
                </div>
                <div className="font-mono text-xs text-[color:var(--text-muted)]">
                  / {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 text-[color:var(--text-light)]">{p.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[color:var(--emerald)]/20 bg-background/40 px-2.5 py-1 font-mono text-xs text-[color:var(--text-light)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[color:var(--emerald)]/15 pt-6">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[color:var(--emerald)]/60 bg-[color:var(--emerald)]/10 px-4 py-2 text-sm font-medium text-[color:var(--emerald-bright)] transition-all duration-300 hover:scale-105 hover:emerald-glow"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.12 3.07.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.18c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                  View on GitHub
                </a>
                <span className="font-mono text-xs text-[color:var(--text-muted)]">↗ External</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
