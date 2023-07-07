<script lang="ts">
import BaseSeparator from "../shared/component/BaseSeparator.vue";
import type { BaseSeparatorProps } from "../shared/component/BaseSeparator.vue";

export interface SeparatorProps extends BaseSeparatorProps {}
</script>

<script setup lang="ts">
const props = defineProps<SeparatorProps>();
</script>

<template>
  <BaseSeparator v-bind="props" />
</template>
