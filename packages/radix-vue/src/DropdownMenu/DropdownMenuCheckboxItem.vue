<script setup lang="ts">
import type { Ref } from "vue";
import { ref, inject, watchEffect, provide, toRef } from "vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";

interface DropdownMenuCheckboxItemProps {
  modelValue?: boolean;
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
}

export type DropdownMenuCheckboxProvideValue = Readonly<Ref<boolean>>;
provide<DropdownMenuCheckboxProvideValue>(
  "modelValue",
  toRef(() => props.modelValue)
);

const injectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const props = defineProps<DropdownMenuCheckboxItemProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const currentElement = ref<HTMLElement | undefined>();

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
        updateModelValue(!props.modelValue);
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
    injectedValue!.changeSelected(currentElement.value);
  }
}

function handleCloseMenu() {
  injectedValue?.hideTooltip();
  document.querySelector("body").style.pointerEvents = "";
  setTimeout(() => {
    injectedValue.triggerElement.value.focus();
  }, 0);
}

function updateModelValue() {
  return emit("update:modelValue", !props.modelValue);
}

function handleClick() {
  updateModelValue();
}
</script>

<template>
  <div
    role="menuitem"
    ref="currentElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
    @click.prevent="handleClick"
    @mouseenter="handleHover"
    @mouseleave="injectedValue!.changeSelected(null)"
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
    <input
      type="checkbox"
      :id="props.id"
      :aria-valuenow="props.modelValue"
      v-bind="props.modelValue"
      @change="updateModelValue"
      :checked="props.modelValue"
      :name="props.name"
      aria-hidden="true"
      :disabled="props.disabled"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </div>
</template>
