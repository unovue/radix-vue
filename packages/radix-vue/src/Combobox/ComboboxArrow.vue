<script lang="ts">
import type { PopperArrowProps } from '@/Popper'

export interface ComboboxArrowProps extends PopperArrowProps {}
</script>

<script setup lang="ts">
import { injectComboboxRootContext } from './ComboboxRoot.vue'
import { injectComboboxContentContext } from './ComboboxContentImpl.vue'
import { PopperArrow } from '@/Popper'

const props = defineProps<ComboboxArrowProps>()
const rootContext = injectComboboxRootContext()
const contentContext = injectComboboxContentContext()
</script>

<template>
  <PopperArrow
    v-if="rootContext.open.value && contentContext.position.value === 'popper'"
    v-bind="props"
  >
    <slot />
  </PopperArrow>
</template>
