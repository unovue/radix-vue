<script setup lang="ts">
import { inject, computed, provide } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  CONTEXT_MENU_INJECTION_KEY,
  type ContextMenuProvideValue,
} from "./ContextMenuRoot.vue";
import {
  RADIO_GROUP_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./ContextMenuRadioGroup.vue";
import { CONTEXT_MENU_ITEM_SYMBOL } from "./utils";
import { type PrimitiveProps } from "@/Primitive";

interface RadioGroupItemProps extends PrimitiveProps {
  value?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onSelect?: void;
  textValue?: string;
}

const rootInjectedValue = inject<ContextMenuProvideValue>(
  CONTEXT_MENU_INJECTION_KEY
);
const radioInjectedValue = inject<RadioGroupProvideValue>(
  RADIO_GROUP_INJECTION_KEY
);

const props = defineProps<RadioGroupItemProps>();

const radioDataState = computed(() => {
  return radioInjectedValue?.modelValue?.value === props.value ? "on" : "off";
});

function handleClick() {
  if (rootInjectedValue?.selectedElement.value) {
    return radioInjectedValue?.changeModelValue(props.value);
  }
}

function handleEscape() {
  rootInjectedValue?.hideTooltip();
}

const modelValue = computed(
  () => radioInjectedValue?.modelValue?.value === props.value
);
provide(CONTEXT_MENU_ITEM_SYMBOL, {
  modelValue,
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
    @escape-keydown="handleEscape"
    @click="handleClick"
    role="menuitemradio"
    :data-state="radioDataState"
  >
    <slot />
  </BaseMenuItem>
</template>
