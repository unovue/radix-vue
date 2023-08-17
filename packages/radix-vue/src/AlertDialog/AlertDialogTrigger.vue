<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps } from "@/Dialog";

const props = defineProps<DialogTriggerProps>();
</script>

<template>
  <DialogTrigger v-bind="props">
    <slot></slot>
  </DialogTrigger>
</template>
