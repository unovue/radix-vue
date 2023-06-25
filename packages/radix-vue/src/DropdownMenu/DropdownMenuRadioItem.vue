<script setup lang="ts">
import type { Ref } from "vue";
import { ref, inject, provide, watchEffect, toRef } from "vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import {
  RADIO_GROUP_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./DropdownMenuRadioGroup.vue";

interface RadioGroupItemProps {
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
}

export type DropdownMenuCheckboxProvideValue = Readonly<Ref<boolean>>;

const radioInjectedValue = inject<RadioGroupProvideValue>(
  RADIO_GROUP_INJECTION_KEY
);
const injectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const props = defineProps<RadioGroupItemProps>();

const currentElement = ref<HTMLElement>();

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    handleCloseMenu();
  }
  const allToggleItem = injectedValue!.itemsArray;
  if (allToggleItem.length) {
    const currentTabIndex = allToggleItem.indexOf(currentElement.value!);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!injectedValue?.selectedElement.value) {
        injectedValue?.changeSelected(allToggleItem[0]);
      } else if (allToggleItem[currentTabIndex + 1]) {
        injectedValue?.changeSelected(allToggleItem[currentTabIndex + 1]);
      } else {
        injectedValue?.changeSelected(allToggleItem[0]);
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!injectedValue?.selectedElement.value) {
        injectedValue?.changeSelected(allToggleItem[allToggleItem.length - 1]);
      } else if (allToggleItem[currentTabIndex - 1]) {
        injectedValue?.changeSelected(allToggleItem[currentTabIndex - 1]);
      } else {
        injectedValue?.changeSelected(allToggleItem[allToggleItem.length - 1]);
      }
    }

    if (e.keyCode === 32 || e.key === "Enter") {
      if (injectedValue?.selectedElement.value) {
        updateModelValue();
      }
    }
  }
}

watchEffect(() => {
  if (injectedValue?.selectedElement.value === currentElement.value) {
    currentElement.value?.focus();
  }
});

function handleHover() {
  if (!props.disabled) {
    injectedValue!.changeSelected(currentElement.value!);
  }
}

function handleCloseMenu() {
  injectedValue?.hideTooltip();
  document.querySelector("body")!.style.pointerEvents = "";
  setTimeout(() => {
    injectedValue?.triggerElement.value?.focus();
  }, 0);
}

function updateModelValue() {
  return radioInjectedValue?.changeModelValue(props.value);
}

provide<DropdownMenuCheckboxProvideValue>(
  "modelValue",
  toRef(() => radioInjectedValue?.modelValue?.value === props.value)
);
</script>

<template>
  <div
    role="menuitemradio"
    :data-state="
      radioInjectedValue?.modelValue?.value === props.value ? 'on' : 'off'
    "
    @click.prevent="updateModelValue"
    @mouseenter="handleHover"
    @mouseleave="injectedValue!.changeSelected(null)"
    ref="currentElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
    :data-radix-vue-radio-value="props.value"
    :data-highlighted="
      injectedValue?.selectedElement.value === currentElement ? '' : null
    "
    :aria-disabled="props.disabled ? true : undefined"
    :data-disabled="props.disabled ? '' : undefined"
    :data-orientation="injectedValue?.orientation"
    :tabindex="
      injectedValue?.selectedElement.value === currentElement ? '0' : '-1'
    "
  >
    <slot />
  </div>
</template>
