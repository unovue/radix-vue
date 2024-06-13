<script lang="ts">
import { injectStepperRootContext } from './StepperRoot.vue'
import { injectStepperItemContext } from './StepperItem.vue'
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

export interface StepperIndicatorProps extends PrimitiveProps { }

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
    <slot>
      Step {{ itemContext.step.value }}
    </slot>
  </Primitive>
</template>
