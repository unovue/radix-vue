<script setup lang="ts">
import { inject, ref, onMounted, watchEffect } from "vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import {
  DROPDOWN_MENU_SUB_INJECTION_KEY,
  type DropdownMenuSubProvideValue,
} from "./DropdownMenuSub.vue";
import { useArrowNavigation } from "../shared";

const rootInjectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const injectedValue = inject<DropdownMenuSubProvideValue>(
  DROPDOWN_MENU_SUB_INJECTION_KEY
);

const triggerElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});

function handleClick() {
  if (injectedValue?.modelValue.value) {
    injectedValue?.hideTooltip();
  } else {
    injectedValue?.showTooltip();
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "ArrowRight") {
    console.log("arrow right!");
    return injectedValue?.showTooltip();
  }
  const newSelectedElement = useArrowNavigation(
    e,
    triggerElement.value!,
    null,
    {
      arrowKeyOptions: "vertical",
      itemsArray: rootInjectedValue!.itemsArray,
    }
  );

  if (newSelectedElement) {
    rootInjectedValue?.changeSelected(newSelectedElement);
  }
  if (e.key === "Escape") {
    console.log("handleclosemenu");
    //handleCloseMenu();
  }
  if (e.keyCode === 32 || e.key === "Enter") {
    if (rootInjectedValue?.selectedElement.value) {
      rootInjectedValue?.selectedElement.value.click();
    }
  }
}

watchEffect(() => {
  if (rootInjectedValue?.selectedElement.value === triggerElement.value) {
    triggerElement.value?.focus();
  }
});

function handleHover() {
  rootInjectedValue!.changeSelected(triggerElement.value!);
}
</script>

<template>
  <div
    ref="triggerElement"
    data-radix-vue-collection-item
    :aria-expanded="injectedValue?.modelValue.value ?? false"
    :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
    @mouseenter="handleHover"
    @mouseleave="rootInjectedValue!.changeSelected(null)"
    @click="handleClick"
    @keydown="handleKeydown"
    :data-highlighted="
      rootInjectedValue?.selectedElement.value === triggerElement ? '' : null
    "
    :data-orientation="rootInjectedValue?.orientation"
    :tabindex="
      rootInjectedValue?.selectedElement.value === triggerElement ? '0' : '-1'
    "
    aria-haspopup="menu"
  >
    <slot />
  </div>
</template>
