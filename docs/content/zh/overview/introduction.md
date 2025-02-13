---

title: 导言
description: 一个开源 UI 组件库，使用 Vue.js 构建高质量、可访问的设计系统和 Web 应用程序。
---

# 导言

<Description>
一个开源 UI 组件库，使用 <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a> 构建高质量、可访问的设计系统和 Web 应用程序。
</Description>

<Callout type="tip">

Radix Vue 是 [Radix UI](https://www.radix-ui.com/) 的非官方社区主导的 Vue 实现，因此我们在构建原语时共享相同的原则和愿景。

</Callout>

Radix Primitics 是一个低层级 UI 组件库，专注于可访问性、自定义和开发人员体验。您可以将这些组件用作设计系统的基础层，也可以逐步采用它们。

## 愿景

我们大多数人对常见的UI模式有相似的定义，如手风琴面板、复选框、组合框、对话框、下拉列表、选择、滑块和工具提示。这些 UI 模式[由 WAI-ARIA 记录](https://www.w3.org/TR/wai-aria-practices/#aria_ex)并且通常为社区所理解。

但是，Web 平台提供给我们的实现是不够的。要么不存在，缺乏功能，要么无法充分定制。

因此，开发人员被迫构建自定义组件（一项极其困难的任务）。结果，Web 上的大多数组件都可访问性欠佳、性能不佳并且缺乏重要的特性。

我们的目标是创建一个资金充足的开源组件库，社区可以用来构建无障碍设计系统。

## 关键特性

### 可访问性

组件尽可能遵循[WAI-ARIA设计模式](https://www.w3.org/TR/wai-aria-practices-1.2)。我们处理了许多与可访问性相关的困难实现细节，包括 aria 和 role 属性、焦点管理和键盘导航。在我们的[可访问性](./accessibility)概述中了解更多信息。

### 无风格的

组件提供零样式，让您可以完全控制样式。组件可以使用任何样式解决方案（原生 CSS、CSS预处理器、CSS-in-JS库）进行样式设置。在我们的[样式](../guides/styling)指南中了解更多信息。

### 开源的

Radix 原语（Radix Primitives）旨在根据您的需求进行定制。我们的开放式组件架构为您提供对每个组件部分的精细访问，因此您可以包装它们并添加自己的事件侦听器、props 或 refs。

### 不受控的

在适用的情况下，组件默认不受控，但也可以受控。所有的行为布线都在内部处理，因此您可以尽可能顺利地启动和运行，而无需创建任何本地状态。

### 开发者体验

我们的主要目标之一是提供尽可能好的开发人员体验。Radix 原语提供了一个全类型的 API。所有组件共享一个相似的应用编程接口，创造了一致和可预测的体验。我们还实现了一个 `asChild` prop（这对Vue来说不是问题），让用户完全控制渲染的元素。

### 摇树友好

我们将所有原语编译成一个包，因此您只需安装一次，就可以访问所有原语。不用担心，它是摇树友好的，因此任何未使用的原语都不会包含在捆绑包中。

<InstallationTabs value="radix-vue" />

## 社区

### Discord

要参与 Radix 社区，提出问题并分享技巧，请加入我们的 Discord。

[加入我们的 Discord](https://discord.gg/jZUsrAADe5)

### Twitter

要接收有关新原语、公告、博客文章和一般 Radix 提示的更新，请在 Twitter 上关注 Radix。

[在 Twitter 上关注 Radix](https://twitter.com/radix_vue)

### GitHub

要提交问题、请求功能和贡献，请查看我们的 GitHub。

[GitHub 仓库](https://github.com/radix-vue/radix-vue)

[行为守则](https://github.com/radix-vue/radix-vue/CODE_OF_CONDUCT.md)
