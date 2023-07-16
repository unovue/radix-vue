<script lang="ts">
import { PrimitiveButton, type PrimitiveProps } from "@/Primitive";

export interface AlertDialogActionProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./AlertDialogRoot.vue";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const props = defineProps<AlertDialogActionProps>();
</script>

<template>
  <PrimitiveButton
    type="button"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    :as-child="props.asChild"
    @click="injectedValue?.closeModal"
  >
    <slot />
  </PrimitiveButton>
</template>
