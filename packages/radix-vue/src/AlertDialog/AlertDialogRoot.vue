<script setup lang="ts">
import {
  DialogRoot,
  type DialogRootProps,
  type DialogRootEmits,
} from "@/Dialog";
import { useEmitAsProps } from "@/shared";

interface AlertDialogProps extends Omit<DialogRootProps, "modal"> {}

const props = defineProps<AlertDialogProps>();
const emits = defineEmits<DialogRootEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <DialogRoot v-bind="{ ...props, ...emitsAsProps }" :modal="true">
    <slot />
  </DialogRoot>
</template>
