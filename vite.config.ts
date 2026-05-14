import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  ssr: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 1200,
    },
  },
});

