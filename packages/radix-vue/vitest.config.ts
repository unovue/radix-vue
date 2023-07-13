import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const r = (p: string) => resolve(__dirname, p);

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      "@": r("./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    exclude: ["**/node_modules/**"],
    include: ["./**/*.test.ts"],
  },
});
