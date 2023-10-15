<script lang="ts">
export interface ProgressIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectProgressRootContext } from './ProgressRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = defineProps<ProgressIndicatorProps>()

const rootContext = injectProgressRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    :data-state="rootContext.progressState.value"
    :data-value="rootContext.modelValue?.value ?? undefined"
    :data-max="rootContext.max.value"
  >
    <slot />
  </Primitive>
</template>
