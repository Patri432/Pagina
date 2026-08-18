// Configuración preparada para GitHub Pages y desarrollo local.
// En GitHub Pages, Vite usa automáticamente /<nombre-del-repositorio>/ como base.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true" && !!repositoryName;
const base = isGitHubPagesBuild ? `/${repositoryName}/` : "/";
const routerBasepath = base === "/" ? "/" : base.slice(0, -1);

export default defineConfig({
  base,
  tanstackStart: {
    router: {
      basepath: routerBasepath,
    },
    // GitHub Pages solo sirve archivos estáticos, por lo que generamos
    // HTML durante el build en lugar de depender de un servidor SSR.
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
    },
    pages: [
      {
        path: "/",
        prerender: {
          enabled: true,
          outputPath: "/index.html",
        },
      },
    ],
    server: {
      entry: "server",
    },
  },
});
