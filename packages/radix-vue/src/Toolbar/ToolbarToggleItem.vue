<script setup lang="ts">
import ToolbarButton from './ToolbarButton.vue'
import { ToggleGroupItem, type ToggleGroupItemProps } from '@/ToggleGroup'

export interface ToolbarToggleItemProps extends ToggleGroupItemProps {}
const props = defineProps<ToolbarToggleItemProps>()
</script>

<template>
  <ToolbarButton as-child>
    <ToggleGroupItem v-bind="props">
      <slot />
    </ToggleGroupItem>
  </ToolbarButton>
</template>
