<script setup lang="ts">
import {
  injectHoverCardContext,
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

const context = injectHoverCardContext()
</script>

<template>
  <PopperAnchor as-child>
    <Primitive
      :as-child="asChild"
      :as="as"
      :data-state="context.open.value ? 'open' : 'closed'"
      @pointerenter="excludeTouch(context.onOpen)($event)"
      @pointerleave="excludeTouch(context.onClose)($event)"
      @focus="context.onOpen()"
      @blur="context.onClose"
      @touchstart.prevent="() => {
        // prevent focus event on touch devices
      }"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
