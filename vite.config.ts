import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const mode = process.env?.BUILD_TYPE === "local" ? "" : process.env?.BUILD_TYPE;

export default defineConfig(() => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return {
    define: {
      "process.env": process.env,
    },
    resolve: {
      alias: {
        "@styles": path.resolve(__dirname, "src", "styles"),
        "@images": path.resolve(__dirname, "src", "assets", "images"),
      },
    },
    build: {
      rollupOptions: {
        input: {
          index: "start-page.html",
        },
      },
    },
    plugins: [react(), splitVendorChunkPlugin()],
  };
});
