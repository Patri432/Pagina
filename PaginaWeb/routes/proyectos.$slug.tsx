import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { getNextProject, getProject } from "@/data/projects";

export const Route = createFileRoute("/proyectos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, next: getNextProject(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Proyecto no disponible | Patricia Martín" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} | Patricia Martín — 3D Artist`;
    const description = project.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project, next } = Route.useLoaderData();

  return (
    <>
      <Cursor />
      <Navbar />
      <main className="animate-fade-in">
        {/* 01 — HERO */}
        <section className="px-5 pt-28 md:px-10 md:pt-32">
          <Media
            src={project.image}
            alt={`${project.title} — render principal`}
            note={`${project.title} — hero`}
            className="h-[70svh] w-full md:h-[86svh]"
          />
          <h1 className="display mt-8 text-[12vw] leading-[0.85] md:text-[7vw]">
            {project.title}
          </h1>
        </section>

        {/* 02 — INFORMACIÓN */}
        <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
          <Reveal className="grid gap-10 border-t border-border pt-10 md:grid-cols-12">
            <dl className="grid grid-cols-2 gap-8 md:col-span-5 md:grid-cols-2">
              <div>
                <dt className="eyebrow">Año</dt>
                <dd className="mt-2 text-base">{project.year}</dd>
              </div>
              <div>
                <dt className="eyebrow">Categoría</dt>
                <dd className="mt-2 text-base text-accent">{project.category}</dd>
              </div>
              <div className="col-span-2">
                <dt className="eyebrow">Software</dt>
                <dd className="mt-2 text-base">{project.software.join(" · ")}</dd>
              </div>
            </dl>
            <p className="text-lg leading-relaxed md:col-span-6 md:col-start-7 md:text-xl">
              {project.description}
            </p>
          </Reveal>
        </section>

        {/* 03 — PROCESO */}
        <section className="bg-secondary/60 py-20 md:py-28">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <Reveal className="border-t border-border pt-10">
              <h2 className="display text-[10vw] leading-[0.9] md:text-[4vw]">Proceso</h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {project.process.map((step, i) => (
                <Reveal key={step.label} delay={i * 70}>
                  <Media
                    src={step.image}
                    alt={`${project.title} — ${step.label}`}
                    note={step.label}
                    className="aspect-[4/3] w-full"
                  />
                  <p className="mt-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} — {step.label.toUpperCase()}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — RESULTADO */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <Reveal>
            <Media
              src={project.final}
              alt={`${project.title} — resultado final`}
              note={`${project.title} — resultado final`}
              className="aspect-[16/9] w-full"
            />
          </Reveal>
        </section>

        {/* 05 — SIGUIENTE PROYECTO */}
        <section className="mx-auto max-w-[1600px] px-5 pb-24 md:px-10 md:pb-36">
          <Link
            to="/proyectos/$slug"
            params={{ slug: next.slug }}
            className="group block border-t border-border pt-10"
          >
            <p className="eyebrow">Siguiente proyecto</p>
            <span className="display mt-3 block text-[11vw] leading-[0.88] transition-colors duration-300 group-hover:text-accent md:text-[6vw]">
              {next.title}
            </span>
          </Link>
          <div className="mt-10">
            <Link
              to="/portfolio"
              hash="trabajos"
              className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              ← VOLVER A TRABAJOS
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
