import { useEffect, useState } from "react";

const PHRASES = [
  "AI & ML Engineer",
  "Specializing in Aviation Intelligence",
  "Deep Learning · Computer Vision · NLP",
];

function useTypewriter()
{
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() =>
  {
    const full = PHRASES[i % PHRASES.length];
    const speed = del ? 35 : 60;
    const t = setTimeout(() =>
    {
      if (!del)
      {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDel(true), 1600);
      }
      else
      {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "")
        {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

export function Hero()
{
  const typed = useTypewriter();

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-6 pt-24">
      <div className="mx-auto max-w-6xl text-center">
        <h1
          className="reveal text-glow font-display text-6xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[8.5rem] is-visible"
          style={{ animationDelay: "0.1s" }}
        >
          Abdullah Qaiser
        </h1>

        <p
          className="reveal mx-auto mt-6 min-h-[2.5rem] max-w-3xl font-mono text-sm text-[color:var(--text-light)] sm:text-base md:text-lg is-visible"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="cursor-blink">{typed}</span>
        </p>

        <div
          className="reveal mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row is-visible"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 rounded-md border-2 border-[color:var(--emerald)] bg-[color:var(--emerald)]/10 px-8 py-4 text-base font-semibold text-[color:var(--emerald-bright)] transition-all duration-300 hover:scale-105 hover:emerald-glow-strong hover:bg-[color:var(--emerald)]/20"
          >
            View Projects
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#connect"
            className="inline-flex items-center justify-center rounded-md border-2 border-[color:var(--emerald)]/40 bg-background/40 px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-[color:var(--emerald)] hover:emerald-glow"
          >
            Connect
          </a>
        </div>

      </div>
    </section>
  );
}
