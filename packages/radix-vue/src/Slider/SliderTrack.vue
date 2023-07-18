<script lang="ts">
export interface SliderTrackProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { PrimitiveSpan, type PrimitiveProps } from "@/Primitive";

const props = defineProps<SliderTrackProps>();
</script>

<template>
  <PrimitiveSpan :as-child="props.asChild">
    <slot />
  </PrimitiveSpan>
</template>
