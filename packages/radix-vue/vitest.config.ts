import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: "jsdom",
    exclude: ["**/node_modules/**"],
    include: ["./**/*.test.ts"],
  },
});
