<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface HoverCardTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectHoverCardRootContext } from './HoverCardRoot.vue'
import { Primitive } from '@/Primitive'
import { PopperAnchor } from '@/Popper'
import { useForwardExpose } from '@/shared'
import { excludeTouch } from './utils'

withDefaults(defineProps<HoverCardTriggerProps>(), {
  as: 'a',
})

const { forwardRef, currentElement } = useForwardExpose()
const rootContext = injectHoverCardRootContext()
rootContext.triggerElement = currentElement

function handleFocus(hoverCardStateChange: () => void) {
  rootContext.isFocusedRef.value = !rootContext.isFocusedRef.value
  hoverCardStateChange()
}
</script>

<template>
  <PopperAnchor as-child>
    <Primitive
      :ref="forwardRef"
      :as-child="asChild"
      :as="as"
      :data-state="rootContext.open.value ? 'open' : 'closed'"
      @pointerenter="excludeTouch(rootContext.onOpen)($event)"
      @focus="handleFocus(rootContext.onOpen)"
      @blur="handleFocus(rootContext.onClose)"
      @mouseover="rootContext.isHoveringRef.value = true"
      @mouseleave="rootContext.isHoveringRef.value = false"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
