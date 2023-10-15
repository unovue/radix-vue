<script setup lang="ts">
import {
  injectHoverCardRootContext,
} from './HoverCardRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
} from '@/Primitive'
import { PopperAnchor } from '@/Popper'
import { excludeTouch } from './utils'

export interface HoverCardTriggerProps extends PrimitiveProps {}

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
