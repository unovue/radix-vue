---
metaTitle: Aspect Ratio
metaDescription: Displays content within a desired ratio.
name: aspect-ratio
---

# Aspect Ratio

<Description>Displays content within a desired ratio.</Description>

<HeroContainer>
  <AspectRatioDemo />
</HeroContainer>

<HeroCodeBlock folder="AspectRatio" />

<Highlights features={['Accepts any custom ratio.']} />

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
      name: 'ratio',
      type: 'number',
      default: '1',
      description: 'The desired ratio',
    },
  ]}
/>