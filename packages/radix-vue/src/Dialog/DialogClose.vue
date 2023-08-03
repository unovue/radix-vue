<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";

export interface DialogCloseProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogCloseProps>(), {
  as: "button",
});

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

function handleClick() {
  injectedValue?.closeModal();
}
</script>

<template>
  <Primitive
    v-bind="props"
    :type="as === 'button' ? 'button' : undefined"
    aria-label="Close"
    @click="handleClick"
  >
    <slot />
  </Primitive>
</template>
