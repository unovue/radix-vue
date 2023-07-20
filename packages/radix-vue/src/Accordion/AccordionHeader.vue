<script setup lang="ts">
import { PrimitiveH3, type PrimitiveProps } from "@/Primitive";
import { inject } from "vue";
import { ACCORDION_ITEM_INJECTION_KEY } from "./AccordionItem.vue";
import { ACCORDION_INJECTION_KEY } from "./AccordionRoot.vue";

interface AccordionHeaderProps extends PrimitiveProps {}

const props = defineProps<AccordionHeaderProps>();

const injectedRoot = inject(ACCORDION_INJECTION_KEY);
const injectedItem = inject(ACCORDION_ITEM_INJECTION_KEY);
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
