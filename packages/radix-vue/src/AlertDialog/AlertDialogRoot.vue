<script setup lang="ts">
import {
  DialogRoot,
  type DialogRootProps,
  type DialogRootEmits,
} from "@/Dialog";
import { useEmitAsProps } from "@/shared";

export interface AlertDialogProps extends Omit<DialogRootProps, "modal"> {}
export type AlertDialogEmits = DialogRootEmits;

const props = defineProps<AlertDialogProps>();
const emits = defineEmits<AlertDialogEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <DialogRoot v-bind="{ ...props, ...emitsAsProps }" :modal="true">
    <slot />
  </DialogRoot>
</template>
