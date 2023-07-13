---
metaTitle: Label
metaDescription: Renders an accessible label associated with controls.
name: label
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoLabel from '../../components/demo/Label/index.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# Label

<Description>
A modal dialog that interrupts the user with important content and expects a
response.
</Description>

<HeroContainer>
<DemoLabel />
</HeroContainer>

::: code-group
<<< ../../components/demo/Label/index.vue
:::
```
<Highlights
  features={[
    'Text selection is prevented when double clicking label.',
    'Supports nested controls.',
  ]}
/>
```
## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-label
```

## Anatomy

Import the component.

```jsx
import * as Label from '@radix-ui/react-label';

export default () => <Label.Root />;
```

## API Reference

### Root

Contains the content for the label.
```
<PropsTable
  data={[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <>
          Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href="../guides/composition">Composition</a> guide for more
          details.
        </>
      ),
    },
    {
      name: 'htmlFor',
      type: 'string',
      description: 'The id of the element the label is associated with.',
    },
  ]}
/>
```
## Accessibility

This component is based on the native `label` element, it will automatically apply the correct labelling when wrapping controls or using the `htmlFor` attribute. For your own custom controls to work correctly, ensure they use native elements such as `button` or `input` as a base.