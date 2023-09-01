<script setup lang="ts">
import { injectSelectContext } from './SelectRoot.vue'
import { injectSelectContentContext } from './SelectContentImpl.vue'
import { PopperArrow, type PopperArrowProps } from '@/Popper'

const props = defineProps<SelectArrowProps>()
const context = injectSelectContext()
const contentContext = injectSelectContentContext()

export interface SelectArrowProps extends PopperArrowProps {}
</script>

<template>
  <PopperArrow
    v-if="context.open.value && contentContext.position === 'popper'"
    v-bind="props"
  >
    <slot />
  </PopperArrow>
</template>
