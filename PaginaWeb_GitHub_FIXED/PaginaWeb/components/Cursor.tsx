import { useEffect, useRef, useState } from "react";

/** Cursor personalizado muy sutil (solo en dispositivos con puntero fino). */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest("a,button,[data-cursor]");
      dot.current?.setAttribute("data-active", String(interactive));
    };

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden
      className="group pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <div className="-ml-2 -mt-2 size-4 rounded-full border border-foreground/40 transition-all duration-300 group-data-[active=true]:scale-150 group-data-[active=true]:bg-accent/20" />
    </div>
  );
}
