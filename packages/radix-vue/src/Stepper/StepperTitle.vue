
<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface StepperTitleProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectStepperItemContext } from './StepperItem.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<StepperTitleProps>(), { as: 'h4' })
const itemContext = injectStepperItemContext()
useForwardExpose()
</script>

<template>
  <Primitive v-bind="props" :id="itemContext.titleId">
    <slot />
  </Primitive>
</template>