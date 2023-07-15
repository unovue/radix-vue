<script lang="ts">
export interface MenubarSubTriggerProps {
  asChild?: boolean;
  disabled?: boolean;
  textValue?: string;
}
</script>

<script setup lang="ts">
import { inject, onMounted, computed, nextTick } from "vue";
import {
  MENUBAR_INJECTION_KEY,
  type MenubarProvideValue,
} from "./MenubarRoot.vue";
import {
  MENUBAR_SUB_INJECTION_KEY,
  type MenubarSubProvideValue,
} from "./MenubarSub.vue";
import { PopperAnchor } from "@/Popper";
import { usePrimitiveElement } from "@/Primitive";
import { useArrowNavigation } from "@/shared/useArrowNavigation";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";

const rootInjectedValue = inject<MenubarProvideValue>(MENUBAR_INJECTION_KEY);

const injectedValue = inject<MenubarSubProvideValue>(MENUBAR_SUB_INJECTION_KEY);

const { primitiveElement, currentElement } = usePrimitiveElement();

onMounted(() => {
  injectedValue!.triggerElement.value = currentElement.value;
});

async function openAndSelectFirstElement() {
  injectedValue?.showTooltip();

  await nextTick();
  const el = injectedValue?.itemsArray?.[0];
  rootInjectedValue!.selectedElement.value = el;
  el?.focus();
}

function handleClick() {
  if (!injectedValue?.modelValue.value) {
    openAndSelectFirstElement();
  }
}

async function handleHorizontalKeydown(e: KeyboardEvent) {
  if (e.key === "ArrowRight") {
    openAndSelectFirstElement();
  } else {
    const newSelectedElement = useArrowNavigation(
      e,
      rootInjectedValue?.triggerElement.value as HTMLElement,
      undefined,
      {
        arrowKeyOptions: "horizontal",
        itemsArray: rootInjectedValue?.triggerItemsArray,
      }
    );
    if (newSelectedElement) {
      rootInjectedValue?.changeSelected(newSelectedElement);
      newSelectedElement.focus();
      if (rootInjectedValue?.modelValue.value) {
        rootInjectedValue?.changeValue(newSelectedElement.id);
      }
    }
  }
}

const dataState = computed(() => {
  return injectedValue?.modelValue.value ? "open" : "closed";
});

function handleMouseover() {
  return injectedValue?.showTooltip();
}

function handleEscapeKeydown(e: KeyboardEvent) {
  rootInjectedValue!.changeValue(undefined);
  rootInjectedValue!.changeSelected(
    rootInjectedValue!.triggerElement.value as HTMLElement
  );
}
</script>

<template>
  <PopperAnchor asChild>
    <BaseMenuItem
      ref="primitiveElement"
      :id="injectedValue?.triggerId"
      :rootProvider="rootInjectedValue"
      :subProvider="injectedValue?.parentContext"
      :aria-expanded="injectedValue?.modelValue.value"
      :aria-controls="injectedValue?.contentId"
      :data-state="dataState"
      :data-orientation="rootInjectedValue?.orientation"
      aria-haspopup="menu"
      @handle-click="handleClick"
      @mouseover="handleMouseover"
      @horizontal-keydown="handleHorizontalKeydown"
      @escape-keydown="handleEscapeKeydown"
    >
      <slot />
    </BaseMenuItem>
  </PopperAnchor>
</template>
