<script lang="ts">
export type TooltipTriggerDataState =
  | 'closed'
  | 'delayed-open'
  | 'instant-open'

export interface TooltipTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { TOOLTIP_INJECTION_KEY } from './TooltipRoot.vue'
import { PopperAnchor } from '@/Popper'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { useHover } from '@/shared'

const props = withDefaults(defineProps<TooltipTriggerProps>(), {
  as: 'button',
})
const injectedValue = inject(TOOLTIP_INJECTION_KEY)

const { primitiveElement, currentElement: triggerElement }
  = usePrimitiveElement()

useHover(triggerElement, {
  delayEnter: injectedValue?.delayMs,
  onHoverEnter: () => injectedValue?.showTooltip(true),
  delayLeave: 0,
  onHoverLeave: () => injectedValue?.hideTooltip(),
  disabled: injectedValue?.disableHoverableContent,
})
</script>

<template>
  <PopperAnchor as-child>
    <Primitive
      ref="primitiveElement"
      :type="as === 'button' ? 'button' : undefined"
      :aria-describedby="
        injectedValue?.open ? injectedValue.contentId : undefined
      "
      :as="as"
      :as-child="props.asChild"
      :data-state="injectedValue?.dataState.value"
      :aria-expanded="injectedValue?.open.value || false"
      @focus="injectedValue?.showTooltip(false)"
      @blur="injectedValue?.hideTooltip"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
