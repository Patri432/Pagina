import { Media } from "./Media";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-[1600px] scroll-mt-24 px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 border-t border-border pt-10 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">01</p>
          <h2 className="display mt-3 text-[13vw] leading-[0.85] md:text-[5vw]">Sobre mí</h2>
        </Reveal>

        <Reveal className="md:col-span-4" delay={100}>
          <Media
            src="/images/about/patricia.jpg"
            alt="Retrato profesional de Patricia Martín"
            note="Fotografía profesional"
            className="aspect-[3/4] w-full"
          />
        </Reveal>

        <Reveal className="space-y-5 md:col-span-4" delay={180}>
          <p className="text-lg leading-relaxed md:text-xl">
            Soy Patricia Martín, artista 3D especializada en animación, modelado, texturizado e
            iluminación.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Me interesa especialmente crear imágenes y mundos 3D con una fuerte intención visual,
            combinando precisión técnica y creatividad.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Actualmente cuento con formación especializada en Animación 3D y experiencia en
            proyectos relacionados con modelado, visualización, patrimonio y producción audiovisual.
          </p>
          <div className="rule-top pt-5">
            <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
              LOGROÑO · LA RIOJA
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
