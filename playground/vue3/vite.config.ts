import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'
import Component from 'unplugin-vue-components/vite'
import Resolver from 'radix-vue/resolver'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Component({
      resolvers: [Resolver()],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve(projectRootDir, '../../packages/radix-vue/src'),
        },
      ],
    }),
  ],
})
