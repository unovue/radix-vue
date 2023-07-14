---
outline: deep
metaTitle: Aspect Ratio
metaDescription: Displays content within a desired ratio.
name: aspect-ratio
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoAspectRatio from '../../components/demo/AspectRatio/index.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# Aspect Ratio

<Description>
A modal dialog that interrupts the user with important content and expects a
response.
</Description>

<HeroContainer>
<DemoAspectRatio />
</HeroContainer>

::: code-group
<<< ../../components/demo/AspectRatio/index.vue
:::

Accepts any custom ratio.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-aspect-ratio
```

## Anatomy

Import the component.

```jsx
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export default () => <AspectRatio.Root />;
```

## API Reference

### Root

Contains the content you want to constrain to a given ratio.


<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: '',
    },
    {
      name: 'ratio',
      type: 'number',
      default: '1',
      description: 'The desired ratio',
    },
  ]"
/>