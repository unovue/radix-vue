<script setup lang="ts">
import { DialogTitle, type DialogTitleProps } from "@/Dialog";

export interface AlertDialogTitleProps extends DialogTitleProps {}

const props = defineProps<AlertDialogTitleProps>();
</script>

<template>
  <DialogTitle v-bind="props">
    <slot></slot>
  </DialogTitle>
</template>
