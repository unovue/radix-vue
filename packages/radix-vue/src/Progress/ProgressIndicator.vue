<script lang="ts">
export interface ProgressIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectProgressContext } from './ProgressRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = defineProps<ProgressIndicatorProps>()

const context = injectProgressContext()
</script>

<template>
  <Primitive
    v-bind="props"
    :data-state="context.progressState.value"
    :data-value="context.modelValue?.value ?? undefined"
    :data-max="context.max.value"
  >
    <slot />
  </Primitive>
</template>
