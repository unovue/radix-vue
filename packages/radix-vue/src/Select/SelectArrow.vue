<script setup lang="ts">
import { injectSelectRootContext } from './SelectRoot.vue'
import { injectSelectContentContext } from './SelectContentImpl.vue'
import { PopperArrow, type PopperArrowProps } from '@/Popper'

const props = defineProps<SelectArrowProps>()
const rootContext = injectSelectRootContext()
const contentContext = injectSelectContentContext()

export interface SelectArrowProps extends PopperArrowProps {}
</script>

<template>
  <PopperArrow
    v-if="rootContext.open.value && contentContext.position === 'popper'"
    v-bind="props"
  >
    <slot />
  </PopperArrow>
</template>
