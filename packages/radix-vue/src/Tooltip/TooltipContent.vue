<script setup lang="ts">
import TooltipContentImpl, { type TooltipContentImplEmits, type TooltipContentImplProps } from './TooltipContentImpl.vue'
import TooltipContentHoverable from './TooltipContentHoverable.vue'
import { injectTooltipRootContent } from './TooltipRoot.vue'
import { useEmitAsProps } from '@/shared'

export interface TooltipContentProps extends TooltipContentImplProps {}
export type TooltipContentEmits = TooltipContentImplEmits

const props = withDefaults(defineProps<TooltipContentProps>(), {
  side: 'top',
})
const emits = defineEmits<TooltipContentEmits>()
const emitsAsProps = useEmitAsProps(emits)

const context = injectTooltipRootContent()
</script>

<template>
  <component
    :is="context.disableHoverableContent.value ? TooltipContentImpl : TooltipContentHoverable"
    v-if="context.open.value"
    v-bind="{ ...props, ...emitsAsProps }"
  >
    <slot />
  </component>
</template>
