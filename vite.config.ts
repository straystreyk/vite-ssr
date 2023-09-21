import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "start-page.html",
      },
    },
  },
  plugins: [react(), splitVendorChunkPlugin()],
});
