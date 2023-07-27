<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveP, type PrimitiveProps } from "@/Primitive";
import { ALERT_DIALOG_INJECTION_KEY } from "./AlertDialogRoot.vue";

export interface AlertDialogDescriptionProps extends PrimitiveProps {}
const props = defineProps<AlertDialogDescriptionProps>();

const injectedValue = inject(ALERT_DIALOG_INJECTION_KEY);
</script>

<template>
  <PrimitiveP v-bind="props" :id="injectedValue?.descriptionId"
    ><slot
  /></PrimitiveP>
</template>
