import { useMemo, useState } from "react";
import { categories, projects, type Category } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function ProjectGrid() {
  const [active, setActive] = useState<Category | "TODOS">("TODOS");

  const visible = useMemo(
    () => (active === "TODOS" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section
      id="trabajos"
      className="mx-auto max-w-[1600px] scroll-mt-24 px-5 py-24 md:px-10 md:py-36"
    >
      <Reveal className="flex items-end justify-between gap-6 border-t border-border pt-10">
        <h2 className="display text-[16vw] leading-[0.85] md:text-[7vw]">Trabajos</h2>
        <p className="eyebrow hidden md:block">05</p>
      </Reveal>

      <Reveal className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
        {(["TODOS", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={cn(
              "relative font-mono text-[11px] tracking-[0.18em] transition-colors duration-300",
              active === c ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
            <span
              className={cn(
                "absolute -bottom-1 left-0 h-px w-full origin-left bg-accent transition-transform duration-500",
                active === c ? "scale-x-100" : "scale-x-0",
              )}
            />
          </button>
        ))}
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-16">
        {visible.map((p, i) => (
          <Reveal
            key={p.slug}
            delay={i * 60}
            className={
              p.size === "wide"
                ? "col-span-12 md:col-span-7"
                : p.size === "tall"
                  ? "col-span-12 md:col-span-5"
                  : "col-span-12 md:col-span-6"
            }
          >
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
