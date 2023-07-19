<script setup lang="ts">
import { PrimitiveH3, type PrimitiveProps } from "@/Primitive";
import { inject } from "vue";

interface AccordionHeaderProps extends PrimitiveProps {}

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

const props = defineProps<AccordionHeaderProps>();
</script>

<template>
  <PrimitiveH3
    :as-child="props.asChild"
    :data-orientation="injectedRoot?.orientation"
    :data-state="injectedItem?.dataState.value"
    :data-disabled="injectedItem?.dataDisabled.value"
  >
    <slot />
  </PrimitiveH3>
</template>
