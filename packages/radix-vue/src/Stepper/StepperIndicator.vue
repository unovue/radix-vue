<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectStepperRootContext } from './StepperRoot.vue'
import { useForwardExpose } from '@/shared'
import { injectStepperItemContext } from './StepperItem.vue';

export interface StepperIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = defineProps<StepperIndicatorProps>()
const rootContext = injectStepperRootContext()
const itemContext = injectStepperItemContext()
useForwardExpose()
</script>

<template>
  <Primitive
    v-bind="props"
    :data-orientation="rootContext.orientation.value"
    :data-state="itemContext.state.value"
    :data-disabled="itemContext.disabled.value"
  >
    <slot />
  </Primitive>
</template>