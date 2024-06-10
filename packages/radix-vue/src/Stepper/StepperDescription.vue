<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface StepperDescriptionProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectStepperItemContext } from './StepperItem.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<StepperDescriptionProps>(), { as: 'p' })

useForwardExpose()
const itemContext = injectStepperItemContext()
</script>

<template>
  <Primitive v-bind="props" :id="itemContext.descriptionId">
    <slot />
  </Primitive>
</template>