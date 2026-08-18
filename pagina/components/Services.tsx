import { Media } from "./Media";
import { Reveal } from "./Reveal";

const services = [
  {
    n: "01",
    title: "Modelado 3D",
    text: "Modelado de productos y entornos con topología optimizada y fidelidad visual.",
    image: "/images/projects/servicio-modelado.jpg",
  },
  {
    n: "02",
    title: "Texturizado",
    text: "Creación de materiales y texturas PBR con atención al detalle.",
    image: "/images/projects/servicio-texturizado.jpg",
  },
  {
    n: "03",
    title: "Iluminación",
    text: "Iluminación y composición de escenas 3D para conseguir una imagen atractiva y profesional.",
    image: "/images/projects/servicio-iluminacion.jpg",
  },
  {
    n: "04",
    title: "Animación 3D",
    text: "Creación y preparación de elementos 3D para proyectos de animación y audiovisual.",
    image: "/images/projects/servicio-animacion.jpg",
  },
];

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-secondary/60 py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal className="flex items-end justify-between gap-6 border-t border-border pt-10">
          <h2 className="display text-[13vw] leading-[0.85] md:text-[5vw]">Servicios</h2>
          <p className="eyebrow hidden md:block">02</p>
        </Reveal>

        <ul className="mt-14">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 70}>
              <div className="group relative grid grid-cols-12 items-center gap-4 border-b border-border py-7 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] md:hover:scale-[1.012]">
                <span className="col-span-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground md:col-span-1">
                  {s.n}
                </span>
                <h3 className="display col-span-10 text-2xl md:col-span-4 md:text-[2.6vw]">
                  {s.title}
                </h3>
                <p className="col-span-12 text-sm leading-relaxed text-muted-foreground md:col-span-5 md:col-start-7 md:text-base">
                  {s.text}
                </p>

                <div className="pointer-events-none absolute right-4 top-1/2 hidden w-[260px] -translate-y-1/2 scale-95 opacity-0 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-100 group-hover:opacity-100 xl:block">
                  <Media
                    src={s.image}
                    alt={`Ejemplo de trabajo de ${s.title}`}
                    note={s.title}
                    className="aspect-[4/3] w-full"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
