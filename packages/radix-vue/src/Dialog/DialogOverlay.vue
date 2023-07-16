<script lang="ts">
export interface DialogOverlayProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";

const props = withDefaults(defineProps<DialogOverlayProps>(), {
  asChild: false,
});

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);
</script>

<template>
  <PrimitiveDiv
    v-bind="props"
    v-if="injectedValue?.open.value"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    style="pointer-events: auto"
    data-aria-hidden="true"
    aria-hidden="true"
  >
    <slot />
  </PrimitiveDiv>
</template>
