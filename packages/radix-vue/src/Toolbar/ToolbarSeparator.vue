<script setup lang="ts">
import { Separator, type SeparatorProps } from '@/Separator'
import { injectToolbarContext } from './ToolbarRoot.vue'

export interface ToolbarSeparatorProps extends SeparatorProps {}
const props = defineProps<ToolbarSeparatorProps>()

const context = injectToolbarContext()
</script>

<template>
  <Separator
    :orientation="context.orientation.value"
    :as-child="props.asChild"
    :as="as"
  >
    <slot />
  </Separator>
</template>
