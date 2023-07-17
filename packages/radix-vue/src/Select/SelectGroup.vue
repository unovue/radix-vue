<script lang="ts">
export interface SelectGroupRootProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";

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
