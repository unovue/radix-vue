<script setup lang="ts">
import { inject } from 'vue'
import { TOOLBAR_INJECTION_KEY } from './ToolbarRoot.vue'
import {
  ToggleGroupRoot,
  type ToggleGroupRootEmits,
  type ToggleGroupRootProps,
} from '@/ToggleGroup'
import { useEmitAsProps } from '@/shared'

const props = defineProps<ToolbarToggleGroupProps>()

const emits = defineEmits<ToolbarToggleGroupEmits>()

const context = inject(TOOLBAR_INJECTION_KEY)

export interface ToolbarToggleGroupProps extends ToggleGroupRootProps {}
export type ToolbarToggleGroupEmits = ToggleGroupRootEmits

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <ToggleGroupRoot
    v-bind="{ ...props, ...emitsAsProps }"
    :data-orientation="context?.orientation.value"
    :dir="context?.dir.value"
    :roving-focus="false"
  >
    <slot />
  </ToggleGroupRoot>
</template>
