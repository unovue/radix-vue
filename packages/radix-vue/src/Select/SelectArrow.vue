<script setup lang="ts">
import { inject } from 'vue'
import { SELECT_INJECTION_KEY } from './SelectRoot.vue'
import { SELECT_CONTENT_INJECTION_KEY } from './SelectContentImpl.vue'
import { PopperArrow, type PopperArrowProps } from '@/Popper'

const props = defineProps<SelectArrowProps>()
const context = inject(SELECT_INJECTION_KEY)
const contentContext = inject(SELECT_CONTENT_INJECTION_KEY)

export interface SelectArrowProps extends PopperArrowProps {}
</script>

<template>
  <PopperArrow
    v-if="context?.open.value && contentContext?.position === 'popper'"
    v-bind="props"
  >
    <slot />
  </PopperArrow>
</template>
