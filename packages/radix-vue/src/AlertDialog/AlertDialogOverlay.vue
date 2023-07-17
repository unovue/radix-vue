<script lang="ts">
export interface AlertDialogOverlayProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./AlertDialogRoot.vue";
import { PrimitiveDiv, type PrimitiveProps } from "../Primitive";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const props = defineProps<AlertDialogOverlayProps>();
</script>

<template>
  <PrimitiveDiv
    v-if="injectedValue?.open.value"
    :as-child="props.asChild"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    style="pointer-events: auto"
    data-aria-hidden="true"
    aria-hidden="true"
    @click="injectedValue?.closeModal"
  >
    <slot />
  </PrimitiveDiv>
</template>
