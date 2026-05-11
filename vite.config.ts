import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "src/server.ts", // Match your server entry file path
      preset: "netlify",       // <--- ADD THIS LINE
    },
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;
            const pathParts = id.toString().split("node_modules/")[1].split("/");
            if (pathParts[0].startsWith("@")) {
              return `${pathParts[0]}/${pathParts[1]}`;
            }
            return pathParts[0];
          },
        },
      },
    },
  },
});