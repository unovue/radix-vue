<script setup lang="ts">
import { inject } from "vue";
import { CollapsibleTrigger } from "../Collapsible/";
import {
  ACCORDION_IMPL_INJECTION_KEY,
  type AccordionImplProvideValue,
  ACCORDION_COLLAPSIBLE_INJECTION_KEY,
  type AccordionCollapsibleProvideValue,
} from "./AccordionImpl.vue";
import {
  ACCORDION_ITEM_INJECTION_KEY,
  type AccordionItemProvideValue,
} from "./AccordionItem.vue";
import { useArrowNavigation } from "@/shared";

const accordionImplInjectedValue = inject<AccordionImplProvideValue>(
  ACCORDION_IMPL_INJECTION_KEY
);
const accordionItemInjectedValue = inject<AccordionItemProvideValue>(
  ACCORDION_ITEM_INJECTION_KEY
);
const accordionCollapsibleInjectedValue =
  inject<AccordionCollapsibleProvideValue>(ACCORDION_COLLAPSIBLE_INJECTION_KEY);

function changeTab() {
  // injectedValue?.changeModelValue(value);
  console.log("change tab");
}

function handleKeydown(e: KeyboardEvent) {
  console.log(e);
  // const newSelectedElement = useArrowNavigation(
  //   e,
  //   currentToggleElement.value!,
  //   injectedValue?.parentElement.value!,
  //   { arrowKeyOptions: "horizontal" }
  // );

  // if (newSelectedElement) {
  //   newSelectedElement.focus();
  //   changeTab(newSelectedElement?.getAttribute("data-radix-vue-tab-value")!);
  // }
}
</script>

<template>
  <CollapsibleTrigger
    data-radix-vue-collection-item
    :aria-disabled="
      (accordionItemInjectedValue?.open &&
        !accordionCollapsibleInjectedValue?.collapsible) ||
      undefined
    "
    :data-orientation="accordionImplInjectedValue?.orientation"
    :id="accordionItemInjectedValue?.triggerId"
    @click="changeTab()"
    @keydown="handleKeydown"
  >
    <slot />
  </CollapsibleTrigger>
</template>
