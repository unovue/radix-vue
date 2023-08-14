<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { inject } from "vue";
import { DIALOG_INJECTION_KEY } from "./DialogRoot.vue";

export interface DialogTitleProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogTitleProps>(), { as: "h2" });

const context = inject(DIALOG_INJECTION_KEY);
</script>

<template>
  <Primitive v-bind="props" :id="context?.descriptionId">
    <slot />
  </Primitive>
</template>
