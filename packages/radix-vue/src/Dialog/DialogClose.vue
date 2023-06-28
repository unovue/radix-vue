<script lang="ts">
export interface DialogCloseProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveButton } from "../Primitive";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";

const props = withDefaults(defineProps<DialogCloseProps>(), {
  asChild: false,
});

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);
</script>

<template>
  <PrimitiveButton
    type="button"
    :asChild="props.asChild ? '' : undefined"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.closeModal"
  >
    <slot />
  </PrimitiveButton>
</template>
