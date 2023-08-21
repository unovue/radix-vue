<script setup lang="ts">
import { inject } from 'vue'
import BaseSeparator from '../shared/component/BaseSeparator.vue'
import { TOOLBAR_INJECTION_KEY } from './ToolbarRoot.vue'
import { type PrimitiveProps } from '@/Primitive'

export interface ToolbarSeparatorProps extends PrimitiveProps {}
const props = defineProps<ToolbarSeparatorProps>()

const context = inject(TOOLBAR_INJECTION_KEY)
</script>

<template>
  <BaseSeparator
    :orientation="context?.orientation.value"
    :as-child="props.asChild"
    :as="as"
  >
    <slot />
  </BaseSeparator>
</template>
