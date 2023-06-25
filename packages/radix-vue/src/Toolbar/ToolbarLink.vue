<script setup lang="ts">
import { ref, inject } from "vue";
import {
  TOOLBAR_INJECTION_KEY,
  type ToolbarProvideValue,
} from "./ToolbarRoot.vue";

const injectedValue = inject<ToolbarProvideValue>(TOOLBAR_INJECTION_KEY);

const currentElement = ref<HTMLElement | undefined>();

function handleKeydown(e: KeyboardEvent) {
  const allToggleItem = Array.from(
    injectedValue!.parentElement!.value!.querySelectorAll(
      "[data-radix-vue-collection-item]"
    )
  ) as HTMLElement[];
  if (allToggleItem.length) {
    const currentTabIndex = allToggleItem.indexOf(currentElement.value!);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (allToggleItem[currentTabIndex + 1]) {
        allToggleItem[currentTabIndex + 1].focus();
      } else {
        allToggleItem[0].focus();
      }
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (allToggleItem[currentTabIndex - 1]) {
        allToggleItem[currentTabIndex - 1].focus();
      } else {
        allToggleItem[allToggleItem.length - 1].focus();
      }
    }
  }
}
</script>

<template>
  <a
    ref="currentElement"
    :tabindex="
      injectedValue?.activeElement.value === currentElement ? '0' : '-1'
    "
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </a>
</template>
