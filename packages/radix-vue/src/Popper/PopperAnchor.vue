<script setup lang="ts">
import { inject, watch } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import { POPPER_ROOT_KEY } from "./PopperRoot.vue";

const { primitiveElement, currentElement } = usePrimitiveElement();

const props = defineProps<{ asChild?: boolean; element?: HTMLElement }>();

const context = inject(POPPER_ROOT_KEY);

watch(currentElement, () => {
  context?.onAnchorChange(props.element ?? currentElement.value);
});
</script>

<template>
  <PrimitiveDiv :as-child="asChild" ref="primitiveElement">
    <slot></slot>
  </PrimitiveDiv>
</template>
