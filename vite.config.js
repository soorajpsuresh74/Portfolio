import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || "/Portfolio/",
  // Keep the dev server out of the Strapi app in ./cms
  optimizeDeps: { entries: ["index.html"] },
  server: { watch: { ignored: ["**/cms/**"] } }
});