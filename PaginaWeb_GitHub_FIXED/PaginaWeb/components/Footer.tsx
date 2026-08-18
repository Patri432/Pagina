import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-display text-xl uppercase tracking-tight">Patricia Martín</p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
            3D ARTIST / ANIMATION
          </p>
        </div>

        <nav aria-label="Pie de página" className="flex gap-5">
          <Link to="/portfolio" hash="inicio" className="text-sm transition-colors hover:text-accent">
            Inicio
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link to="/portfolio" hash="trabajos" className="text-sm transition-colors hover:text-accent">
            Trabajos
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link to="/portfolio" hash="contacto" className="text-sm transition-colors hover:text-accent">
            Contacto
          </Link>
        </nav>

        <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
          © 2026 Patricia Martín
        </p>
      </div>
    </footer>
  );
}
