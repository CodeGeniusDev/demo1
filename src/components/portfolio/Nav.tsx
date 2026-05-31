import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About Me" },
  { href: "#journey", label: "Learning" },
  { href: "#stack", label: "Tech Stack" },
];

export function Nav()
{
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() =>
  {
    const onScroll = () =>
    {
      setScrolled(window.scrollY > 24);
      let current = "";
      for (const l of LINKS)
      {
        const el = document.querySelector(l.href) as HTMLElement | null;
        if (el && el.getBoundingClientRect().top <= 120) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-[color:var(--emerald)]/15" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-[color:var(--emerald)]/40 bg-background/60 font-mono text-sm font-bold text-[color:var(--emerald-bright)] emerald-glow transition-transform group-hover:scale-105">
            AQ
          </span>
        </a>
        <ul className="flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative px-2 py-2 text-xs sm:px-4 sm:text-sm transition-colors ${
                  active === l.href
                    ? "text-[color:var(--emerald-bright)]"
                    : "text-[color:var(--text-light)] hover:text-[color:var(--emerald-bright)]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-[color:var(--emerald-bright)] transition-transform duration-300 ${
                    active === l.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#connect"
          className="hidden rounded-md border border-[color:var(--emerald)]/60 px-4 py-2 text-sm font-medium text-[color:var(--emerald-bright)] transition-all hover:emerald-glow hover:scale-105 md:inline-block"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
