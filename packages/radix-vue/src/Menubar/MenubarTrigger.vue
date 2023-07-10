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
} from "./MenubarMenu.vue";
import { PopperAnchor } from "@/Popper";
import { usePrimitiveElement } from "@/Primitive";
import BaseMenuItem from "@/shared/component/BaseMenuItem.vue";
import { useArrowNavigation } from "@/shared/useArrowNavigation";
import { useCollection } from "@/shared/useCollection";

const rootInjectedValue = inject<MenubarProvideValue>(MENUBAR_INJECTION_KEY);

const injectedValue = inject<MenubarSubProvideValue>(MENUBAR_SUB_INJECTION_KEY);

const { getItems } = useCollection();
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

async function handleArrowDownKeydown(e: KeyboardEvent) {
  openAndSelectFirstElement();
}

function handleHorizontalKeydown(e: KeyboardEvent) {
  const newSelectedElement = useArrowNavigation(
    e,
    currentElement.value!,
    undefined,
    {
      arrowKeyOptions: "horizontal",
      itemsArray: getItems(),
    }
  );
  if (newSelectedElement) {
    rootInjectedValue?.changeSelected(newSelectedElement);
  }
}

const dataState = computed(() => {
  return injectedValue?.modelValue.value ? "open" : "closed";
});

function handleMouseover() {
  return injectedValue?.showTooltip();
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
      @arrow-down-keydown="handleArrowDownKeydown"
      @horizontal-keydown="handleHorizontalKeydown"
    >
      <slot />
    </BaseMenuItem>
  </PopperAnchor>
</template>
