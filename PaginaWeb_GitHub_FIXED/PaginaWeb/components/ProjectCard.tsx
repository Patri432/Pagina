import { Link } from "@tanstack/react-router";
import { Media } from "./Media";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

const sizeClass: Record<Project["size"], string> = {
  wide: "md:col-span-7 aspect-[16/10]",
  tall: "md:col-span-5 aspect-[3/4]",
  regular: "md:col-span-6 aspect-[4/3]",
};

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article
      className={cn("group col-span-12", sizeClass[project.size].split(" ")[0])}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <Link
        to="/proyectos/$slug"
        params={{ slug: project.slug }}
        className="block"
        aria-label={`Ver proyecto ${project.title}`}
      >
        <div className={cn("overflow-hidden", sizeClass[project.size].split(" ")[1])}>
          <Media
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            note={project.title}
            className="h-full w-full"
            imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
          />
        </div>
        <div className="mt-4 flex items-start justify-between gap-6 border-t border-border pt-3">
          <div>
            <h3 className="font-display text-lg uppercase leading-tight tracking-tight transition-colors group-hover:text-accent md:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 max-w-prose text-sm text-muted-foreground">{project.description}</p>
            <p className="mt-2 font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
              {project.software.join(" · ")}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-mono text-[10px] tracking-[0.18em] text-accent">
              {project.category}
            </p>
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
              {project.year}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
