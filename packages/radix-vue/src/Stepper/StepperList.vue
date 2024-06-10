<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface StepperListProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectStepperRootContext } from './StepperRoot.vue'
import { Primitive } from '@/Primitive'

const rootContext = injectStepperRootContext()
const props = withDefaults(defineProps<StepperListProps>(), { as: rootContext.linear.value ? 'ol' : 'ul' })

useForwardExpose()
</script>

<template>
  <Primitive v-bind="props" :data-orientation="rootContext.orientation.value" :data-linear="rootContext.linear.value ? '' : undefined">
    <slot />
  </Primitive>
</template>