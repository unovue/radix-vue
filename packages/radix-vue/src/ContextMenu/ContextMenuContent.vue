<script lang="ts">
import type { InjectionKey, Ref } from "vue";
import type { Side, MiddlewareData } from "@floating-ui/dom";

export const CONTEXT_MENU_CONTENT_INJECTION_KEY =
  Symbol() as InjectionKey<ContextMenuContentProvideValue>;

export type ContextMenuContentProvideValue = {
  middlewareData: Ref<MiddlewareData>;
  floatPosition: Ref<Side>;
};
</script>

<script setup lang="ts">
import { onMounted, inject, ref, watchEffect, provide } from "vue";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  arrow,
} from "@floating-ui/vue";
import { useClickOutside } from "../shared/useClickOutside";
import {
  CONTEXT_MENU_INJECTION_KEY,
  type ContextMenuProvideValue,
} from "./ContextMenuRoot.vue";

const injectedValue = inject<ContextMenuProvideValue>(
  CONTEXT_MENU_INJECTION_KEY
);

const props = defineProps({
  class: String,
});

const tooltipContentElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.floatingElement.value = tooltipContentElement.value;
});

const clientX = ref(0);
const clientY = ref(0);

const virtualEl = {
  getBoundingClientRect() {
    return {
      width: 0,
      height: 0,
      x: injectedValue?.clientX.value,
      y: injectedValue?.clientY.value,
      top: injectedValue?.clientY.value,
      left: injectedValue?.clientX.value,
      right: injectedValue?.clientX.value,
      bottom: injectedValue?.clientY.value,
    };
  },
};

const {
  floatingStyles,
  middlewareData,
  placement: floatPosition,
} = useFloating(injectedValue!.triggerElement, tooltipContentElement, {
  middleware: [
    offset({ mainAxis: 5, alignmentAxis: 4 }),
    flip({
      fallbackPlacements: ["left-start"],
    }),
    shift({ padding: 10 }),
  ],
  placement: "right-start",
  strategy: "fixed",
  whileElementsMounted: autoUpdate,
});

watchEffect(() => {
  if (tooltipContentElement.value) {
    if (injectedValue?.modelValue.value) {
      setTimeout(() => {
        focusFirstRadixElement();
        fillItemsArray();
      }, 0);

      window.addEventListener("mousedown", closeDialogWhenClickOutside);
      window.addEventListener("scroll", closeDialogWhenScrolled);
    }
  }
});

function closeDialogWhenClickOutside(e: MouseEvent) {
  if (tooltipContentElement.value) {
    const clickOutside = useClickOutside(e, tooltipContentElement.value);
    if (clickOutside) {
      injectedValue?.hideTooltip();
      window.removeEventListener("mousedown", closeDialogWhenClickOutside);
    }
  }
}

function closeDialogWhenScrolled() {
  injectedValue?.hideTooltip();
  window.removeEventListener("scroll", closeDialogWhenScrolled);
}

function focusFirstRadixElement() {
  if (!tooltipContentElement.value) {
    return console.log("tooltipContentElement not found!");
  }
  const allToggleItem = Array.from(
    tooltipContentElement.value.querySelectorAll(
      "[data-radix-vue-collection-item]"
    )
  ) as HTMLElement[];
  if (allToggleItem.length) {
    injectedValue!.selectedElement.value = allToggleItem[0];
    allToggleItem[0].focus();
  }
}

function fillItemsArray() {
  if (!tooltipContentElement.value) {
    return console.log("tooltipContentElement not found!");
  }
  const allToggleItem = Array.from(
    tooltipContentElement.value.querySelectorAll(
      "[data-radix-vue-collection-item]:not([data-disabled])"
    )
  ) as HTMLElement[];
  injectedValue!.itemsArray = allToggleItem;
}

provide<ContextMenuContentProvideValue>(CONTEXT_MENU_CONTENT_INJECTION_KEY, {
  middlewareData: middlewareData,
  floatPosition: floatPosition as Ref<Side>,
});
</script>

<template>
  <div
    ref="tooltipContentElement"
    v-if="injectedValue?.modelValue.value"
    style="min-width: max-content; will-change: transform; z-index: auto"
    :style="floatingStyles"
  >
    <div
      :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
      data-side="bottom"
      role="tooltip"
      :class="props.class"
      style="pointer-events: auto"
    >
      <slot />
    </div>
  </div>
</template>
