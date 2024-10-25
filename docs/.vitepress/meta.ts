// noinspection ES6PreferShortImport: IntelliJ IDE hint to avoid warning to use `~/contributors`, will fail on build if changed

/* Texts */
export const radixVueName = 'Radix Vue'
export const radixVueShortName = 'Radix Vue'
export const radixVueDescription
  = 'Unstyled, accessible components for building high‑quality design systems and web apps in Vue'

/* CDN fonts and styles */
export const googleapis = 'https://fonts.googleapis.com'
export const gstatic = 'https://fonts.gstatic.com'
export const font = `${googleapis}/css2?family=Readex+Pro:wght@200;400;600&display=swap`

/* vitepress head */
export const ogUrl = 'https://radix-vue.com/'
export const ogImage = `${ogUrl}og.jpg`

/* GitHub and social links */
export const github = 'https://github.com/unovue/radix-vue'
export const releases = 'https://github.com/unovue/radix-vue/releases'
export const contributing = 'https://github.com/unovue/radix-vue/blob/main/CONTRIBUTING.md'
export const discord = 'https://chat.radix-vue.com'
// export const mastodon = "https://elk.zone/m.webtoo.ls/@vitest";
// export const twitter = "https://twitter.com/vitest_dev";

/* Avatar/Image/Sponsors servers */
export const preconnectLinks = [googleapis, gstatic]
export const preconnectHomeLinks = [googleapis, gstatic]

/* PWA runtime caching urlPattern regular expressions */
export const pwaFontsRegex = new RegExp(`^${googleapis}/.*`, 'i')
export const pwaFontStylesRegex = new RegExp(`^${gstatic}/.*`, 'i')
// eslint-disable-next-line prefer-regex-literals
export const githubusercontentRegex = new RegExp(
  '^https://((i.ibb.co)|((raw|user-images).githubusercontent.com))/.*',
  'i',
)
