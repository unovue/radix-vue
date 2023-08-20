<script setup lang="ts">
import { DialogPortal, type DialogPortalProps } from "@/Dialog";

export interface AlertDialogPortalProps extends DialogPortalProps {}

const props = defineProps<AlertDialogPortalProps>();
</script>

<template>
  <DialogPortal v-bind="props">
    <slot></slot>
  </DialogPortal>
</template>
