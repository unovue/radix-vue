<script setup lang="ts">
import { inject, computed, provide } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  SELECT_INJECTION_KEY,
  type SelectProvideValue,
} from "./SelectRoot.vue";
import {
  RADIO_GROUP_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./SelectRadioGroup.vue";
import { SELECT_ITEM_SYMBOL } from "./utils";
import { type DropdownMenuProvideValue } from "../DropdownMenu";

interface RadioGroupItemProps {
  asChild?: boolean;
  value?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onSelect?: void;
  textValue?: string;
}

const rootInjectedValue =
  inject<DropdownMenuProvideValue>(SELECT_INJECTION_KEY);
const radioInjectedValue = inject<RadioGroupProvideValue>(
  RADIO_GROUP_INJECTION_KEY
);

const props = defineProps<RadioGroupItemProps>();

const radioDataState = computed(() => {
  return radioInjectedValue?.modelValue?.value === props.value ? "on" : "off";
});

function handleClick() {
  if (rootInjectedValue?.selectedElement.value) {
    radioInjectedValue?.changeModelValue(props.value!);
  }
  return rootInjectedValue?.hideTooltip();
}

const modelValue = computed(
  () => radioInjectedValue?.modelValue?.value === props.value
);
provide(SELECT_ITEM_SYMBOL, {
  modelValue,
});
</script>

<template>
  <BaseMenuItem
    :disabled="props.disabled"
    :rootProvider="rootInjectedValue"
    :orientation="rootInjectedValue?.orientation"
    :data-radix-vue-radio-value="props.value"
    @handle-click="handleClick"
    @click="handleClick"
    role="menuitemradio"
    :data-state="radioDataState"
  >
    <slot />
  </BaseMenuItem>
</template>
