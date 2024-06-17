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
</script>

<template>
  <PopperAnchor as-child>
    <Primitive
      :ref="forwardRef"
      :as-child="asChild"
      :as="as"
      :data-state="rootContext.open.value ? 'open' : 'closed'"
      @pointerenter="excludeTouch(rootContext.onOpen)($event)"
      @focus="rootContext.onOpen()"
      @blur="rootContext.onClose()"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
