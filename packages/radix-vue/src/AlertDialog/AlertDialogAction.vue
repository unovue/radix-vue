<script setup lang="ts">
import { DialogClose, type DialogCloseProps } from "@/Dialog";

const props = defineProps<DialogCloseProps>();
</script>

<template>
  <DialogClose v-bind="props">
    <slot></slot>
  </DialogClose>
</template>
