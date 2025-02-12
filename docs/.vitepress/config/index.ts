import { defineConfig, postcssIsolateStyles } from 'vitepress'
import autoprefixer from 'autoprefixer'
import anchor from 'markdown-it-anchor'
import tailwind from 'tailwindcss'
import {
  discord,
  font,
  github,
  ogImage,
  ogUrl,
  radixVueDescription,
  radixVueName,
} from '../meta'
import { teamMembers } from '../contributors'
import ComponentPreviewPlugin from '../plugins/ComponentPreview'
import InstallationTabsPlugin from '../plugins/InstallationTabs'
import en from './en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: radixVueName,
  description: radixVueDescription,
  head: [
    ['meta', { name: 'theme-color', content: '#00C38A' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: `${teamMembers.map(c => c.name).join(', ')} and ${radixVueName} contributors` }],
    ['meta', { name: 'keywords', content: 'vue, nuxt, component-library, radix, radix-vue, typescript' }],
    ['meta', { property: 'og:title', content: radixVueName }],
    ['meta', { property: 'og:description', content: radixVueDescription }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: radixVueName }],
    ['meta', { name: 'twitter:description', content: radixVueDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'preload', as: 'style', onload: 'this.onload=null;this.rel=\'stylesheet\'', href: font }],
    ['noscript', {}, `<link rel="stylesheet" crossorigin="anonymous" href="${font}" />`],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  lastUpdated: true,
  sitemap: { hostname: ogUrl },
  themeConfig: {
    outline: {
      level: [2, 3],
    },
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'discord', link: discord },
      { icon: 'github', link: github },
    ],
  },
  srcDir: 'content',
  appearance: 'dark',
  markdown: {
    theme: 'github-dark',
    anchor: {
      callback(token) {
        // set tw `group` modifier to heading element
        token.attrSet('class', 'group relative border-none lg:-ml-2 lg:pl-2')
      },
      permalink: anchor.permalink.linkInsideHeader({
        symbol: `<span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">&ZeroWidthSpace;<span class="flex h-6 w-6 items-center justify-center rounded-md text-green-400 shadow-sm ring-1 ring-green-900/5 hover:text-green-700 hover:shadow hover:ring-green-900/10 dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:ring-0 dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span>`,
      }),
    },

    preConfig(md) {
      md.use(ComponentPreviewPlugin)
      md.use(InstallationTabsPlugin)
    },
  },
  transformPageData(pageData) {
    if (pageData.frontmatter.sidebar != null)
      return
    // hide sidebar on showcase page
    pageData.frontmatter.sidebar = pageData.frontmatter.layout !== 'showcase'
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwind(),
          autoprefixer(),
          postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] }),
        ],
      },
    },
  },
  rewrites: {
    'en/:rest*': ':rest*',
  },
  locales: {
    root: { label: 'English', ...en },
    // zh: { label: '简体中文', ...zh },
  },
})
