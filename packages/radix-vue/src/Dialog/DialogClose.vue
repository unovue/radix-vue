<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { DIALOG_INJECTION_KEY } from "./DialogRoot.vue";

export interface DialogCloseProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogCloseProps>(), {
  as: "button",
});

const context = inject(DIALOG_INJECTION_KEY);
</script>

<template>
  <Primitive
    v-bind="props"
    :type="as === 'button' ? 'button' : undefined"
    aria-label="Close"
    @click="context?.onOpenChange(false)"
  >
    <slot />
  </Primitive>
</template>
