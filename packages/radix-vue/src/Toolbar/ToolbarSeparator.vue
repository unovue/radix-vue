<script lang="ts">
import BaseSeparator from "../shared/component/BaseSeparator.vue";

export interface BaseSeparatorProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseSeparatorProps>(), {
  asChild: false,
});
</script>

<template>
  <BaseSeparator :asChild="props.asChild" />
</template>
