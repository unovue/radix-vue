<script setup lang="ts">
import { inject, computed, provide } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  SELECT_INJECTION_KEY,
  type SelectProvideValue,
} from "./SelectRoot.vue";
import { SELECT_ITEM_SYMBOL } from "./utils";
import { type DropdownMenuProvideValue } from "@/DropdownMenu/DropdownMenuRoot.vue";

export interface SelectItemProps {
  asChild?: boolean;
  value: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onSelect?: void;
  textValue?: string;
}

export type SelectItemProvideValue = {
  value: string;
};

const rootInjectedValue = inject<SelectProvideValue>(SELECT_INJECTION_KEY);

const props = defineProps<SelectItemProps>();

const selectItemDataState = computed(() => {
  return rootInjectedValue?.modelValue?.value === props.value ? "on" : "off";
});

function handleClick() {
  rootInjectedValue?.changeModelValue(props.value);
  return handleEscape();
}

function handleEscape() {
  rootInjectedValue?.hideTooltip();
}

provide<SelectItemProvideValue>(SELECT_ITEM_SYMBOL, {
  value: props.value,
});
</script>

<template>
  <BaseMenuItem
    :disabled="props.disabled"
    :rootProvider="(rootInjectedValue as unknown as DropdownMenuProvideValue)"
    :orientation="rootInjectedValue?.orientation"
    :data-radix-vue-radio-value="props.value"
    @handle-click="handleClick"
    @escape-keydown="handleEscape"
    role="menuitemradio"
    :data-state="selectItemDataState"
  >
    <slot />
  </BaseMenuItem>
</template>
