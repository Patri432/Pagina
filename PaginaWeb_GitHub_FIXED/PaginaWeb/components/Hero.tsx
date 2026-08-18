import { useEffect, useState } from "react";
import { Media } from "./Media";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setOffset(Math.min(window.scrollY, 600));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lineClass = `block overflow-hidden transition-all duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] ${
    mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`;

  return (
    <section id="inicio" className="relative min-h-[100svh] pb-16 pt-28 md:pt-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <h1 className="display text-[16vw] leading-[0.82] md:text-[13vw]">
          <span
            className={lineClass}
            style={{ transitionDelay: "100ms" }}
          >
            Patricia
          </span>
          <span
            className={lineClass}
            style={{ transitionDelay: "220ms" }}
          >
            Martín
          </span>
        </h1>

        <div className="mt-8 grid gap-10 border-t border-border pt-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <p className="font-display text-xl uppercase tracking-tight md:text-2xl">
              3D Artist / Animation
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Modelado 3D · Texturizado · Iluminación · Animación
            </p>
          </div>

          <div className="md:col-span-8">
            <Media
              src="/images/hero/hero-render.jpg"
              alt="Render 3D principal del portfolio de Patricia Martín"
              note="Render principal del hero"
              className="aspect-[16/9] w-full"
              imgClassName="scale-[1.02]"
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        style={{ transform: `translateY(${offset * -0.12}px)`, opacity: 1 - offset / 260 }}
        className="pointer-events-none absolute bottom-6 left-5 flex items-center gap-3 md:left-10"
      >
        <span className="eyebrow">Scroll</span>
        <span className="block h-10 w-px bg-foreground/40" />
      </div>
    </section>
  );
}
