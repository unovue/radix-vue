<script setup lang="ts">
import BaseSeparator from '../shared/component/BaseSeparator.vue'
import { injectToolbarRootContext } from './ToolbarRoot.vue'
import { type PrimitiveProps } from '@/Primitive'

export interface ToolbarSeparatorProps extends PrimitiveProps {}
const props = defineProps<ToolbarSeparatorProps>()

const rootContext = injectToolbarRootContext()
</script>

<template>
  <BaseSeparator
    :orientation="rootContext.orientation.value"
    :as-child="props.asChild"
    :as="as"
  >
    <slot />
  </BaseSeparator>
</template>
