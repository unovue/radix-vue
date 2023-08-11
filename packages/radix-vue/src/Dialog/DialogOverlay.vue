<script setup lang="ts">
import { inject } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";

export interface DialogOverlayProps extends PrimitiveProps {}
const props = defineProps<DialogOverlayProps>();

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);
</script>

<template>
  <Primitive
    v-bind="props"
    v-if="injectedValue?.open.value"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    style="pointer-events: auto"
    data-aria-hidden="true"
    aria-hidden="true"
  >
    <slot />
  </Primitive>
</template>
