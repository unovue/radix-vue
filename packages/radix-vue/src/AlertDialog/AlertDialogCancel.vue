<script setup lang="ts">
import { DialogClose, type DialogCloseProps } from "@/Dialog";
import { ALERT_DIALOG_CONTENT_INJECTION_KEY } from "./AlertDialogContent.vue";
import { inject, onMounted } from "vue";
import { usePrimitiveElement } from "@/Primitive";

export interface AlertDialogCancelProps extends DialogCloseProps {}

const contentContext = inject(ALERT_DIALOG_CONTENT_INJECTION_KEY);
const { primitiveElement, currentElement } = usePrimitiveElement();

const props = defineProps<AlertDialogCancelProps>();

onMounted(() => {
  contentContext!.onCancelElementChange(currentElement.value);
});
</script>

<template>
  <DialogClose v-bind="props" ref="primitiveElement">
    <slot></slot>
  </DialogClose>
</template>
