<script setup lang="ts">
import { inject, computed, provide } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  SELECT_INJECTION_KEY,
  type SelectProvideValue,
} from "./SelectRoot.vue";
import { SELECT_ITEM_SYMBOL } from "./utils";
import { type DropdownMenuProvideValue } from "@/DropdownMenu/DropdownMenuRoot.vue";

interface SelectItemProps {
  asChild?: boolean;
  value?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onSelect?: void;
  textValue?: string;
}

const rootInjectedValue = inject<SelectProvideValue>(SELECT_INJECTION_KEY);

const props = defineProps<SelectItemProps>();

const radioDataState = computed(() => {
  return rootInjectedValue?.modelValue?.value === props.value ? "on" : "off";
});

function handleClick() {
  if (rootInjectedValue?.selectedElement.value) {
    rootInjectedValue?.setValue(props.value!);
  }
  return rootInjectedValue?.hideTooltip();
}

const modelValue = computed(
  () => rootInjectedValue?.modelValue?.value === props.value
);
provide(SELECT_ITEM_SYMBOL, {
  modelValue,
});

function handleEscape() {
  rootInjectedValue?.hideTooltip();
}
</script>

<template>
  <BaseMenuItem
    :disabled="props.disabled"
    :rootProvider="(rootInjectedValue as unknown as DropdownMenuProvideValue)"
    :orientation="rootInjectedValue?.orientation"
    :data-radix-vue-radio-value="props.value"
    @handle-click="handleClick"
    @click="handleClick"
    @escape-keydown="handleEscape"
    role="menuitemradio"
    :data-state="radioDataState"
  >
    <slot />
  </BaseMenuItem>
</template>
