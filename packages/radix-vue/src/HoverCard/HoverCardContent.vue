<script setup lang="ts">
import {
  injectHoverCardRootContext,
} from './HoverCardRoot.vue'
import { excludeTouch } from './utils'
import { Presence } from '@/Presence'
import HoverCardContentImpl, { type HoverCardContentImplEmits, type HoverCardContentImplProps } from './HoverCardContentImpl.vue'
import { useForwardPropsEmits } from '@/shared'

export interface HoverCardContentProps extends HoverCardContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
export type HoverCardContentEmits = HoverCardContentImplEmits

const props = defineProps<HoverCardContentProps>()
const emits = defineEmits<HoverCardContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const rootContext = injectHoverCardRootContext()
</script>

<template>
  <Presence
    :present="forceMount || rootContext.open.value"
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
