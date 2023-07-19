<script setup lang="ts">
import { inject } from "vue";
import { CollapsibleTrigger } from "../Collapsible/";
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

const props = withDefaults(defineProps<{ asChild?: boolean }>(), {
  asChild: false,
});
</script>

<template>
  <CollapsibleTrigger
    :as-child="props.asChild"
    :aria-disabled="injectedItem?.disabled.value || undefined"
    :data-disabled="injectedItem?.dataDisabled.value"
    :aria-controls="injectedItem?.triggerId"
    :data-orientation="injectedRoot?.orientation"
    :data-state="injectedItem?.dataDisabled.value"
    :id="injectedItem?.triggerId"
  >
    <slot />
  </CollapsibleTrigger>
</template>
