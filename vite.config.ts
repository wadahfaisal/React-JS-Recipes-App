import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-JS-Recipes-App/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // target: "https://www.themealdb.com/api/json/v1/1",
        target: " https://api.spoonacular.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
