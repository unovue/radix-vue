import { defineConfig } from 'vitepress'
import {
  legacyLink,
  legacyVersion,
  radixVueDescription,
  releases,
} from '../meta'
import { version } from '../../package.json'
import { BadgeHTML } from '.'

export default defineConfig({
  lang: 'en',
  description: radixVueDescription,
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/overview/getting-started.html' },
      { text: 'Showcase', link: '/showcase' },
      {
        text: `v${version}`,
        items: [
          { text: 'Release Notes ', link: releases },
          { text: legacyVersion, link: legacyLink },
        ],
      },
    ],
    outline: {
      level: [2, 3],
    },
    logo: '/logo.svg',

    sidebar: [
      {
        text: 'Overview',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/overview/introduction' },
          { text: 'Getting Started', link: '/overview/getting-started' },
          { text: 'Installation', link: '/overview/installation' },
          { text: 'Accessibility', link: '/overview/accessibility' },
          { text: 'Releases', link: '/overview/releases' },
        ],
      },
      {
        text: 'Guides',
        collapsed: false,
        items: [
          { text: 'Styling', link: '/guides/styling' },
          { text: 'Animation/Transition', link: '/guides/animation' },
          { text: 'Composition', link: '/guides/composition' },
          { text: 'Server side rendering', link: '/guides/server-side-rendering' },
          { text: 'Namespaced', link: '/guides/namespaced-components' },
          { text: 'Internationalization (RTL)', link: '/guides/i18n' },
          { text: 'Dates', link: '/guides/dates' },
        ],
      },
      {
        text: 'Components',
        collapsed: false,
        items: [
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Alert Dialog', link: '/components/alert-dialog' },
          { text: 'Aspect Ratio', link: '/components/aspect-ratio' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: `Calendar ${BadgeHTML('Alpha', true)}`, link: '/components/calendar' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Collapsible', link: '/components/collapsible' },
          { text: 'Combobox', link: '/components/combobox' },
          { text: 'Context Menu', link: '/components/context-menu' },
          { text: `Date Field ${BadgeHTML('Alpha', true)}`, link: '/components/date-field' },
          { text: `Date Picker ${BadgeHTML('Alpha', true)}`, link: '/components/date-picker' },
          { text: `Date Range Field ${BadgeHTML('Alpha', true)}`, link: '/components/date-range-field' },
          { text: `Date Range Picker ${BadgeHTML('Alpha', true)}`, link: '/components/date-range-picker' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Dropdown Menu', link: '/components/dropdown-menu' },
          { text: `Editable ${BadgeHTML('Alpha', true)}`, link: '/components/editable' },
          { text: 'Hover Card', link: '/components/hover-card' },
          { text: 'Label', link: '/components/label' },
          { text: `Listbox ${BadgeHTML('Alpha', true)}`, link: '/components/listbox' },
          { text: 'Menubar', link: '/components/menubar' },
          { text: 'Navigation Menu', link: '/components/navigation-menu' },
          { text: `Number Field ${BadgeHTML('Alpha', true)}`, link: '/components/number-field' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Pin Input', link: '/components/pin-input' },
          { text: 'Popover', link: '/components/popover' },
          { text: 'Progress', link: '/components/progress' },
          { text: 'Radio Group', link: '/components/radio-group' },
          { text: `Range Calendar ${BadgeHTML('Alpha', true)}`, link: '/components/range-calendar' },
          { text: 'Scroll Area', link: '/components/scroll-area' },
          { text: 'Select', link: '/components/select' },
          { text: 'Separator', link: '/components/separator' },
          { text: 'Slider', link: '/components/slider' },
          { text: 'Splitter', link: '/components/splitter' },
          { text: `Stepper ${BadgeHTML('Alpha')}`, link: '/components/stepper' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'Tags Input', link: '/components/tags-input' },
          { text: 'Toast', link: '/components/toast' },
          { text: 'Toggle', link: '/components/toggle' },
          { text: 'Toggle Group', link: '/components/toggle-group' },
          { text: 'Toolbar', link: '/components/toolbar' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: `Tree ${BadgeHTML('Alpha')}`, link: '/components/tree' },
        ],
      },
      {
        text: 'Utilities',
        collapsed: false,
        items: [
          { text: 'Config Provider', link: '/utilities/config-provider' },
          { text: 'Visually Hidden', link: '/utilities/visually-hidden' },
          { text: 'Primitive', link: '/utilities/primitive' },
          { text: 'Slot', link: '/utilities/slot' },
          { text: 'useId', link: '/utilities/use-id' },
          { text: 'useDateFormatter', link: '/utilities/use-date-formatter' },
          { text: 'useEmitAsProps', link: '/utilities/use-emit-as-props' },
          { text: 'useForwardExpose', link: '/utilities/use-forward-expose' },
          { text: 'useForwardProps', link: '/utilities/use-forward-props' },
          { text: 'useForwardPropsEmits', link: '/utilities/use-forward-props-emits' },
        ],
      },
    ],

    editLink: {
      pattern: 'https://github.com/radix-vue/radix-vue/edit/main/docs/content/en/:path',
    },
  },
})
