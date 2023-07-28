<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveH2, type PrimitiveProps } from "@/Primitive";
import { ALERT_DIALOG_INJECTION_KEY } from "./AlertDialogRoot.vue";

export interface AlertDialogTitleProps extends PrimitiveProps {}
const props = defineProps<AlertDialogTitleProps>();

const injectedValue = inject(ALERT_DIALOG_INJECTION_KEY);
</script>

<template>
  <PrimitiveH2 v-bind="props" :id="injectedValue?.titleId">
    <slot />
  </PrimitiveH2>
</template>
