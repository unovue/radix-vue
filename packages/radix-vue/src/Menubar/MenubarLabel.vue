<script lang="ts">
import { PrimitiveLabel, type PrimitiveProps } from "@/Primitive";

interface MenubarLabelProps extends PrimitiveProps {
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<MenubarLabelProps>();
</script>

<template>
  <PrimitiveLabel v-bind="props"><slot /></PrimitiveLabel>
</template>
