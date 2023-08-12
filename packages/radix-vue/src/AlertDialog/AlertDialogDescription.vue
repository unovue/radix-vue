<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps } from "@/Dialog";

const props = defineProps<DialogDescriptionProps>();
</script>

<template>
  <DialogDescription v-bind="props">
    <slot></slot>
  </DialogDescription>
</template>
