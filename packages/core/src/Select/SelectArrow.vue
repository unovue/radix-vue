<script lang="ts">
import type { PopperArrowProps } from '@/Popper'

export interface SelectArrowProps extends PopperArrowProps {}
</script>

<script setup lang="ts">
import { injectSelectRootContext } from './SelectRoot.vue'
import { injectSelectContentContext } from './SelectContentImpl.vue'
import { PopperArrow } from '@/Popper'

const props = withDefaults(defineProps<SelectArrowProps>(), {
  width: 10,
  height: 5,
  as: 'svg',
})
const rootContext = injectSelectRootContext()
const contentContext = injectSelectContentContext()
</script>

<template>
  <PopperArrow
    v-if="rootContext.open.value && contentContext.position === 'popper'"
    v-bind="props"
  >
    <slot />
  </PopperArrow>
</template>
