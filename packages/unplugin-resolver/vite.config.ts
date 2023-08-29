import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      exclude: ['../radix-vue/**'],
      beforeWriteFile(filePath, content) {
        return {
          filePath: filePath.replace('unplugin-resolver/', ''),
          content,
        }
      },
    }),
  ],
  build: {
    lib: {
      name: 'radix-vue',
      entry: resolve(__dirname, './index.ts'),
      fileName: 'index',
    },
    outDir: '../radix-vue/dist/resolver',
  },
})
