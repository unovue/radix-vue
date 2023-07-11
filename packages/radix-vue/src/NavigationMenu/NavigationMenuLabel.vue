<script lang="ts">
import { PrimitiveLabel } from "@/Primitive";

interface NavigationMenuLabelProps {
  asChild?: boolean;
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<NavigationMenuLabelProps>();
</script>

<template>
  <PrimitiveLabel :for="props.for"><slot /></PrimitiveLabel>
</template>
