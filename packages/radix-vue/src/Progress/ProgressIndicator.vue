<script lang="ts">
export interface ProgressIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { PROGRESS_INJECTION_KEY } from './ProgressRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = defineProps<ProgressIndicatorProps>()

const injectedValue = inject(PROGRESS_INJECTION_KEY)
</script>

<template>
  <Primitive
    v-bind="props"
    :data-state="injectedValue?.progressState.value"
    :data-value="injectedValue?.modelValue?.value ?? undefined"
    :data-max="injectedValue?.max.value"
  >
    <slot />
  </Primitive>
</template>
