<script lang="ts">
import { injectStepperRootContext } from './StepperRoot.vue'
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

export interface StepperListProps extends PrimitiveProps { }

const props = withDefaults(defineProps<StepperListProps>(), {})
const rootContext = injectStepperRootContext()
useForwardExpose()
</script>

<template>
  <Primitive
    :as="props.as ?? rootContext.linear.value ? 'ol' : 'ul'"
    :as-child="props.asChild"
    :data-orientation="rootContext.orientation.value"
    :data-linear="rootContext.linear.value ? '' : undefined"
    :dir="rootContext.dir.value"
  >
    <slot />
  </Primitive>

</template>