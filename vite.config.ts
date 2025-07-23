import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   proxy: {
      
  //     "^/.*": {
  //       target: "http://52.74.26.144:8008",
  //       changeOrigin: true,
  //       rewrite: (path) => path,
  //     },
  //   },
  // },
});
