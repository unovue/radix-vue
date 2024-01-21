<script lang="ts">
import type { ToggleGroupItemProps } from '@/ToggleGroup'
import { useForwardExpose } from '@/shared'

export interface ToolbarToggleItemProps extends ToggleGroupItemProps {}
</script>

<script setup lang="ts">
import ToolbarButton from './ToolbarButton.vue'
import { ToggleGroupItem } from '@/ToggleGroup'

const props = defineProps<ToolbarToggleItemProps>()
const { forwardRef } = useForwardExpose()
</script>

<template>
  <ToolbarButton as-child>
    <ToggleGroupItem v-bind="props" :ref="forwardRef">
      <slot />
    </ToggleGroupItem>
  </ToolbarButton>
</template>
