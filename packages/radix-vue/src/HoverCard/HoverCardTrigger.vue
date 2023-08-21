<script lang="ts">
export interface HoverCardTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { useHoverDelay, useMouseleaveDelay } from '../shared'
import {
  HOVER_CARD_INJECTION_KEY,
  type HoverCardProvideValue,
} from './HoverCardRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { PopperAnchor } from '@/Popper'

const props = withDefaults(defineProps<HoverCardTriggerProps>(), {
  as: 'button',
})

const injectedValue = inject<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY)

const { primitiveElement, currentElement } = usePrimitiveElement()

async function handleMouseEnter(e: MouseEvent) {
  const result = await useHoverDelay(
    e,
    currentElement.value!,
    injectedValue?.openDelay,
  )
  if (result)
    injectedValue?.showTooltip()
}

async function handleMouseleave(e: MouseEvent) {
  injectedValue!.isHover = false
  const result = await useMouseleaveDelay(e, injectedValue?.closeDelay)
  if (result && !injectedValue?.isHover)
    injectedValue?.hideTooltip()
}
</script>

<template>
  <PopperAnchor as-child>
    <Primitive
      ref="primitiveElement"
      :as-child="props.asChild"
      :as="as"
      :aria-expanded="injectedValue?.open.value || false"
      :data-state="injectedValue?.open.value ? 'open' : 'closed'"
      style="cursor: default"
      @mouseover="injectedValue!.isHover = true"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseleave"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
