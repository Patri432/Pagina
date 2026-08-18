# Patricia Martín — Portfolio + La Maga Pica

Portfolio web híbrido de **Patricia Martín**, con dos mundos visuales:

- **Patricia Martín** — portfolio profesional de 3D, modelado, texturizado, iluminación y animación.
- **La Maga Pica** — página independiente para la faceta de magia en directo.

El proyecto está preparado para subirse a un repositorio de GitHub y continuar desarrollándose localmente.

## Tecnologías

- React 19
- TypeScript
- Vite
- TanStack Router / TanStack Start
- Tailwind CSS 4
- Radix UI
- Lucide React
- ESLint + Prettier
- Bun

## Estructura

```text
PaginaWeb/
├── components/              # Componentes reutilizables
│   ├── ui/                  # Componentes UI basados en Radix
│   └── *.tsx                # Componentes principales del portfolio
├── data/
│   └── projects.ts          # Datos de proyectos del portfolio
├── hooks/
│   └── use-mobile.tsx       # Hook responsive
├── lib/
│   └── utils.ts             # Utilidades, incluyendo cn()
├── routes/
│   ├── index.tsx            # Página inicial con los dos mundos
│   ├── portfolio.tsx        # Portfolio de Patricia Martín
│   ├── magia.tsx            # Página de La Maga Pica
│   ├── proyectos.$slug.tsx  # Detalle de cada proyecto
│   └── __root.tsx           # Layout raíz
├── public/                  # Imágenes y recursos públicos, si se añaden
├── styles.css               # Sistema visual y paletas
├── router.tsx               # Configuración del router
├── server.ts                # Entrada del servidor TanStack Start
├── start.ts                 # Entrada de la aplicación
├── vite.config.ts           # Configuración de Vite
├── package.json             # Dependencias y scripts
├── bun.lock                 # Lockfile de Bun
└── .gitignore               # Archivos excluidos de Git
```

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Pantalla inicial para elegir entre los dos mundos |
| `/portfolio` | Portfolio profesional de Patricia Martín |
| `/magia` | Web de La Maga Pica |
| `/proyectos/:slug` | Página de detalle de un proyecto |

## Instalación

Se recomienda utilizar **Bun**, ya que el proyecto incluye `bun.lock`.

```bash
bun install
```

Si utilizas npm, también puedes instalar las dependencias con:

```bash
npm install
```

## Desarrollo

Con Bun:

```bash
bun run dev
```

Con npm:

```bash
npm run dev
```

Después abre la dirección local que muestre Vite, normalmente:

```text
http://localhost:5173
```

## Build de producción

```bash
bun run build
```

o:

```bash
npm run build
```

Para comprobar localmente el resultado generado:

```bash
bun run preview
```

## Lint y formato

```bash
bun run lint
bun run format
```

## Publicar en GitHub Pages

El proyecto ya incluye un workflow en `.github/workflows/deploy-pages.yml` para publicar automáticamente la web. Está configurado para generar una versión estática compatible con GitHub Pages. TanStack Start permite prerenderizar las rutas para servirlas como archivos estáticos.

### Pasos

1. Sube **el contenido de esta carpeta** al repositorio de GitHub (por ejemplo, `patricia-portfolio`).
2. En GitHub entra en **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. Haz `push` a la rama `main` o ejecuta manualmente el workflow **Deploy portfolio to GitHub Pages** desde **Actions**.
5. Espera a que termine el workflow. GitHub mostrará la URL publicada en el entorno `github-pages`.

El workflow calcula automáticamente la ruta `/nombre-del-repositorio/`, por lo que los CSS, JavaScript, imágenes y rutas internas funcionan también cuando el repositorio no se llama `usuario.github.io`.

Si ya tenías GitHub Pages configurado para publicar directamente desde `main` o desde `/docs`, cámbialo a **GitHub Actions**; de lo contrario GitHub puede seguir mostrando el 404 porque no está sirviendo `.output/public`.

## Añadir las imágenes reales

Los proyectos están preparados para utilizar imágenes desde:

```text
/public/images/projects/
```

La página de La Maga Pica utiliza:

```text
/public/images/magia/
```

Los nombres esperados están definidos directamente en `data/projects.ts` y `routes/magia.tsx`.

Si una imagen todavía no existe, el componente `Media` muestra automáticamente un placeholder con la ruta que falta. Esto permite subir primero todo el código a GitHub y añadir las imágenes posteriormente.

### Ejemplos

```text
public/
└── images/
    ├── magia/
    │   ├── retrato.jpg
    │   ├── hermana-del-medio.jpg
    │   └── pica.jpg
    └── projects/
        ├── varea-hero.jpg
        ├── varea-referencias.jpg
        ├── varea-modelado.jpg
        ├── ...
        └── props-variados-final.jpg
```

## Editar los proyectos

Los proyectos se gestionan desde:

```text
data/projects.ts
```

Cada proyecto contiene:

- título
- categoría
- año
- software
- descripción
- imagen principal
- proceso
- imagen final
- tamaño dentro de la retícula
- categoría destacada

Esto permite añadir o modificar proyectos sin tener que cambiar la estructura de las páginas.

## Paletas visuales

El archivo `styles.css` contiene las variables de diseño.

### Mundo Patricia Martín

Clase:

```text
.theme-3d
```

Paleta basada en tonos azulados, turquesa y verde agua.

### Mundo La Maga Pica

Clase:

```text
.theme-magia
```

Paleta basada en ciruela oscuro, crema, coral y turquesa.

## GitHub

Para subir el proyecto:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

Sustituye `TU-USUARIO/TU-REPOSITORIO` por el repositorio real.

## GitHub Pages

Este proyecto utiliza **TanStack Start**, por lo que no debe asumirse que `GitHub Pages` pueda ejecutar directamente el servidor de TanStack Start.

GitHub funciona perfectamente como repositorio del código. Para publicar la aplicación completa, utiliza un servicio compatible con aplicaciones React/TanStack Start y configura su build según el entorno de despliegue.

Si posteriormente se decide convertir el proyecto a una aplicación completamente estática para GitHub Pages, habrá que adaptar el sistema de rutas y el proceso de build antes de activar Pages.

## Archivos corregidos incluidos

Esta versión incluye dos archivos necesarios que no estaban en el ZIP original:

- `lib/utils.ts` — proporciona `cn()` para los componentes.
- `components/ui/tooltip.tsx` — componente Tooltip requerido por `sidebar.tsx`.

También se ha corregido:

- `gitignore` → `.gitignore`

## Nota sobre el contenido

El código contiene las rutas de las imágenes del portfolio, pero las imágenes originales no forman parte del ZIP recibido. Por eso la web utiliza placeholders cuando un recurso no está disponible.

## Licencia

El contenido, diseño, textos, proyectos e identidad visual pertenecen a Patricia Martín salvo las dependencias de terceros utilizadas por el proyecto.
