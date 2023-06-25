<script setup lang="ts">
import { ref, inject, computed } from "vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";

interface ToggleGroupItemProps {
  value?: string;
}

const rootInjectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const props = defineProps<ToggleGroupItemProps>();

const currentElement = ref<HTMLElement | undefined>();

function handleKeydown(e: KeyboardEvent) {
  const allToggleItem = Array.from(
    rootInjectedValue.parentElement.value.querySelectorAll(
      "[data-radix-vue-collection-item]"
    )
  ) as HTMLElement[];
  if (allToggleItem.length) {
    const currentTabIndex = allToggleItem.indexOf(currentElement.value!);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (allToggleItem[currentTabIndex + 1]) {
        allToggleItem[currentTabIndex + 1].focus();
      } else {
        allToggleItem[0].focus();
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (allToggleItem[currentTabIndex - 1]) {
        allToggleItem[currentTabIndex - 1].focus();
      } else {
        allToggleItem[allToggleItem.length - 1].focus();
      }
    }
  }
}

function handleHover() {
  rootInjectedValue!.selectedElement.value = currentElement.value;
}
</script>

<template>
  <div
    role="menuitem"
    :data-state="state"
    ref="currentElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
    @hover="handleHover"
    :data-highlighted="
      rootInjectedValue?.selectedElement === currentElement ? '' : null
    "
    :tabindex="
      rootInjectedValue?.selectedElement === currentElement ? '0' : '-1'
    "
  >
    <slot />
  </div>
</template>
