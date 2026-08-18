import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const title = "Patricia Martín — 3D Artist & La Maga Pica";
const description =
  "Dos universos: el portfolio 3D de Patricia Martín y La Maga Pica, magia en directo para todo tipo de eventos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="grid min-h-screen grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      <Half
        to="/portfolio"
        eyebrow="3D ARTIST"
        name="Patricia Martín"
        text="Animación, modelado, texturizado, iluminación, props y entornos 3D."
        cta="VER PORTFOLIO"
        tone="light"
      />
      <Half
        to="/magia"
        eyebrow="MAGIA EN DIRECTO"
        name="La Maga Pica"
        text="Espectáculos de magia cercana y escénica para eventos y escenarios."
        cta="ENTRAR EN LA MAGIA"
        tone="dark"
      />
    </main>
  );
}

function Half({
  to,
  eyebrow,
  name,
  text,
  cta,
  tone,
}: {
  to: string;
  eyebrow: string;
  name: string;
  text: string;
  cta: string;
  tone: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Link
      to={to}
      className={[
        "group relative flex flex-col justify-end overflow-hidden px-6 py-12 transition-colors duration-500 md:px-12 md:py-16",
        dark
          ? "bg-foreground text-background"
          : "bg-background text-foreground border-b border-border md:border-b-0 md:border-r",
      ].join(" ")}
    >
      <span
        aria-hidden
        className={[
          "pointer-events-none absolute inset-0 origin-bottom scale-y-0 transition-transform duration-700 ease-out group-hover:scale-y-100",
          dark ? "bg-accent/25" : "bg-accent/10",
        ].join(" ")}
      />
      <div className="relative">
        <p className="font-mono text-[11px] tracking-[0.24em] opacity-70">{eyebrow}</p>
        <h1 className="display mt-4 text-[15vw] leading-[0.85] md:text-[6.5vw]">{name}</h1>
        <p className="mt-6 max-w-sm text-base leading-relaxed opacity-80">{text}</p>
        <span
          className={[
            "mt-10 inline-flex items-center gap-2 border px-6 py-3 font-mono text-[11px] tracking-[0.2em] transition-colors duration-300",
            dark
              ? "border-background group-hover:bg-background group-hover:text-foreground"
              : "border-foreground group-hover:bg-foreground group-hover:text-background",
          ].join(" ")}
        >
          {cta}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
