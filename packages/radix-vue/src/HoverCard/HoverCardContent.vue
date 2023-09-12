<script setup lang="ts">
import { inject } from 'vue'
import {
  HOVER_CARD_INJECTION_KEY,
} from './HoverCardRoot.vue'
import { excludeTouch } from './utils'
import { Presence } from '@/Presence'
import HoverCardContentImpl, { type HoverCardContentImplEmits, type HoverCardContentImplProps } from './HoverCardContentImpl.vue'
import { useEmitAsProps } from '@/shared'
import { PopperContentPropsDefaultValue } from '@/Popper'

export interface HoverCardContentProps extends HoverCardContentImplProps {}
export type HoverCardContentEmits = HoverCardContentImplEmits

const props = withDefaults(defineProps<HoverCardContentProps>(), {
  ...PopperContentPropsDefaultValue,
})
const emits = defineEmits<HoverCardContentEmits>()
const emitsAsProps = useEmitAsProps(emits)

const context = inject(HOVER_CARD_INJECTION_KEY)
</script>

<template>
  <Presence
    :present="context!.open.value"
  >
    <HoverCardContentImpl
      v-bind="{ ...props, ...emitsAsProps }"
      @pointerenter="excludeTouch(context!.onOpen)($event)"
      @pointerleave="excludeTouch(context!.onClose)($event)"
    >
      <slot />
    </HoverCardContentImpl>
  </Presence>
</template>
