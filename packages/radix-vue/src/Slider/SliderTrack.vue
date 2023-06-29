<script lang="ts">
export interface SliderTrackProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveSpan } from "@/Primitive";

defineProps<SliderTrackProps>();
</script>

<template>
  <PrimitiveSpan :asChild="asChild">
    <slot />
  </PrimitiveSpan>
</template>
