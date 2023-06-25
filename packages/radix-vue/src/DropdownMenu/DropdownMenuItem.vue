<script setup lang="ts">
import { ref, inject, watchEffect } from "vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";

interface ToggleGroupItemProps {
  value?: string;
  disabled?: boolean;
}

const rootInjectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const props = defineProps<ToggleGroupItemProps>();

const currentElement = ref<HTMLElement | undefined>();

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    handleCloseMenu();
  }
  const allToggleItem = rootInjectedValue!.itemsArray;
  if (allToggleItem.length) {
    const currentTabIndex = allToggleItem.indexOf(currentElement.value!);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!rootInjectedValue?.selectedElement.value) {
        rootInjectedValue?.changeSelected(allToggleItem[0]);
      } else if (allToggleItem[currentTabIndex + 1]) {
        rootInjectedValue?.changeSelected(allToggleItem[currentTabIndex + 1]);
      } else {
        rootInjectedValue?.changeSelected(allToggleItem[0]);
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!rootInjectedValue?.selectedElement.value) {
        rootInjectedValue?.changeSelected(
          allToggleItem[allToggleItem.length - 1]
        );
      } else if (allToggleItem[currentTabIndex - 1]) {
        rootInjectedValue?.changeSelected(allToggleItem[currentTabIndex - 1]);
      } else {
        rootInjectedValue?.changeSelected(
          allToggleItem[allToggleItem.length - 1]
        );
      }
    }

    if (e.keyCode === 32 || e.key === "Enter") {
      if (rootInjectedValue?.selectedElement.value) {
        rootInjectedValue?.selectedElement.value.click();
      }
    }
  }
}

watchEffect(() => {
  if (rootInjectedValue?.selectedElement.value === currentElement.value) {
    currentElement.value?.focus();
  }
});

function handleHover() {
  if (!props.disabled) {
    rootInjectedValue!.changeSelected(currentElement.value);
  }
}

function handleCloseMenu() {
  rootInjectedValue?.hideTooltip();
  document.querySelector("body").style.pointerEvents = "";
  setTimeout(() => {
    rootInjectedValue.triggerElement.value.focus();
  }, 0);
}
</script>

<template>
  <div
    role="menuitem"
    ref="currentElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
    @mouseenter="handleHover"
    @mouseleave="rootInjectedValue!.changeSelected(null)"
    :data-highlighted="
      rootInjectedValue?.selectedElement.value === currentElement ? '' : null
    "
    :aria-disabled="props.disabled ? true : undefined"
    :data-disabled="props.disabled ? '' : undefined"
    :data-orientation="rootInjectedValue?.orientation"
    :tabindex="
      rootInjectedValue?.selectedElement.value === currentElement ? '0' : '-1'
    "
  >
    <slot />
  </div>
</template>
