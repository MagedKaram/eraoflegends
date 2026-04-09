import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Default: serve/build SPA at domain root.
  // If you host under a sub-path (e.g. Laravel at /spa/), set VITE_BASE_URL=/spa/
  const base = env.VITE_BASE_URL || "/";

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client"),
        "@shared": path.resolve(__dirname, "./shared"),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: "dist/spa",
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
        },
      },
    },
  };
});
