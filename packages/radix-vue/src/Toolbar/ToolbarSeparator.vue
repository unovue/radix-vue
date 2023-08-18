<script lang="ts">
import BaseSeparator from "../shared/component/BaseSeparator.vue";
import { type PrimitiveProps } from "@/Primitive";

export interface ToolbarSeparatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
const props = defineProps<ToolbarSeparatorProps>();
</script>

<template>
  <BaseSeparator :as-child="props.asChild" :as="as" />
</template>
