<script lang="ts">
export type Boundary = Element | null | Array<Element | null>

export interface HoverCardContentProps extends PopperContentProps {}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { useMouseleaveDelay } from '../shared'
import {
  HOVER_CARD_INJECTION_KEY,
  type HoverCardProvideValue,
} from './HoverCardRoot.vue'
import { PopperContent, type PopperContentProps } from '@/Popper'
import { Presence } from '@/Presence'

const props = withDefaults(defineProps<HoverCardContentProps>(), {
  side: 'bottom',
  align: 'center',
  avoidCollisions: true,
})

const injectedValue = inject<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY)

async function handleMouseleave(e: MouseEvent) {
  injectedValue!.isHover = false
  const result = await useMouseleaveDelay(e, injectedValue?.closeDelay!)
  if (result && !injectedValue?.isHover)
    injectedValue?.hideTooltip()
}
</script>

<template>
  <Presence :present="injectedValue!.open.value">
    <PopperContent
      v-bind="{ ...props, ...$attrs }"
      :data-state="injectedValue?.open.value ? 'open' : 'closed'"
      :data-side="props.side"
      :data-align="props.align"
      @mouseover="injectedValue!.isHover = true"
      @mouseleave="handleMouseleave"
    >
      <slot />
    </PopperContent>
  </Presence>
</template>
