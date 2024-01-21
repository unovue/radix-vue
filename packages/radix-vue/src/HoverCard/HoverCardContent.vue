<script lang="ts">
import type { HoverCardContentImplEmits, HoverCardContentImplProps } from './HoverCardContentImpl.vue'

export type HoverCardContentEmits = HoverCardContentImplEmits

export interface HoverCardContentProps extends HoverCardContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { injectHoverCardRootContext } from './HoverCardRoot.vue'
import { excludeTouch } from './utils'
import { Presence } from '@/Presence'
import HoverCardContentImpl from './HoverCardContentImpl.vue'
import { useForwardExpose, useForwardPropsEmits } from '@/shared'

const props = defineProps<HoverCardContentProps>()
const emits = defineEmits<HoverCardContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
const { forwardRef } = useForwardExpose()

const rootContext = injectHoverCardRootContext()
</script>

<template>
  <Presence
    :present="forceMount || rootContext.open.value"
  >
    <HoverCardContentImpl
      v-bind="forwarded"
      :ref="forwardRef"
      @pointerenter="excludeTouch(rootContext.onOpen)($event)"
      @pointerleave="excludeTouch(rootContext.onClose)($event)"
    >
      <slot />
    </HoverCardContentImpl>
  </Presence>
</template>
