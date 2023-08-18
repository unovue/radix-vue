<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps } from "@/Dialog";

export interface AlertDialogDescriptionProps extends DialogDescriptionProps {}

const props = defineProps<AlertDialogDescriptionProps>();
</script>

<template>
  <DialogDescription v-bind="props">
    <slot></slot>
  </DialogDescription>
</template>
