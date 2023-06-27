<script setup lang="ts">
import { ref, inject, watchEffect } from "vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import { useArrowNavigation } from "../shared";

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
  const newSelectedElement = useArrowNavigation(
    e,
    currentElement.value!,
    null,
    { arrowKeyOptions: "vertical", itemsArray: rootInjectedValue!.itemsArray }
  );

  if (newSelectedElement) {
    rootInjectedValue?.changeSelected(newSelectedElement);
  }
  if (e.key === "Escape") {
    handleCloseMenu();
  }
  if (e.keyCode === 32 || e.key === "Enter") {
    if (rootInjectedValue?.selectedElement.value) {
      rootInjectedValue?.selectedElement.value.click();
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
