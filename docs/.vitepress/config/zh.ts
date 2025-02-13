import { defineConfig } from 'vitepress'
import {
  legacyLink,
  legacyVersion,
  releases,
} from '../meta'
import { version } from '../../package.json'
import { BadgeHTML } from '.'

export default defineConfig({
  lang: 'zh',
  description: '使用 Vue 构建高质量设计系统和 Web 应用程序的无样式、可访问的组件',
  themeConfig: {
    nav: [
      { text: '文档', link: '/zh/overview/getting-started.html' },
      { text: '样例', link: '/zh/showcase' },
      {
        text: `v${version}`,
        items: [
          { text: '发布日志 ', link: releases },
          { text: legacyVersion, link: legacyLink },
        ],
      },
    ],
    logo: '/logo.svg',

    sidebar: [
      {
        text: '总览',
        collapsed: false,
        base: '/zh/overview/',
        items: [
          { text: '介绍', link: '/introduction' },
          { text: '开始', link: '/getting-started' },
          { text: '安装', link: '/installation' },
          { text: '可访问性', link: '/accessibility' },
          { text: '发布物', link: '/releases' },
        ],
      },
      {
        text: '指南',
        collapsed: false,
        base: '/zh/guides/',
        items: [
          { text: '样式', link: '/styling' },
          { text: '动画/渐变', link: '/animation' },
          { text: '组合式', link: '/composition' },
          { text: '服务端渲染', link: '/server-side-rendering' },
          { text: '命名空间', link: '/namespaced-components' },
          { text: '国际化 (RTL)', link: '/i18n' },
          { text: '日期处理', link: '/dates' },
        ],
      },
      {
        text: '组件',
        collapsed: false,
        base: '/zh/components/',
        items: [
          { text: 'Accordion 手风琴面板', link: '/accordion' },
          { text: 'AlertDialog 警报对话框', link: '/alert-dialog' },
          { text: 'AspectRatio 纵横比容器', link: '/aspect-ratio' },
          { text: 'Avatar 头像', link: '/avatar' },
          { text: `Calendar 日历 ${BadgeHTML('Alpha', true)}`, link: '/calendar' },
          { text: 'Checkbox 复选框', link: '/checkbox' },
          { text: 'Collapsible 折叠面板', link: '/collapsible' },
          { text: 'Combobox 组合框', link: '/combobox' },
          { text: 'ContextMenu 上下文菜单', link: '/context-menu' },
          { text: `DateField 日期字段 ${BadgeHTML('Alpha', true)}`, link: '/date-field' },
          { text: `DatePicker 日期选择器 ${BadgeHTML('Alpha', true)}`, link: '/date-picker' },
          { text: `DateRangeField 日期范围字段 ${BadgeHTML('Alpha', true)}`, link: '/date-range-field' },
          { text: `DateRangePicker 日期范围选择器 ${BadgeHTML('Alpha', true)}`, link: '/date-range-picker' },
          { text: 'Dialog 对话框', link: '/dialog' },
          { text: 'DropdownMenu 下拉菜单', link: '/dropdown-menu' },
          { text: `Editable 可编辑 ${BadgeHTML('Alpha', true)}`, link: '/editable' },
          { text: 'HoverCard 悬浮卡片', link: '/hover-card' },
          { text: 'Label 标签', link: '/label' },
          { text: `Listbox 列表框 ${BadgeHTML('Alpha', true)}`, link: '/listbox' },
          { text: 'Menubar 菜单栏', link: '/menubar' },
          { text: 'NavigationMenu 导航菜单', link: '/navigation-menu' },
          { text: `NumberField 数字字段 ${BadgeHTML('Alpha', true)}`, link: '/number-field' },
          { text: 'Pagination 分页', link: '/pagination' },
          { text: 'PinInput Pin 输入', link: '/pin-input' },
          { text: 'Popover 弹出框', link: '/popover' },
          { text: 'Progress 进度', link: '/progress' },
          { text: 'RadioGroup单选组', link: '/radio-group' },
          { text: `RangeCalendar 范围日历 ${BadgeHTML('Alpha', true)}`, link: '/range-calendar' },
          { text: 'ScrollArea 滚动区域', link: '/scroll-area' },
          { text: 'Selector 选择器', link: '/select' },
          { text: 'Separator 分割线', link: '/separator' },
          { text: 'Slider 滑块', link: '/slider' },
          { text: 'Splitter 分隔条', link: '/splitter' },
          { text: `Stepper 步骤 ${BadgeHTML('Alpha')}`, link: '/stepper' },
          { text: 'Switch 开关', link: '/switch' },
          { text: 'Tabs 标签页', link: '/tabs' },
          { text: 'TagsInput 标签输入', link: '/tags-input' },
          { text: 'Toast 通知', link: '/toast' },
          { text: 'Toggle 切换按钮', link: '/toggle' },
          { text: 'ToggleGroup 切换按钮组', link: '/toggle-group' },
          { text: 'Toolbar 工具栏', link: '/toolbar' },
          { text: 'Tooltip 弹出提示', link: '/tooltip' },
          { text: `Tree 树 ${BadgeHTML('Alpha')}`, link: '/tree' },
        ],
      },
      {
        text: '实用工具',
        collapsed: false,
        base: '/zh/utilities/',
        items: [
          { text: 'Config Provider', link: '/config-provider' },
          { text: 'Visually Hidden', link: '/visually-hidden' },
          { text: 'Primitive', link: '/primitive' },
          { text: 'Slot 插槽', link: '/slot' },
          { text: 'useId', link: '/use-id' },
          { text: 'useDateFormatter', link: '/use-date-formatter' },
          { text: 'useEmitAsProps', link: '/use-emit-as-props' },
          { text: 'useForwardExpose', link: '/use-forward-expose' },
          { text: 'useForwardProps', link: '/use-forward-props' },
          { text: 'useForwardPropsEmits', link: '/use-forward-props-emits' },
        ],
      },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonAriaLabel: '搜索',
            buttonText: '搜索',
          },
          modal: {
            displayDetails: '显示细节列表',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '跳转',
              navigateUpKeyAriaLabel: '上',
              navigateDownKeyAriaLabel: '下',
              closeText: '关闭',
            },
          },
        },
      },
    },
    editLink: {
      pattern: 'https://github.com/radix-vue/radix-vue/edit/main/docs/content/zh/:path',
      text: '在 GitHub 上编辑此页面',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      level: [2, 3],
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
