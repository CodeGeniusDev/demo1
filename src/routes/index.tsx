import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Journey } from "@/components/portfolio/Journey";
import { Stack } from "@/components/portfolio/Stack";
import { Projects } from "@/components/portfolio/Projects";
import { Connect, Footer } from "@/components/portfolio/Connect";
import { useReveal } from "@/components/portfolio/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdullah Qaiser — AI/ML Engineer | Aviation Intelligence" },
      {
        name: "description",
        content:
          "Abdullah Qaiser — Future AI Engineer building Aviation Intelligence systems. 22+ AI/ML projects in Deep Learning, Computer Vision, and Sequential AI.",
      },
      { property: "og:title", content: "Abdullah Qaiser — AI/ML Engineer" },
      {
        property: "og:description",
        content: "Building scalable AI systems for the global aviation industry.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index()
{
  useReveal();

  useEffect(() =>
  {
    if (window.location.hash)
    {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);


  return (
    <main className="relative min-h-screen text-foreground">
      <Background />
      <Nav />
      <Hero />
      <About />
      <Journey />
      <Stack />
      <Projects />
      <Connect />
      <Footer />
    </main>
  );
}
