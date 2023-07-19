<script setup lang="ts">
interface AccordionTriggerProps extends PrimitiveProps {}

import type { PrimitiveButton, PrimitiveProps } from "@/Primitive";
import { inject, onMounted, ref } from "vue";
import {
  ACCORDION_ITEM_INJECTION_KEY,
  type AccordionItemProvideValue,
} from "./AccordionItem.vue";
import {
  ACCORDION_INJECTION_KEY,
  type AccordionProvideValue,
} from "./AccordionRoot.vue";

const injectedRoot = inject<AccordionProvideValue>(ACCORDION_INJECTION_KEY);
const injectedItem = inject<AccordionItemProvideValue>(
  ACCORDION_ITEM_INJECTION_KEY
);

const props = defineProps<AccordionTriggerProps>();

const element = ref<HTMLElement>();

onMounted(() => {
  if (element.value) {
    injectedItem?.setTriggerElement(element.value);
  }
});
</script>

<template>
  <PrimitiveButton
    ref="element"
    :as-child="props.asChild"
    :aria-controls="injectedItem?.triggerId"
    :aria-disabled="injectedItem?.disabled.value || undefined"
    :aria-expanded="injectedItem?.open.value || false"
    :data-disabled="injectedItem?.dataDisabled.value"
    :data-orientation="injectedRoot?.orientation"
    :data-state="injectedItem?.dataState.value"
    :disabled="injectedItem?.disabled?.value"
    :id="injectedItem?.triggerId"
    @click="
      injectedItem && injectedRoot?.changeModelValue(injectedItem.value.value)
    "
  >
    <slot />
  </PrimitiveButton>
</template>
