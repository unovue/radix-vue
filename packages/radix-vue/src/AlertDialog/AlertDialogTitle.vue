<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { ALERT_DIALOG_INJECTION_KEY } from "./AlertDialogRoot.vue";

export interface AlertDialogTitleProps extends PrimitiveProps {}
const props = withDefaults(defineProps<AlertDialogTitleProps>(), { as: "h2" });

const injectedValue = inject(ALERT_DIALOG_INJECTION_KEY);
</script>

<template>
  <Primitive v-bind="props" :id="injectedValue?.titleId">
    <slot />
  </Primitive>
</template>
