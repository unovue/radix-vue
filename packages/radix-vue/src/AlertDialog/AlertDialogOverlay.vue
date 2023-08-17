<script setup lang="ts">
import { DialogOverlay, type DialogOverlayProps } from "@/Dialog";

const props = defineProps<DialogOverlayProps>();
</script>

<template>
  <DialogOverlay v-bind="props">
    <slot></slot>
  </DialogOverlay>
</template>
