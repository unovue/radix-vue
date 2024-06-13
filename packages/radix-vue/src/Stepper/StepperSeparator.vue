<script lang="ts">
import { injectStepperRootContext } from './StepperRoot.vue'
import { injectStepperItemContext } from './StepperItem.vue'
import { Separator, type SeparatorProps } from '@/Separator'
import { useForwardExpose } from '@/shared'
</script>

<script setup lang="ts">
export interface StepperSeparatorProps extends SeparatorProps { }

const props = withDefaults(defineProps<StepperSeparatorProps>(), {})

const rootContext = injectStepperRootContext()
const itemContext = injectStepperItemContext()

useForwardExpose()
</script>

<template>
  <Separator
    v-bind="props"
    decorative
    :orientation="rootContext.orientation.value"
    :data-linear="rootContext.linear.value"
    :data-state="itemContext.state.value"
  >
    <slot />
  </Separator>
</template>
