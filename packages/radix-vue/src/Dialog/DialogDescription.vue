<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { inject } from "vue";
import { DIALOG_INJECTION_KEY } from "./DialogRoot.vue";

export interface DialogDescriptionProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogDescriptionProps>(), { as: "p" });

const context = inject(DIALOG_INJECTION_KEY);
</script>

<template>
  <Primitive v-bind="props" :id="context?.descriptionId"><slot /></Primitive>
</template>
