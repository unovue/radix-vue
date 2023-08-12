<script setup lang="ts">
import {
  DialogRoot,
  type DialogRootProps,
  type DialogRootEmits,
} from "@/Dialog";

interface AlertDialogProps extends Omit<DialogRootProps, "modal"> {}

const props = defineProps<AlertDialogProps>();
const emits = defineEmits<DialogRootEmits>();
</script>

<template>
  <DialogRoot v-bind="props" :modal="true">
    <slot />
  </DialogRoot>
</template>
