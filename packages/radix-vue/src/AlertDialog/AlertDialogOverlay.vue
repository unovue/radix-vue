<script lang="ts">
export interface AlertDialogOverlayProps {
  asChild?: boolean;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./AlertDialogRoot.vue";
import { PrimitiveDiv } from "../Primitive";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const props = withDefaults(defineProps<AlertDialogOverlayProps>(), {
  asChild: false,
});
</script>

<template>
  <PrimitiveDiv
    :asChild="props.asChild"
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
