<script lang="ts">
import type { ToggleGroupItemProps } from '@/ToggleGroup'

export interface ToolbarToggleItemProps extends ToggleGroupItemProps {}
</script>

<script setup lang="ts">
import ToolbarButton from './ToolbarButton.vue'
import { ToggleGroupItem } from '@/ToggleGroup'

const props = defineProps<ToolbarToggleItemProps>()
</script>

<template>
  <ToolbarButton as-child>
    <ToggleGroupItem v-bind="props">
      <slot />
    </ToggleGroupItem>
  </ToolbarButton>
</template>
