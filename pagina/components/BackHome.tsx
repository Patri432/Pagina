import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function BackHome({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Volver a la página principal"
      className={`inline-flex items-center gap-2 border border-border px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:border-foreground hover:text-foreground md:text-[11px] ${className}`}
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      INICIO
    </Link>
  );
}
