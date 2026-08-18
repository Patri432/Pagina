import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** short label shown while the real render is not in place */
  note?: string;
};

/**
 * Imagen con placeholder identificado: si el render definitivo aún no existe
 * en /public/images/..., se muestra la ruta exacta a sustituir.
 */
export function Media({ src, alt, className, imgClassName, note }: Props) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // La imagen puede fallar antes de la hidratación (HTML de servidor):
  // comprobamos el estado real al montar.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {!failed ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col justify-between gap-6 border border-dashed border-border bg-secondary p-5"
        >
          <span className="eyebrow">Placeholder</span>
          <div>
            <p className="font-display text-sm uppercase tracking-tight text-foreground/70">
              {note ?? alt}
            </p>
            <p className="mt-2 break-all font-mono text-[10px] leading-relaxed text-muted-foreground">
              {src}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
