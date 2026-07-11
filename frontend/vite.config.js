import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep route styles in one versioned asset. This prevents first-navigation
    // failures when a newly deployed SPA still has an older document in cache.
    cssCodeSplit: false,
    // Do not force framework/vendor chunks. Several dependencies import React
    // while React Router imports utilities from those same dependency groups;
    // manual chunk boundaries can therefore create a browser initialization
    // cycle that only appears on the first client-side navigation.
  },
});
