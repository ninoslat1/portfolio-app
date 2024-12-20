import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.GITHUB_USERNAME': JSON.stringify(env.GITHUB_USERNAME),
      'process.env.GITHUB_TOKEN': JSON.stringify(env.GITHUB_TOKEN)
    },
    plugins: [
      remix({
        routes(defineRoutes) {
          return defineRoutes((route) => {
            route("/", "routes/home/index.tsx", { index: true })
            route("/profile", "routes/home/profile.tsx")
            route("/about", "routes/home/about.tsx")
            route("/projects", "routes/home/projects.tsx")
            route("/home", "routes/home/home.tsx");
          })
        }
        ,
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_singleFetch: true,
          v3_lazyRouteDiscovery: true,
        },
      }),
      tsconfigPaths(),
    ],
  }
})
