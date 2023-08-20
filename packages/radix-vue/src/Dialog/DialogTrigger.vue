<script setup lang="ts">
import { inject, onMounted } from "vue";
import { DIALOG_INJECTION_KEY } from "./DialogRoot.vue";
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from "@/Primitive";

export interface DialogTriggerProps extends PrimitiveProps {}

const context = inject(DIALOG_INJECTION_KEY);
const { primitiveElement, currentElement } = usePrimitiveElement();

onMounted(() => {
  context!.triggerElement = currentElement;
});

const props = withDefaults(defineProps<DialogTriggerProps>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    ref="primitiveElement"
    v-bind="props"
    :type="as === 'button' ? 'button' : undefined"
    aria-haspopup="dialog"
    :aria-expanded="context?.open.value || false"
    :aria-controls="context?.contentId"
    :data-state="context?.open.value ? 'open' : 'closed'"
    @click="context?.onOpenToggle"
  >
    <slot />
  </Primitive>
</template>
