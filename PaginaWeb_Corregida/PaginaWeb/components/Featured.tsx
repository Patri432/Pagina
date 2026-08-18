import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { Media } from "./Media";
import { Reveal } from "./Reveal";

const groups = [
  { key: "diseno", title: "Trabajos de diseño 3D" },
  { key: "render-estudio", title: "Prácticas en Render Estudio 3D" },
  { key: "documental", title: "Props integrados en el documental" },
  { key: "props", title: "Props variados" },
] as const;

export function Featured() {
  return (
    <section className="bg-foreground py-24 text-background md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal className="border-t border-background/20 pt-10">
          <p className="font-mono text-[11px] tracking-[0.24em] text-background/60">
            EXPOSICIÓN
          </p>
          <h2 className="display mt-3 text-[13vw] leading-[0.85] md:text-[5vw]">
            Proyectos destacados
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20">
          {groups.map((g, gi) => {
            const items = projects.filter((p) => p.featured === g.key);
            if (items.length === 0) return null;
            return (
              <Reveal key={g.key} delay={gi * 60}>
                <div className="grid gap-8 md:grid-cols-12">
                  <div className="md:col-span-3">
                    <h3 className="font-display text-2xl uppercase leading-tight tracking-tight">
                      {g.title}
                    </h3>
                  </div>
                  <div className="grid gap-8 md:col-span-9 md:grid-cols-2">
                    {items.map((p) => (
                      <Link
                        key={p.slug}
                        to="/proyectos/$slug"
                        params={{ slug: p.slug }}
                        className="group block"
                      >
                        <Media
                          src={p.image}
                          alt={`${p.title} — ${p.category}`}
                          note={p.title}
                          className="aspect-[4/3] w-full"
                          imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
                        />
                        <p className="mt-3 font-display text-base uppercase tracking-tight transition-colors group-hover:text-accent">
                          {p.title}
                        </p>
                        <p className="font-mono text-[10px] tracking-[0.18em] text-background/50">
                          {p.category} — {p.year}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
