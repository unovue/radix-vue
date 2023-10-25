<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface HoverCardTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectHoverCardRootContext } from './HoverCardRoot.vue'
import { Primitive } from '@/Primitive'
import { PopperAnchor } from '@/Popper'
import { excludeTouch } from './utils'

withDefaults(defineProps<HoverCardTriggerProps>(), {
  as: 'a',
})

const rootContext = injectHoverCardRootContext()
</script>

<template>
  <PopperAnchor as-child>
    <Primitive
      :as-child="asChild"
      :as="as"
      :data-state="rootContext.open.value ? 'open' : 'closed'"
      @pointerenter="excludeTouch(rootContext.onOpen)($event)"
      @pointerleave="excludeTouch(rootContext.onClose)($event)"
      @focus="rootContext.onOpen()"
      @blur="rootContext.onClose"
      @touchstart.prevent="() => {
        // prevent focus event on touch devices
      }"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
