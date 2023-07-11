<script setup lang="ts">
import type { Ref } from "vue";
import { inject, provide, watchEffect, toRef } from "vue";
import {
  CONTEXT_MENU_INJECTION_KEY,
  type ContextMenuProvideValue,
} from "./ContextMenuRoot.vue";
import {
  RADIO_GROUP_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./ContextMenuRadioGroup.vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";

interface RadioGroupItemProps {
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
}

export type ContextMenuCheckboxProvideValue = Readonly<Ref<boolean>>;

const radioInjectedValue = inject<RadioGroupProvideValue>(
  RADIO_GROUP_INJECTION_KEY
);
const injectedValue = inject<ContextMenuProvideValue>(
  CONTEXT_MENU_INJECTION_KEY
);

const props = defineProps<RadioGroupItemProps>();

const { primitiveElement, currentElement } = usePrimitiveElement();

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
}

function updateModelValue() {
  return radioInjectedValue?.changeModelValue(props.value);
}

provide<ContextMenuCheckboxProvideValue>(
  "modelValue",
  toRef(() => radioInjectedValue?.modelValue?.value === props.value)
);
</script>

<template>
  <PrimitiveDiv
    role="menuitemradio"
    :data-state="
      radioInjectedValue?.modelValue?.value === props.value ? 'on' : 'off'
    "
    @click.prevent="updateModelValue"
    @mouseenter="handleHover"
    @mouseleave="injectedValue!.changeSelected(undefined)"
    ref="primitiveElement"
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
  </PrimitiveDiv>
</template>
