<script setup lang="ts">
import { onMounted, inject, ref, watchEffect } from "vue";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  arrow,
} from "@floating-ui/vue";
import { useClickOutside } from "../shared/useClickOutside.ts";
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

const {
  floatingStyles,
  middlewareData,
  placement: floatPosition,
} = useFloating(injectedValue!.triggerElement, tooltipContentElement, {
  placement: "bottom",
  middleware: [
    offset(10),
    flip(),
    shift(),
    arrow({ element: injectedValue.arrowElement }),
  ],
  whileElementsMounted: autoUpdate,
});

watchEffect(() => {
  if (tooltipContentElement.value) {
    if (injectedValue.modelValue.value) {
      setTimeout(() => {
        document.querySelector("body")!.style.pointerEvents = "none";
        focusFirstRadixElement();
        fillItemsArray();
      }, 0);

      window.addEventListener("mousedown", closeDialogWhenClickOutside);
    } else {
      if (injectedValue.triggerElement.value) {
        handleCloseMenu();
      }
    }
  }
});

watchEffect(() => {
  if (middlewareData.value && middlewareData.value.arrow) {
    injectedValue!.updateMiddlewareData(middlewareData.value);
  }
});

watchEffect(() => {
  if (floatPosition.value) {
    injectedValue!.updateFloatPosition(floatPosition.value);
  }
});

function closeDialogWhenClickOutside(e: MouseEvent) {
  const clickOutside = useClickOutside(e, tooltipContentElement.value);
  if (clickOutside) {
    injectedValue.hideTooltip();
    window.removeEventListener("mousedown", closeDialogWhenClickOutside);
  }
}

function focusFirstRadixElement() {
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
  const allToggleItem = Array.from(
    tooltipContentElement.value.querySelectorAll(
      "[data-radix-vue-collection-item]:not([data-disabled])"
    )
  ) as HTMLElement[];
  injectedValue.itemsArray = allToggleItem;
}

function handleCloseMenu() {
  document.querySelector("body").style.pointerEvents = "";
  setTimeout(() => {
    injectedValue.triggerElement.value.focus();
  }, 0);
}
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
