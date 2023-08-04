<script setup lang="ts">
import { inject, watch } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { POPPER_ROOT_KEY } from "./PopperRoot.vue";

interface PopperAnchorProps extends PrimitiveProps {
  element?: HTMLElement;
}

const { primitiveElement, currentElement } = usePrimitiveElement();

const props = defineProps<PopperAnchorProps>();

const context = inject(POPPER_ROOT_KEY);

watch(currentElement, () => {
  context?.onAnchorChange(props.element ?? currentElement.value);
});
</script>

<template>
  <Primitive :as="as" :as-child="asChild" ref="primitiveElement">
    <slot></slot>
  </Primitive>
</template>
