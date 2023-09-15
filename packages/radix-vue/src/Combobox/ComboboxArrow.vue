<script setup lang="ts">
import { inject } from 'vue'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'
import { COMBOBOX_CONTENT_INJECTION_KEY } from './ComboboxContentImpl.vue'
import { PopperArrow, type PopperArrowProps } from '@/Popper'

const props = defineProps<SelectArrowProps>()
const context = inject(COMBOBOX_INJECT_KEY)
const contentContext = inject(COMBOBOX_CONTENT_INJECTION_KEY)

export interface SelectArrowProps extends PopperArrowProps {}
</script>

<template>
  <PopperArrow
    v-if="context?.open.value && contentContext?.position.value === 'popper'"
    v-bind="props"
  >
    <slot />
  </PopperArrow>
</template>
