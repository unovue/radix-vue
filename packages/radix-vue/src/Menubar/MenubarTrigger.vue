<script lang="ts">
export interface MenubarSubTriggerProps {
  asChild?: boolean;
  disabled?: boolean;
  textValue?: string;
}
</script>

<script setup lang="ts">
import { inject, onMounted, computed, nextTick, watchEffect, watch } from "vue";
import {
  MENUBAR_INJECTION_KEY,
  type MenubarProvideValue,
} from "./MenubarRoot.vue";
import {
  MENUBAR_SUB_INJECTION_KEY,
  type MenubarSubProvideValue,
} from "./MenubarMenu.vue";
import { PopperAnchor } from "@/Popper";
import { PrimitiveButton, usePrimitiveElement } from "@/Primitive";
import { useArrowNavigation } from "@/shared/useArrowNavigation";
import { useActiveElement } from "@vueuse/core";

const rootInjectedValue = inject<MenubarProvideValue>(MENUBAR_INJECTION_KEY);

const injectedValue = inject<MenubarSubProvideValue>(MENUBAR_SUB_INJECTION_KEY);

const props = defineProps<MenubarSubTriggerProps>();

const { primitiveElement, currentElement } = usePrimitiveElement();
const activeElement = useActiveElement();

onMounted(() => {
  injectedValue!.triggerElement.value = currentElement.value;
  rootInjectedValue!.triggerItemsArray.push(currentElement.value!);
});

async function openAndSelectFirstElement() {
  rootInjectedValue?.setIsOpen(true);

  await nextTick();
  const el = injectedValue?.itemsArray?.[0];
  console.log(el);
  rootInjectedValue!.selectedElement.value = el;
  el?.focus();
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    return handleCloseMenu();
  }
  if (e.keyCode === 32 || e.key === "Enter") {
    (e.target as HTMLElement).click();
    return;
  }
  if (e.key === "ArrowDown") {
    return openAndSelectFirstElement();
  }

  const newSelectedElement = useArrowNavigation(
    e,
    currentElement.value!,
    currentElement.value!.parentElement! as HTMLElement,
    {
      arrowKeyOptions: "horizontal",
    }
  );
  if (newSelectedElement) {
    rootInjectedValue?.changeSelected(newSelectedElement);
  }
}

function handleHover() {
  if (!props.disabled) {
    rootInjectedValue?.changeSelected(currentElement.value!);
  }
}

function handleCloseMenu() {
  rootInjectedValue?.setIsOpen(false);
  document.querySelector("body")!.style.pointerEvents = "";
  setTimeout(() => {
    rootInjectedValue?.triggerElement.value?.focus();
  }, 0);
}

function handleClick() {
  rootInjectedValue?.setIsOpen(true);
}

const dataState = computed(() => {
  return (
    rootInjectedValue?.triggerElement.value ===
      injectedValue?.triggerElement.value && rootInjectedValue?.isOpen.value
  );
});

const highlightedState = computed(() => {
  return (
    activeElement.value === currentElement.value ||
    (rootInjectedValue?.triggerElement.value === currentElement.value &&
      rootInjectedValue?.selectedElement.value)
  );
});

function handleMouseover() {
  return injectedValue?.showTooltip();
}

watchEffect(() => {
  if (rootInjectedValue?.selectedElement.value === currentElement.value) {
    rootInjectedValue!.triggerElement.value = currentElement.value;
  }
});

watch(
  activeElement,
  () => {
    if (activeElement.value === currentElement.value) {
      rootInjectedValue!.selectedElement.value = currentElement.value;
      rootInjectedValue!.triggerElement.value = currentElement.value;
    }
  },
  { immediate: true }
);
</script>

<template>
  <PopperAnchor asChild>
    <PrimitiveButton
      role="menuitem"
      ref="primitiveElement"
      :id="injectedValue?.triggerId"
      :aria-expanded="injectedValue?.modelValue.value"
      :aria-controls="injectedValue?.contentId"
      :data-state="dataState"
      :data-orientation="rootInjectedValue?.orientation"
      aria-haspopup="menu"
      @keydown.prevent="handleKeydown"
      data-radix-vue-collection-item
      @mouseenter="handleHover"
      @mouseover="handleMouseover"
      @click="handleClick"
      :data-highlighted="highlightedState ? '' : null"
      :aria-disabled="props.disabled ? true : undefined"
      :data-disabled="props.disabled ? '' : undefined"
      :tabindex="
        rootInjectedValue?.triggerElement.value === currentElement ? '0' : '-1'
      "
    >
      <slot />
    </PrimitiveButton>
  </PopperAnchor>
</template>
