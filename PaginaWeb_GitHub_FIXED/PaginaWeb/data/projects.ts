export type Category =
  | "DISEÑO 3D"
  | "PROPS"
  | "DOCUMENTAL"
  | "MODELADO"
  | "TEXTURIZADO"
  | "ILUMINACIÓN"
  | "OTROS";

export const categories: Category[] = [
  "DISEÑO 3D",
  "PROPS",
  "DOCUMENTAL",
  "MODELADO",
  "TEXTURIZADO",
  "ILUMINACIÓN",
  "OTROS",
];

export type ProcessStep = {
  label: string;
  image: string;
};

export type Project = {
  slug: string;
  title: string;
  category: Category;
  year: string;
  software: string[];
  description: string;
  image: string;
  /** editorial grid weight */
  size: "wide" | "tall" | "regular";
  featured?: "diseno" | "render-estudio" | "documental" | "props";
  process: ProcessStep[];
  final: string;
};

/**
 * Imágenes: rutas preparadas en /public/images/projects/.
 * Mientras no existan los archivos reales del portfolio, la web muestra un
 * placeholder identificado con la ruta exacta que hay que sustituir.
 */
export const projects: Project[] = [
  {
    slug: "ruinas-romanas-varea",
    title: "Ruinas romanas de Varea",
    category: "DOCUMENTAL",
    year: "2025",
    software: ["Autodesk Maya", "Blender", "Lumion"],
    description:
      "Recreación en 3D de las ruinas romanas que yacen bajo el colegio de Varea para un proyecto de vídeo documental.",
    image: "/images/projects/varea-hero.jpg",
    size: "wide",
    featured: "documental",
    process: [
      { label: "Referencias", image: "/images/projects/varea-referencias.jpg" },
      { label: "Modelado", image: "/images/projects/varea-modelado.jpg" },
      { label: "Wireframe", image: "/images/projects/varea-wireframe.jpg" },
      { label: "Texturas", image: "/images/projects/varea-texturas.jpg" },
      { label: "Iluminación", image: "/images/projects/varea-iluminacion.jpg" },
    ],
    final: "/images/projects/varea-final.jpg",
  },
  {
    slug: "props-documental",
    title: "Props integrados en el documental",
    category: "PROPS",
    year: "2025",
    software: ["Autodesk Maya", "Blender"],
    description:
      "Conjunto de props modelados y texturizados para integrarse en las escenas del proyecto documental.",
    image: "/images/projects/props-documental-hero.jpg",
    size: "tall",
    featured: "documental",
    process: [
      { label: "Referencias", image: "/images/projects/props-documental-referencias.jpg" },
      { label: "Modelado", image: "/images/projects/props-documental-modelado.jpg" },
      { label: "Texturas", image: "/images/projects/props-documental-texturas.jpg" },
    ],
    final: "/images/projects/props-documental-final.jpg",
  },
  {
    slug: "butacas-ascender",
    title: "Butacas ASCENDER",
    category: "MODELADO",
    year: "2026",
    software: ["Autodesk Maya", "KeyShot"],
    description:
      "Modelado 3D de butacas para ASCENDER, con topología optimizada y fidelidad al producto real.",
    image: "/images/projects/ascender-hero.jpg",
    size: "regular",
    featured: "diseno",
    process: [
      { label: "Referencias", image: "/images/projects/ascender-referencias.jpg" },
      { label: "Modelado", image: "/images/projects/ascender-modelado.jpg" },
      { label: "Wireframe", image: "/images/projects/ascender-wireframe.jpg" },
      { label: "Iluminación", image: "/images/projects/ascender-iluminacion.jpg" },
    ],
    final: "/images/projects/ascender-final.jpg",
  },
  {
    slug: "render-estudio-visualizacion",
    title: "Visualización arquitectónica — Render Estudio 3D",
    category: "ILUMINACIÓN",
    year: "2023 — 2025",
    software: ["Lumion", "AutoCAD", "Autodesk Maya"],
    description:
      "Proyectos de visualización realizados durante las prácticas como diseñadora 3D en Render Estudio 3D.",
    image: "/images/projects/render-estudio-hero.jpg",
    size: "wide",
    featured: "render-estudio",
    process: [
      { label: "Referencias", image: "/images/projects/render-estudio-referencias.jpg" },
      { label: "Modelado", image: "/images/projects/render-estudio-modelado.jpg" },
      { label: "Iluminación", image: "/images/projects/render-estudio-iluminacion.jpg" },
    ],
    final: "/images/projects/render-estudio-final.jpg",
  },
  {
    slug: "render-estudio-mobiliario",
    title: "Mobiliario y producto — Render Estudio 3D",
    category: "DISEÑO 3D",
    year: "2023 — 2025",
    software: ["Inventor", "KeyShot"],
    description:
      "Modelado y presentación de piezas de mobiliario y producto para clientes del estudio.",
    image: "/images/projects/render-mobiliario-hero.jpg",
    size: "regular",
    featured: "render-estudio",
    process: [
      { label: "Modelado", image: "/images/projects/render-mobiliario-modelado.jpg" },
      { label: "Texturas", image: "/images/projects/render-mobiliario-texturas.jpg" },
    ],
    final: "/images/projects/render-mobiliario-final.jpg",
  },
  {
    slug: "la-gota-de-leche",
    title: "La Gota de Leche",
    category: "OTROS",
    year: "2025",
    software: ["Autodesk Maya", "Blender"],
    description:
      "Cortometraje de animación 3D premiado. Trabajo de modelado, texturizado e iluminación de escena.",
    image: "/images/projects/gota-de-leche-hero.jpg",
    size: "tall",
    featured: "diseno",
    process: [
      { label: "Referencias", image: "/images/projects/gota-de-leche-referencias.jpg" },
      { label: "Modelado", image: "/images/projects/gota-de-leche-modelado.jpg" },
      { label: "Iluminación", image: "/images/projects/gota-de-leche-iluminacion.jpg" },
    ],
    final: "/images/projects/gota-de-leche-final.jpg",
  },
  {
    slug: "props-variados",
    title: "Props variados",
    category: "PROPS",
    year: "2024 — 2026",
    software: ["Blender", "Autodesk Maya"],
    description:
      "Galería de props y modelado de objetos: estudio de forma, materiales y detalle.",
    image: "/images/projects/props-variados-hero.jpg",
    size: "regular",
    featured: "props",
    process: [
      { label: "Modelado", image: "/images/projects/props-variados-modelado.jpg" },
      { label: "Wireframe", image: "/images/projects/props-variados-wireframe.jpg" },
      { label: "Texturas", image: "/images/projects/props-variados-texturas.jpg" },
    ],
    final: "/images/projects/props-variados-final.jpg",
  },
  {
    slug: "estudio-materiales-pbr",
    title: "Estudio de materiales PBR",
    category: "TEXTURIZADO",
    year: "2025",
    software: ["Blender", "KeyShot"],
    description:
      "Serie de estudios de materiales PBR: metal, madera, tejido y cerámica en condiciones de luz controlada.",
    image: "/images/projects/pbr-hero.jpg",
    size: "regular",
    featured: "props",
    process: [
      { label: "Texturas", image: "/images/projects/pbr-texturas.jpg" },
      { label: "Iluminación", image: "/images/projects/pbr-iluminacion.jpg" },
    ],
    final: "/images/projects/pbr-final.jpg",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string): Project => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length] ?? projects[0]!;
};
