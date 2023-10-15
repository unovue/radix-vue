<script setup lang="ts">
import {
  injectHoverCardRootContext,
} from './HoverCardRoot.vue'
import { excludeTouch } from './utils'
import { Presence } from '@/Presence'
import HoverCardContentImpl, { type HoverCardContentImplEmits, type HoverCardContentImplProps } from './HoverCardContentImpl.vue'
import { useForwardPropsEmits } from '@/shared'

export interface HoverCardContentProps extends HoverCardContentImplProps {}
export type HoverCardContentEmits = HoverCardContentImplEmits

const props = defineProps<HoverCardContentProps>()
const emits = defineEmits<HoverCardContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const rootContext = injectHoverCardRootContext()
</script>

<template>
  <Presence
    :present="rootContext.open.value"
  >
    <HoverCardContentImpl
      v-bind="forwarded"
      @pointerenter="excludeTouch(rootContext.onOpen)($event)"
      @pointerleave="excludeTouch(rootContext.onClose)($event)"
    >
      <slot />
    </HoverCardContentImpl>
  </Presence>
</template>
