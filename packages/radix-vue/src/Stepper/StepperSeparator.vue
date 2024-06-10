<script lang="ts">
import { Separator, type SeparatorProps } from '@/Separator'
import { useForwardExpose } from '@/shared'

export interface StepperSeparatorProps extends SeparatorProps {}
</script>

<script setup lang="ts">
import { injectStepperRootContext } from './StepperRoot.vue'

const props = withDefaults(defineProps<StepperSeparatorProps>(), {  })

useForwardExpose()
const rootContext = injectStepperRootContext()
</script>

<template>
  <Separator v-bind="props" decorative :orientation="rootContext.orientation.value">
    <slot />
  </Separator>
</template>