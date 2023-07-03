<script lang="ts" context="module">
import type { InjectionKey } from "vue";
import type { CollapsibleRootProps } from "../Collapsible";

export interface AccordionItemProps
  extends Omit<CollapsibleRootProps, "open" | "defaultOpen" | "onOpenChange"> {
  /**
   * Whether or not an accordion item is disabled from user interaction.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * A string value for the accordion item. All items within an accordion should use a unique value.
   */
  value: string;
}

export interface AccordionItemProvideValue {
  open?: boolean;
  disabled?: boolean;
  triggerId: string;
}

export const ACCORDION_ITEM_INJECTION_KEY =
  Symbol() as InjectionKey<AccordionItemProvideValue>;

export const ACCORDION_KEYS = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight",
];
</script>

<script setup lang="ts">
import { computed, inject, provide } from "vue";
import { CollapsibleRoot } from "../Collapsible";
import {
  ACCORDION_IMPL_INJECTION_KEY,
  type AccordionImplProvideValue,
  ACCORDION_VALUE_INJECTION_KEY,
  type AccordionValueProvideValue,
} from "./AccordionImpl.vue";

const props = defineProps<AccordionItemProps>();

const accordionImplInjectedValue = inject<AccordionImplProvideValue>(
  ACCORDION_IMPL_INJECTION_KEY
);
const accordionValueInjectedValue = inject<AccordionValueProvideValue>(
  ACCORDION_VALUE_INJECTION_KEY
);

const open = computed({
  get: () =>
    (props.value &&
      accordionValueInjectedValue?.modelValue.value.includes(props.value)) ||
    false,
  set: (open) => {
    if (open) {
      accordionValueInjectedValue?.onItemOpen(props.value);
    } else {
      accordionValueInjectedValue?.onItemClose(props.value);
    }
  },
});
const disabled = computed(
  () => accordionImplInjectedValue?.disabled || props.disabled
);

provide<AccordionItemProvideValue>(ACCORDION_ITEM_INJECTION_KEY, {
  open: open.value,
  disabled: disabled.value,
  triggerId: "1", // TODO
});

function getItems() {
  const collectionNode = accordionImplInjectedValue?.parentElement.value;
  if (!collectionNode) return [];
  const orderedNodes = Array.from(
    collectionNode.querySelectorAll("[data-radix-vue-collection-item]")
  );

  return orderedNodes as HTMLElement[];
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (!ACCORDION_KEYS.includes(event.key)) return;

  const isDirectionLTR = accordionImplInjectedValue?.direction === "ltr";
  const target = event.target as HTMLElement;
  const triggerCollection = getItems().filter(
    // (item) => !item.ref.current?.disabled
    // (item) => !item.disabled
    (item) => item
  );
  const triggerIndex = triggerCollection.findIndex(
    // (item) => item.ref.current === target
    (item) => item === target
  );
  const triggerCount = triggerCollection.length;

  if (triggerIndex === -1) return;

  // Prevents page scroll while user is navigating
  event.preventDefault();

  let nextIndex = triggerIndex;
  const homeIndex = 0;
  const endIndex = triggerCount - 1;

  const moveNext = () => {
    nextIndex = triggerIndex + 1;
    if (nextIndex > endIndex) {
      nextIndex = homeIndex;
    }
  };

  const movePrev = () => {
    nextIndex = triggerIndex - 1;
    if (nextIndex < homeIndex) {
      nextIndex = endIndex;
    }
  };

  switch (event.key) {
    case "Home":
      nextIndex = homeIndex;
      break;
    case "End":
      nextIndex = endIndex;
      break;
    case "ArrowRight":
      if (accordionImplInjectedValue?.orientation === "horizontal") {
        if (isDirectionLTR) {
          moveNext();
        } else {
          movePrev();
        }
      }
      break;
    case "ArrowDown":
      if (accordionImplInjectedValue?.orientation === "vertical") {
        moveNext();
      }
      break;
    case "ArrowLeft":
      if (accordionImplInjectedValue?.orientation === "horizontal") {
        if (isDirectionLTR) {
          movePrev();
        } else {
          moveNext();
        }
      }
      break;
    case "ArrowUp":
      if (accordionImplInjectedValue?.orientation === "vertical") {
        movePrev();
      }
      break;
  }

  const clampedIndex = nextIndex % triggerCount;
  triggerCollection[clampedIndex].focus();
};
</script>

<template>
  <CollapsibleRoot
    :data-orientation="accordionImplInjectedValue?.orientation"
    :data-state="open ? 'open' : 'closed'"
    :disabled="disabled"
    v-model:open="open"
    @keydown="handleKeyDown"
  >
    <slot />
  </CollapsibleRoot>
</template>
