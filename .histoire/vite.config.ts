import { HstVue } from "@histoire/plugin-vue";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "@rollup/plugin-alias";

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    alias({
      entries: [
        {
          find: "@",
          replacement: resolve(projectRootDir, "../packages/radix-vue/src"),
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@iconify/vue": "./node_modules/@iconify/vue/dist/iconify.mjs",
    },
  },
  histoire: {
    plugins: [{ name: "builtin:tailwind-tokens" }, HstVue()],
    setupFile: "./setup.ts",
    storyMatch: [resolve(projectRootDir, "../packages/radix-vue/src/**/*.story.vue")],
    outDir: "./dist",
  },

  server: {
    fs: {
      // Allow serving files from two level up to the project root
      allow: [".."],
    },
  },
});
