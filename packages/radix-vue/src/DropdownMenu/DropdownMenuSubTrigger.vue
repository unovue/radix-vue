<script lang="ts">
export interface DropdownMenuSubTriggerProps extends PrimitiveProps {
  disabled?: boolean;
  textValue?: string;
}
</script>

<script setup lang="ts">
import { onMounted, computed, nextTick } from "vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import {
  DROPDOWN_MENU_SUB_INJECTION_KEY,
  type DropdownMenuSubProvideValue,
} from "./DropdownMenuSub.vue";
import { PopperAnchor } from "@/Popper";
import { usePrimitiveElement, type PrimitiveProps } from "@/Primitive";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import { injectSafely } from "@/shared/injectSafely";

const rootInjectedValue = injectSafely<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const injectedValue = injectSafely<DropdownMenuSubProvideValue>(
  DROPDOWN_MENU_SUB_INJECTION_KEY
);

const props = defineProps<DropdownMenuSubTriggerProps>();
const { primitiveElement, currentElement } = usePrimitiveElement();

onMounted(() => {
  if (!injectedValue) return;

  injectedValue.triggerElement.value = currentElement.value;
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
  }
}

const dataState = computed(() => {
  return injectedValue?.modelValue?.value ? "open" : "closed";
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
      :aria-expanded="injectedValue?.modelValue?.value"
      :aria-controls="injectedValue?.contentId"
      :data-state="dataState"
      :data-orientation="rootInjectedValue?.orientation"
      :as-child="props.asChild"
      aria-haspopup="menu"
      @handle-click="handleClick"
      @mouseover="handleMouseover"
      @horizontal-keydown="handleHorizontalKeydown"
    >
      <slot />
    </BaseMenuItem>
  </PopperAnchor>
</template>
