<script lang="ts">
export interface SliderTrackProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";

const props = withDefaults(defineProps<SliderTrackProps>(), { as: "span" });
</script>

<template>
  <Primitive :as-child="props.asChild" :as="as">
    <slot />
  </Primitive>
</template>
