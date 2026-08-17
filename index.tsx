import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Featured } from "@/components/Featured";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const title = "Patricia Martín | 3D Artist & Animation";
const title = "Patricia Martín — 3D Artist & La Maga Pica";
const description =
  "Portfolio profesional de Patricia Martín, artista 3D especializada en modelado, texturizado, iluminación, animación y creación de props y entornos 3D.";
  "Dos universos: el portfolio 3D de Patricia Martín y La Maga Pica, magia en directo para todo tipo de eventos.";

export const Route = createFileRoute("/")({
  head: () => ({
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
  component: Landing,
});

function Index() {
function Landing() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <ExperienceTimeline />
        <ProjectGrid />
        <Featured />
        <Contact />
      </main>
      <Footer />
    </>
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
