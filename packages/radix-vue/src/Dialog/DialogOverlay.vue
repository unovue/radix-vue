<script lang="ts">
export interface DialogOverlayProps {
  asChild?: boolean;
}
</script>
<script setup lang="ts">
import { inject } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import { PrimitiveDiv } from "../Primitive";

const props = withDefaults(defineProps<DialogOverlayProps>(), {
  asChild: false,
});

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);
</script>

<template>
  <PrimitiveDiv
    :asChild="props.asChild ? '' : undefined"
    v-if="injectedValue?.open.value"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    style="pointer-events: auto"
    data-aria-hidden="true"
    aria-hidden="true"
    @click="injectedValue?.closeModal"
  >
    <slot />
  </PrimitiveDiv>
</template>
