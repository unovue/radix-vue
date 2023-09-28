<script setup lang="ts">
import { inject } from 'vue'
import {
  HOVER_CARD_INJECTION_KEY,
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

const context = inject(HOVER_CARD_INJECTION_KEY)
</script>

<template>
  <Presence
    :present="context!.open.value"
  >
    <HoverCardContentImpl
      v-bind="forwarded"
      @pointerenter="excludeTouch(context!.onOpen)($event)"
      @pointerleave="excludeTouch(context!.onClose)($event)"
    >
      <slot />
    </HoverCardContentImpl>
  </Presence>
</template>
