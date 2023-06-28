<script setup lang="ts">
import { ref, inject, watchEffect } from "vue";
import {
  CONTEXT_MENU_INJECTION_KEY,
  type ContextMenuProvideValue,
} from "./ContextMenuRoot.vue";
import { PrimitiveDiv } from "@/Primitive";

const injectedValue = inject<ContextMenuProvideValue>(
  CONTEXT_MENU_INJECTION_KEY
);

interface ToggleGroupItemProps {
  value?: string;
  disabled?: boolean;
}

const props = defineProps<ToggleGroupItemProps>();

const currentElement = ref<HTMLElement | undefined>();

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    handleCloseMenu();
  }
  const allToggleItem = injectedValue!.itemsArray;
  if (allToggleItem.length) {
    const currentTabIndex = allToggleItem.indexOf(currentElement.value!);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!injectedValue?.selectedElement.value) {
        injectedValue?.changeSelected(allToggleItem[0]);
      } else if (allToggleItem[currentTabIndex + 1]) {
        injectedValue?.changeSelected(allToggleItem[currentTabIndex + 1]);
      } else {
        injectedValue?.changeSelected(allToggleItem[0]);
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!injectedValue?.selectedElement.value) {
        injectedValue?.changeSelected(allToggleItem[allToggleItem.length - 1]);
      } else if (allToggleItem[currentTabIndex - 1]) {
        injectedValue?.changeSelected(allToggleItem[currentTabIndex - 1]);
      } else {
        injectedValue?.changeSelected(allToggleItem[allToggleItem.length - 1]);
      }
    }

    if (e.keyCode === 32 || e.key === "Enter") {
      if (injectedValue?.selectedElement.value) {
        injectedValue?.selectedElement.value.click();
      }
    }
  }
}

watchEffect(() => {
  if (injectedValue?.selectedElement.value === currentElement.value) {
    currentElement.value?.focus();
  }
});

function handleHover() {
  if (!props.disabled) {
    injectedValue!.changeSelected(currentElement.value);
  }
}

function handleCloseMenu() {
  injectedValue?.hideTooltip();
  document.querySelector("body").style.pointerEvents = "";
  setTimeout(() => {
    injectedValue.triggerElement.value.focus();
  }, 0);
}
</script>

<template>
  <PrimitiveDiv
    role="menuitem"
    ref="currentElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
    @mouseenter="handleHover"
    @mouseleave="injectedValue!.changeSelected(null)"
    :data-highlighted="
      injectedValue?.selectedElement.value === currentElement ? '' : null
    "
    :aria-disabled="props.disabled ? true : undefined"
    :data-disabled="props.disabled ? '' : undefined"
    :data-orientation="injectedValue?.orientation"
    :tabindex="
      injectedValue?.selectedElement.value === currentElement ? '0' : '-1'
    "
  >
    <slot />
  </PrimitiveDiv>
</template>
