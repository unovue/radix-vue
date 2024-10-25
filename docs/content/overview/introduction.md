---

title: Introduction
description: An open-source UI component library for building high-quality, accessible design systems and web apps using Vue.
---

# Introduction

<Description>
An open-source UI component library for building high-quality, accessible
design systems and web apps using <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>.
</Description>

::: tip
Radix Vue is an unofficial community-led Vue port of [Radix UI](https://www.radix-ui.com/), thus we share the same principal and vision when building primitives.
:::

Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.

## Vision

Most of us share similar definitions for common UI patterns like accordion, checkbox,
combobox, dialog, dropdown, select, slider, and tooltip. These UI patterns are [documented by WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/#aria_ex) and generally understood by the community.

However, the implementations provided to us by the web platform are inadequate. They're
either non-existent, lacking in functionality, or cannot be customized sufficiently.

So, developers are forced to build custom components; an incredibly difficult task. As a
result, most components on the web are inaccessible, non-performant, and lacking important
features.

Our goal is to create a well-funded, open-source component library that the community can
use to build accessible design systems.

## Key Features

### Accessible

Components adhere to the [WAI-ARIA design patterns](https://www.w3.org/TR/wai-aria-practices-1.2) where possible. We handle many of the difficult implementation details related to accessibility, including aria and role attributes, focus management, and keyboard navigation. Learn more in our [accessibility](./accessibility) overview.

### Unstyled

Components ship with zero styles, giving you complete control over styling. Components can be styled with any styling solution (vanilla CSS, CSS preprocessors, CSS-in-JS libraries). Learn more in our [styling](../guides/styling) guide.

### Opened

Radix Primitives are designed to be customized to suit your needs. Our open component architecture provides you granular access to each component part, so you can wrap them and add your own event listeners, props, or refs.

### Uncontrolled

Where applicable, components are uncontrolled by default but can also be controlled, alternatively. All of the behavior wiring is handled internally, so you can get up and running as smoothly as possible, without needing to create any local states.

### Developer experience

One of our main goals is to provide the best possible developer experience. Radix Primitives provides a fully-typed API. All components share a similar API, creating a consistent and predictable experience. We've also implemented an `asChild` prop (It's not a problem for Vue), giving users full control over the rendered element.

### Tree-shaking friendly

We compile all primitives into one package, so you just have to install once, and have access to all the primitives. Worry not, it is tree-shaking friendly so any unused primitives will not be included in the bundle.

<InstallationTabs value="radix-vue" />

## Community

### Discord

To get involved with the Radix community, ask questions, and share tips, join our Discord.

[Join our Discord](https://discord.gg/jZUsrAADe5)

### Twitter

To receive updates on new primitives, announcements, blog posts, and general Radix tips, follow along on Twitter.

[Follow Radix on Twitter](https://twitter.com/radix_vue)

### GitHub

To file issues, request features, and contribute, check out our GitHub.

[GitHub repo](https://github.com/unovue/radix-vue)

[Code of conduct](https://github.com/unovue/radix-vue/CODE_OF_CONDUCT.md)
