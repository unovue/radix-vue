<script lang="ts">
import BaseSeparator, {
  type BaseSeparatorProps,
} from "@/shared/component/BaseSeparator.vue";

export interface SeparatorProps extends BaseSeparatorProps {}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: "horizontal",
});
</script>

<template>
  <BaseSeparator v-bind="props">
    <slot></slot>
  </BaseSeparator>
</template>
