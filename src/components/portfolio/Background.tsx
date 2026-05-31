import { useEffect, useRef } from "react";

export function Background()
{
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() =>
  {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const handleResize = () =>
    {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const NODES = 55;
    const nodes = Array.from({ length: NODES }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    let raf = 0;
    const tick = () =>
    {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes)
      {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      ctx.strokeStyle = "rgba(74, 222, 128, 0.12)";
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++)
      {
        for (let j = i + 1; j < nodes.length; j++)
        {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140)
          {
            ctx.globalAlpha = 1 - d / 140;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = "rgba(74, 222, 128, 0.7)";
      for (const n of nodes)
      {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () =>
    {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-1/2 top-1/3 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 radial-glow" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Radar sweep */}
      <div className="pointer-events-none absolute right-[-10vw] top-[-10vw] h-[40vw] w-[40vw] opacity-20">
        <div className="relative h-full w-full rounded-full border border-[color:var(--emerald)]/30">
          <div className="absolute inset-4 rounded-full border border-[color:var(--emerald)]/20" />
          <div className="absolute inset-12 rounded-full border border-[color:var(--emerald)]/15" />
          <div
            className="absolute inset-0 origin-center"
            style={{ animation: "radar-sweep 8s linear infinite" }}
          >
            <div
              className="absolute left-1/2 top-1/2 h-1/2 w-1 -translate-x-1/2 origin-top"
              style={{
                background: "linear-gradient(to bottom, rgba(74,222,128,0.6), transparent)",
              }}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
    </div>
  );
}
