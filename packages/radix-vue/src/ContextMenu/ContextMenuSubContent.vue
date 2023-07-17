<script lang="ts">
export type Boundary = Element | null | Array<Element | null>;

export interface ContextMenuSubContentProps
  extends PopperContentProps,
    PrimitiveProps {
  loop?: boolean; //false
  //onOpenAutoFocus?: void;
  //onCloseAutoFocus?: void;
  //onEscapeKeyDown?: void;
  //onPointerDownOutside?: void;
  //onInteractOutside?: void;
}
</script>

<script setup lang="ts">
import { inject, watchEffect, watch } from "vue";
import {
  PrimitiveDiv,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import {
  CONTEXT_MENU_INJECTION_KEY,
  type ContextMenuProvideValue,
} from "./ContextMenuRoot.vue";
import {
  CONTEXT_MENU_SUB_INJECTION_KEY,
  type ContextMenuSubProvideValue,
} from "./ContextMenuSub.vue";
import { PopperContent, type PopperContentProps } from "@/Popper";
import { useCollection } from "@/shared";
import { onClickOutside } from "@vueuse/core";

const rootInjectedValue = inject<ContextMenuProvideValue>(
  CONTEXT_MENU_INJECTION_KEY
);

const injectedValue = inject<ContextMenuSubProvideValue>(
  CONTEXT_MENU_SUB_INJECTION_KEY
);

const props = withDefaults(defineProps<ContextMenuSubContentProps>(), {
  side: "right",
  align: "start",
  orientation: "horizontal",
  avoidCollisions: true,
});

const { primitiveElement, currentElement: tooltipContentElement } =
  usePrimitiveElement();

const { createCollection } = useCollection();
createCollection(tooltipContentElement);

watchEffect(() => {
  if (tooltipContentElement.value) {
    if (injectedValue?.modelValue.value) {
      fillItemsArray();
    }
  }
});

watch(
  () => rootInjectedValue?.selectedElement.value,
  (n) => {
    if (!injectedValue?.modelValue.value) return;
    const siblingsElement = Array.from(
      n
        ?.closest('[role="tooltip"]')
        ?.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        ) ?? []
    ) as HTMLElement[];

    if (!siblingsElement?.length) return;
    if (siblingsElement.includes(injectedValue.triggerElement.value!)) {
      if (
        rootInjectedValue?.selectedElement.value !==
        injectedValue?.triggerElement.value
      ) {
        injectedValue?.hideTooltip();
      }
    }
  }
);

function fillItemsArray() {
  const allToggleItem = Array.from(
    tooltipContentElement.value!.querySelectorAll(
      "[data-radix-vue-collection-item]:not([data-disabled])"
    )
  ) as HTMLElement[];
  injectedValue!.itemsArray = allToggleItem;
  return allToggleItem;
}

onClickOutside(tooltipContentElement, (event) => {
  const target = event.target as HTMLElement;
  if (target.closest('[role="menuitem"]')) return;
  injectedValue?.hideTooltip();
});
</script>

<template>
  <PopperContent v-bind="props" v-if="injectedValue?.modelValue.value">
    <PrimitiveDiv
      ref="primitiveElement"
      :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
      :data-side="props.side"
      :data-align="props.align"
      :data-orientation="injectedValue.orientation"
      :aria-labelledby="injectedValue.triggerId"
      role="tooltip"
      :as-child="props.asChild"
      style="pointer-events: auto"
    >
      <slot />
    </PrimitiveDiv>
  </PopperContent>
</template>
