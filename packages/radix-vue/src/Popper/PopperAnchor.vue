<script setup lang="ts">
import { inject, watch } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import { POPPER_ROOT_KEY } from "./PopperRoot.vue";

const { primitiveElement, currentElement } = usePrimitiveElement();

defineProps<{ asChild?: boolean }>();

const context = inject(POPPER_ROOT_KEY);

watch(currentElement, () => {
  context?.onAnchorChange(currentElement.value);
});
</script>

<template>
  <PrimitiveDiv :as-child="asChild" ref="primitiveElement">
    <slot></slot>
  </PrimitiveDiv>
</template>
