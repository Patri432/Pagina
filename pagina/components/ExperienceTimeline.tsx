import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Item = { years: string; text: string; award?: boolean };

const items: Item[] = [
  { years: "2021 — 2025", text: "Grado Superior de Animación 3D." },
  { years: "2023 — 2025", text: "Prácticas de diseñadora 3D en Render Estudio 3D." },
  {
    years: "2025",
    text: "Premio corto de animación 3D por “La Gota de Leche”.",
    award: true,
  },
  { years: "2025", text: "Primer premio en RiojaSkills.", award: true },
  {
    years: "2025",
    text: "Recreación en 3D de las ruinas romanas que yacen bajo el colegio de Varea. Proyecto de vídeo documental.",
  },
  { years: "2026", text: "Representación de La Rioja en SpainSkills.", award: true },
  { years: "2026", text: "Curso de recreación en 3D del patrimonio — KORE Formación." },
  { years: "2026", text: "Modelado 3D de butacas para ASCENDER." },
];

export function ExperienceTimeline() {
  return (
    <section id="experiencia" className="scroll-mt-24 bg-secondary/60 py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal className="flex items-end justify-between gap-6 border-t border-border pt-10">
          <h2 className="display max-w-[12ch] text-[13vw] leading-[0.85] md:text-[5vw]">
            Educación &amp; Experiencia
          </h2>
          <p className="eyebrow hidden md:block">04</p>
        </Reveal>

        <ol className="mt-14 border-l border-border pl-6 md:pl-12">
          {items.map((item, i) => (
            <Reveal as="li" key={`${item.years}-${i}`} delay={i * 60}>
              <div className="relative grid gap-2 py-7 md:grid-cols-12 md:gap-8">
                <span
                  aria-hidden
                  className={cn(
                    "absolute -left-[25px] top-[38px] size-2 rounded-full md:-left-[49px]",
                    item.award ? "bg-accent" : "bg-foreground/30",
                  )}
                />
                <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground md:col-span-3">
                  {item.years}
                </span>
                <p
                  className={cn(
                    "md:col-span-9",
                    item.award
                      ? "font-display text-xl uppercase leading-tight tracking-tight text-accent md:text-2xl"
                      : "text-base leading-relaxed md:text-lg",
                  )}
                >
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
