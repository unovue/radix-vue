<script lang="ts">
export interface SliderTrackProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan, type PrimitiveProps } from "@/Primitive";
import { SLIDER_INJECTION_KEY } from "./SliderRoot.vue";

const injectedValue = inject(SLIDER_INJECTION_KEY);

const props = defineProps<SliderTrackProps>();
</script>

<template>
  <PrimitiveSpan
    :as-child="props.asChild"
    :data-disabled="injectedValue?.disabled"
    :data-orientation="injectedValue?.orientation"
  >
    <slot />
  </PrimitiveSpan>
</template>
