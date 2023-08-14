<script setup lang="ts">
import { DialogTitle, type DialogTitleProps } from "@/Dialog";

const props = defineProps<DialogTitleProps>();
</script>

<template>
  <DialogTitle v-bind="props">
    <slot></slot>
  </DialogTitle>
</template>
