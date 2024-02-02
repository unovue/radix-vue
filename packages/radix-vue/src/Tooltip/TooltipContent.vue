<script lang="ts">
import type { TooltipContentImplEmits, TooltipContentImplProps } from './TooltipContentImpl.vue'

export type TooltipContentEmits = TooltipContentImplEmits

export interface TooltipContentProps extends TooltipContentImplProps {}
</script>

<script setup lang="ts">
import TooltipContentImpl from './TooltipContentImpl.vue'
import TooltipContentHoverable from './TooltipContentHoverable.vue'
import { injectTooltipRootContext } from './TooltipRoot.vue'
import { useForwardExpose, useForwardPropsEmits } from '@/shared'

const props = withDefaults(defineProps<TooltipContentProps>(), {
  side: 'top',
})
const emits = defineEmits<TooltipContentEmits>()

const rootContext = injectTooltipRootContext()
const forwarded = useForwardPropsEmits(props, emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <component
    :is="rootContext.disableHoverableContent.value ? TooltipContentImpl : TooltipContentHoverable"
    v-if="rootContext.open.value"
    :ref="forwardRef"
    v-bind="forwarded"
  >
    <slot />
  </component>
</template>
