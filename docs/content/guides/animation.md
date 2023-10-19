---
title: Animation/Transition
description: Animate Radix Primitives with CSS keyframes, JavaScript animation library of your choice or Native Vue Transition.
---



# Animation

<Description>
Animate Radix Primitives with CSS keyframes, JavaScript animation library of your choice or Native Vue Transition.
</Description>

Adding animation to Radix Primitives should feel similar to any other component, but there are some caveats noted here in regards to exiting animations with JS animation libraries.

## Animating with CSS animation

The simplest way to animate Primitives is with CSS.

You can use CSS animation to animate both mount and unmount phases. The latter is possible because the Radix Primitives will suspend unmount while your animation plays out.

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.DialogOverlay[data-state="open"],
.DialogContent[data-state="open"] {
  animation: fadeIn 300ms ease-out;
}

.DialogOverlay[data-state="closed"],
.DialogContent[data-state="closed"] {
  animation: fadeOut 300ms ease-in;
}
```

<!-- ::: info
Source: [Radix UI](https://www.radix-ui.com/)
::: -->

<EmbedIframe src="https://stackblitz.com/edit/vitejs-vite-y8mdxg?embed=1&file=index.html&view=preview" />
 
## Delegating unmounting for JavaScript Animation

When many stateful Primitives are hidden from view, they are actually removed from the DOM (similar to `v-if`). JavaScript animation libraries need control of the unmounting phase, so we provide the `forceMount` prop on many components to allow consumers to delegate the mounting and unmounting of children based on the animation state determined by those libraries.

For example, if you want to use [@vueuse/motion](https://motion.vueuse.org/) to animate a `Dialog`, you would do so by conditionally rendering the dialog `Overlay` and `Content` parts based on the animation state from one of its hooks like `useTransition`:

```jsx
import * as Dialog from '@radix-ui/react-dialog'
import { animated, config, useTransition } from 'react-spring'

function Example() {
  const [open, setOpen] = React.useState(false)
  const transitions = useTransition(open, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
    config: config.stiff,
  })
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      {transitions((styles, item) =>
        item
          ? (
          <>
            <Dialog.Overlay forceMount asChild>
              <animated.div
                style={{
                  opacity: styles.opacity,
                }}
              />
            </Dialog.Overlay>
            <Dialog.Content forceMount asChild>
              <animated.div style={styles}>
                <h1>Hello from inside the Dialog!</h1>
                <Dialog.Close>close</Dialog.Close>
              </animated.div>
            </Dialog.Content>
          </>
            )
          : null
      )}
    </Dialog.Root>
  )
}
``` 