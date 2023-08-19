<script setup lang="ts">
import { ToggleGroupItem, type ToggleGroupItemProps } from "@/ToggleGroup";
import ToolbarButton from "./ToolbarButton.vue";

export interface ToolbarToggleItemProps extends ToggleGroupItemProps {}
const props = defineProps<ToolbarToggleItemProps>();
</script>

<template>
  <ToolbarButton asChild>
    <ToggleGroupItem v-bind="props">
      <slot></slot>
    </ToggleGroupItem>
  </ToolbarButton>
</template>
