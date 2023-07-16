<script lang="ts">
import { type PrimitiveProps } from "@/Primitive";

export interface ContextMenuSubTriggerProps extends PrimitiveProps {
  disabled?: boolean;
  textValue?: string;
}
</script>

<script setup lang="ts">
import { inject, onMounted, computed, nextTick } from "vue";
import {
  CONTEXT_MENU_INJECTION_KEY,
  type ContextMenuProvideValue,
} from "./ContextMenuRoot.vue";
import {
  CONTEXT_MENU_SUB_INJECTION_KEY,
  type ContextMenuSubProvideValue,
} from "./ContextMenuSub.vue";
import { PopperAnchor } from "@/Popper";
import { usePrimitiveElement } from "@/Primitive";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";

const props = defineProps<ContextMenuSubTriggerProps>();

const rootInjectedValue = inject<ContextMenuProvideValue>(
  CONTEXT_MENU_INJECTION_KEY
);

const injectedValue = inject<ContextMenuSubProvideValue>(
  CONTEXT_MENU_SUB_INJECTION_KEY
);

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
      :as-child="props.asChild"
      :data-orientation="rootInjectedValue?.orientation"
      aria-haspopup="menu"
      @handle-click="handleClick"
      @mouseover="handleMouseover"
      @horizontal-keydown="handleHorizontalKeydown"
    >
      <slot />
    </BaseMenuItem>
  </PopperAnchor>
</template>
