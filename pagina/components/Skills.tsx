import { Reveal } from "./Reveal";

const main = ["Modelado 3D", "Texturizado", "Iluminación", "Animación 3D"];
const software = ["Autodesk Maya", "Blender", "Lumion", "AutoCAD", "Inventor", "KeyShot"];

export function Skills() {
  return (
    <section
      id="habilidades"
      className="mx-auto max-w-[1600px] scroll-mt-24 px-5 py-24 md:px-10 md:py-36"
    >
      <Reveal className="flex items-end justify-between gap-6 border-t border-border pt-10">
        <h2 className="display text-[13vw] leading-[0.85] md:text-[5vw]">Habilidades</h2>
        <p className="eyebrow hidden md:block">03</p>
      </Reveal>

      <div className="mt-14 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <ul className="space-y-1">
            {main.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 80}>
                <span className="display flex cursor-default items-start gap-4 py-1 text-[9vw] leading-[0.95] transition-colors duration-300 hover:text-accent md:text-[3.8vw]">
                  <span className="mt-2 shrink-0 font-mono text-[11px] tracking-[0.2em] text-muted-foreground md:mt-4">
                    0{i + 1}
                  </span>
                  <span className="whitespace-nowrap">{s}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="md:col-span-5" delay={120}>
          <p className="eyebrow">Programas</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {software.map((s) => (
              <li key={s}>
                <span className="inline-block border border-border px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
