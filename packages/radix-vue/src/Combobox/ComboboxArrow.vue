<script setup lang="ts">
import { injectComboboxRootContext } from './ComboboxRoot.vue'
import { injectComboboxContentContext } from './ComboboxContentImpl.vue'
import { PopperArrow, type PopperArrowProps } from '@/Popper'

const props = defineProps<ComboboxArrowProps>()
const rootContext = injectComboboxRootContext()
const contentContext = injectComboboxContentContext()

export interface ComboboxArrowProps extends PopperArrowProps {}
</script>

<template>
  <PopperArrow
    v-if="rootContext.open.value && contentContext.position.value === 'popper'"
    v-bind="props"
  >
    <slot />
  </PopperArrow>
</template>
