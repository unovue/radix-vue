<script lang="ts">
import { PrimitiveLabel } from "@/Primitive";

interface MenubarLabelProps {
  asChild?: boolean;
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<MenubarLabelProps>();
</script>

<template>
  <PrimitiveLabel :for="props.for"><slot /></PrimitiveLabel>
</template>
