<script setup lang="ts">
import { injectToolbarRootContext } from './ToolbarRoot.vue'
import {
  ToggleGroupRoot,
  type ToggleGroupRootEmits,
  type ToggleGroupRootProps,
} from '@/ToggleGroup'
import { useEmitAsProps } from '@/shared'

const props = defineProps<ToolbarToggleGroupProps>()

const emits = defineEmits<ToolbarToggleGroupEmits>()

const rootContext = injectToolbarRootContext()

export interface ToolbarToggleGroupProps extends ToggleGroupRootProps {}
export type ToolbarToggleGroupEmits = ToggleGroupRootEmits

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <ToggleGroupRoot
    v-bind="{ ...props, ...emitsAsProps }"
    :data-orientation="rootContext.orientation.value"
    :dir="rootContext.dir.value"
    :roving-focus="false"
  >
    <slot />
  </ToggleGroupRoot>
</template>
