<script setup lang="ts">
import TooltipContentImpl, { type TooltipContentImplEmits, type TooltipContentImplProps } from './TooltipContentImpl.vue'
import TooltipContentHoverable from './TooltipContentHoverable.vue'
import { injectTooltipRootContext } from './TooltipRoot.vue'
import { useForwardPropsEmits } from '@/shared'

export interface TooltipContentProps extends TooltipContentImplProps {}
export type TooltipContentEmits = TooltipContentImplEmits

const props = withDefaults(defineProps<TooltipContentProps>(), {
  side: 'top',
})
const emits = defineEmits<TooltipContentEmits>()

const rootContext = injectTooltipRootContext()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <component
    :is="rootContext.disableHoverableContent.value ? TooltipContentImpl : TooltipContentHoverable"
    v-if="rootContext.open.value"
    v-bind="forwarded"
  >
    <slot />
  </component>
</template>
