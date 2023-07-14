<script lang="ts">
export interface SelectGroupRootProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveDiv } from "@/Primitive";

const props = defineProps<SelectGroupRootProps>();
</script>

<template>
  <PrimitiveDiv
    :as-child="props.asChild"
    ref="primitiveElement"
    role="group"
    aria-label="group"
  >
    <slot />
  </PrimitiveDiv>
</template>
