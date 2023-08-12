<script setup lang="ts">
import { inject, provide } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  SELECT_INJECTION_KEY,
  type SelectProvideValue,
} from "./SelectRoot.vue";
import { SELECT_ITEM_SYMBOL } from "./utils";
import { type PrimitiveProps } from "@/Primitive";

export interface SelectItemProps extends PrimitiveProps {
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

function handleClick() {
  rootInjectedValue?.changeModelValue(props.value);
  return rootInjectedValue?.hideTooltip();
}

provide<SelectItemProvideValue>(SELECT_ITEM_SYMBOL, {
  value: props.value,
});
</script>

<template>
  <BaseMenuItem
    :disabled="props.disabled"
    :rootProvider="rootInjectedValue"
    :orientation="rootInjectedValue?.orientation"
    :data-radix-vue-radio-value="props.value"
    :as-child="props.asChild"
    :as="as"
    @handle-click="handleClick"
    @escape-keydown="rootInjectedValue?.hideTooltip()"
    role="option"
    :data-state="
      rootInjectedValue?.modelValue?.value === props.value
        ? 'checked'
        : 'unchecked'
    "
  >
    <slot />
  </BaseMenuItem>
</template>
