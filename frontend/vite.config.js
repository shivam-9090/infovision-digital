import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep route styles in one versioned asset. This prevents first-navigation
    // failures when a newly deployed SPA still has an older document in cache.
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/@react-three")) {
            return "react-three";
          }

          if (id.includes("node_modules/three")) {
            return "three-core";
          }

          if (/node_modules\/(react|react-dom|react-router|react-router-dom)\//.test(id)) {
            return "react-vendor";
          }

          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
