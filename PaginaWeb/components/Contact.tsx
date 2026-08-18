import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contacto"
      className="mx-auto max-w-[1600px] scroll-mt-24 px-5 py-24 md:px-10 md:py-36"
    >
      <Reveal className="border-t border-border pt-10">
        <p className="eyebrow">06</p>
        <h2 className="display mt-4 text-[18vw] leading-[0.82] md:text-[11vw]">¿Hablamos?</h2>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5" delay={80}>
          <p className="text-lg leading-relaxed md:text-xl">
            Si estás buscando una artista 3D para colaborar en un proyecto, puedes contactar
            conmigo.
          </p>
        </Reveal>

        <Reveal className="md:col-span-4 md:col-start-8" delay={140}>
          <address className="not-italic">
            <p className="font-display text-xl uppercase tracking-tight">Patricia Martín</p>
            <a
              href="tel:+34628243657"
              className="mt-4 block text-base transition-colors hover:text-accent"
            >
              628 243 657
            </a>
            <a
              href="mailto:patriciaanimacion3d@gmail.com"
              className="block break-all text-base transition-colors hover:text-accent"
            >
              patriciaanimacion3d@gmail.com
            </a>
          </address>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:patriciaanimacion3d@gmail.com"
              className="border border-foreground px-6 py-3 font-mono text-[11px] tracking-[0.2em] transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              EMAIL
            </a>
            <button
              type="button"
              disabled
              title="Enlace pendiente"
              className="cursor-not-allowed border border-border px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground"
            >
              LINKEDIN
            </button>
            <button
              type="button"
              disabled
              title="Enlace pendiente"
              className="cursor-not-allowed border border-border px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground"
            >
              INSTAGRAM
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
