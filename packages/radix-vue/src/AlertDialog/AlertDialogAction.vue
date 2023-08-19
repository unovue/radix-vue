<script setup lang="ts">
import { DialogClose, type DialogCloseProps } from "@/Dialog";

export interface AlertDialogActionProps extends DialogCloseProps {}

const props = defineProps<AlertDialogActionProps>();
</script>

<template>
  <DialogClose v-bind="props">
    <slot></slot>
  </DialogClose>
</template>
