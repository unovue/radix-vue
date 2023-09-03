<script setup lang="ts">
import {
  injectHoverCardContext,
} from './HoverCardRoot.vue'
import { excludeTouch } from './utils'
import { Presence } from '@/Presence'
import HoverCardContentImpl, { type HoverCardContentImplEmits, type HoverCardContentImplProps } from './HoverCardContentImpl.vue'
import { useEmitAsProps } from '@/shared'

export interface HoverCardContentProps extends HoverCardContentImplProps {}
export type HoverCardContentEmits = HoverCardContentImplEmits

const props = withDefaults(defineProps<HoverCardContentProps>(), {
  side: 'bottom',
  align: 'center',
  avoidCollisions: true,
})
const emits = defineEmits<HoverCardContentEmits>()
const emitsAsProps = useEmitAsProps(emits)

const context = injectHoverCardContext()
</script>

<template>
  <Presence
    :present="context.open.value"
  >
    <HoverCardContentImpl
      v-bind="{ ...props, ...emitsAsProps }"
      @pointerenter="excludeTouch(context.onOpen)($event)"
      @pointerleave="excludeTouch(context.onClose)($event)"
    >
      <slot />
    </HoverCardContentImpl>
  </Presence>
</template>
