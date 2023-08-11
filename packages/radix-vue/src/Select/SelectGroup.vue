<script lang="ts">
export interface SelectGroupRootProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";

const props = defineProps<SelectGroupRootProps>();
</script>

<template>
  <Primitive
    :as-child="props.asChild"
    :as="as"
    ref="primitiveElement"
    role="group"
    aria-label="group"
  >
    <slot />
  </Primitive>
</template>
