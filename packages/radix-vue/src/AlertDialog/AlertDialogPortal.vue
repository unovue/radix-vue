<script setup lang="ts">
import { DialogPortal, type DialogPortalProps } from "@/Dialog";

const props = defineProps<DialogPortalProps>();
</script>

<template>
  <DialogPortal v-bind="props">
    <slot></slot>
  </DialogPortal>
</template>
