<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { ALERT_DIALOG_INJECTION_KEY } from "./AlertDialogRoot.vue";

export interface AlertDialogDescriptionProps extends PrimitiveProps {}
const props = withDefaults(defineProps<AlertDialogDescriptionProps>(), {
  as: "p",
});

const injectedValue = inject(ALERT_DIALOG_INJECTION_KEY);
</script>

<template>
  <Primitive v-bind="props" :id="injectedValue?.descriptionId">
    <slot />
  </Primitive>
</template>
