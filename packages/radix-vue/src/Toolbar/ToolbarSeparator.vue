<script lang="ts">
import BaseSeparator from "../shared/component/BaseSeparator.vue";
import { type PrimitiveProps } from "@/Primitive";

export interface BaseSeparatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
const props = defineProps<BaseSeparatorProps>();
</script>

<template>
  <BaseSeparator :as-child="props.asChild" :as="as" />
</template>
