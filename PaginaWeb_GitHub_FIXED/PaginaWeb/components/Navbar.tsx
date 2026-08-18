import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const links = [
  { label: "INICIO", hash: "inicio" },
  { label: "SOBRE MÍ", hash: "sobre-mi" },
  { label: "SERVICIOS", hash: "servicios" },
  { label: "HABILIDADES", hash: "habilidades" },
  { label: "EXPERIENCIA", hash: "experiencia" },
  { label: "TRABAJOS", hash: "trabajos" },
  { label: "CONTACTO", hash: "contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 py-3 backdrop-blur-md"
          : "border-b border-transparent py-6",
      )}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-10"
      >
        <Link
          to="/portfolio"
          className="font-display text-sm tracking-tight md:text-base"
          onClick={() => setOpen(false)}
        >
          Patricia Martín
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.hash}>
              <Link
                to="/portfolio"
                hash={l.hash}
                className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-2 lg:hidden"
        >
          <span
            className={cn(
              "block h-px w-6 bg-foreground transition-transform duration-300",
              open && "translate-y-[6px] rotate-45",
            )}
          />
          <span
            className={cn("block h-px w-6 bg-foreground transition-opacity", open && "opacity-0")}
          />
          <span
            className={cn(
              "block h-px w-6 bg-foreground transition-transform duration-300",
              open && "-translate-y-[6px] -rotate-45",
            )}
          />
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col justify-center bg-background px-6 transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ul className="space-y-2">
          {links.map((l, i) => (
            <li key={l.hash}>
              <Link
                to="/portfolio"
                hash={l.hash}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${open ? i * 40 : 0}ms` }}
                className={cn(
                  "display block text-[10vw] leading-[1.05] transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
