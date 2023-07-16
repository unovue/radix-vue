<script lang="ts">
export interface DialogCloseProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveButton, type PrimitiveProps } from "../Primitive";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";

const props = withDefaults(defineProps<DialogCloseProps>(), {
  asChild: false,
});

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

function handleClick() {
  injectedValue?.closeModal();
}
</script>

<template>
  <PrimitiveButton
    type="button"
    v-bind="props"
    aria-label="Close"
    @click="handleClick"
  >
    <slot />
  </PrimitiveButton>
</template>
