<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { ALERT_DIALOG_INJECTION_KEY } from "./AlertDialogRoot.vue";

export interface AlertDialogCancelProps extends PrimitiveProps {}
const props = withDefaults(defineProps<AlertDialogCancelProps>(), {
  as: "button",
});

const injectedValue = inject(ALERT_DIALOG_INJECTION_KEY);
</script>

<template>
  <Primitive
    v-bind="props"
    :type="props.as === 'button' ? 'button' : undefined"
    @click="injectedValue?.closeModal()"
  >
    <slot />
  </Primitive>
</template>
