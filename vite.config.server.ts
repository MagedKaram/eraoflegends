import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    ssr: true,
    outDir: "dist/server",
    lib: {
      entry: path.resolve(__dirname, "server/index.ts"),
      formats: ["es"],
      fileName: "node-build",
    },
    rollupOptions: {
      external: ["express", "cors"],
    },
  },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
