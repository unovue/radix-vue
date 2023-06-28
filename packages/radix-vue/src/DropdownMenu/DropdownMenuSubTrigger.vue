<script lang="ts">
export interface DropdownMenuSubTriggerProps {
  asChild?: boolean;
  disabled?: boolean;
  textValue?: string;
}
</script>

<script setup lang="ts">
import { inject, ref, onMounted, computed, watchEffect } from "vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import {
  DROPDOWN_MENU_SUB_INJECTION_KEY,
  type DropdownMenuSubProvideValue,
} from "./DropdownMenuSub.vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";

const rootInjectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const injectedValue = inject<DropdownMenuSubProvideValue>(
  DROPDOWN_MENU_SUB_INJECTION_KEY
);

const triggerElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
  injectedValue.subTrigger = triggerElement.value.$el;
});

function handleClick() {
  if (injectedValue?.modelValue.value) {
    injectedValue?.hideTooltip();
  } else {
    injectedValue?.showTooltip();
  }
}

function handleHorizontalKeydown(e: KeyboardEvent) {
  if (e.key === "ArrowRight") {
    return injectedValue?.showTooltip();
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
  <BaseMenuItem
    ref="triggerElement"
    :rootProvider="rootInjectedValue"
    :aria-expanded="injectedValue?.modelValue.value ?? false"
    :data-state="dataState"
    @handle-click="handleClick"
    @mouseover="handleMouseover"
    @horizontal-keydown="handleHorizontalKeydown"
    :data-orientation="rootInjectedValue?.orientation"
    aria-haspopup="menu"
  >
    <slot />
  </BaseMenuItem>
</template>
