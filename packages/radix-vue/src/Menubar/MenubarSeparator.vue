<script lang="ts">
import BaseSeparator from "../shared/component/BaseSeparator.vue";
import type { DataOrientation } from "../shared/types";
import { type PrimitiveProps } from "@/Primitive";

export interface MenubarSeparatorProps extends PrimitiveProps {
  orientation?: DataOrientation;
  decorative?: boolean;
}
</script>

<script setup lang="ts">
const props = defineProps<MenubarSeparatorProps>();
</script>

<template>
  <BaseSeparator v-bind="props" />
</template>
