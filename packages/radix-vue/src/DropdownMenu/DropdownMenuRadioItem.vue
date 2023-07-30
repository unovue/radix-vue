<script lang="ts">
import type { InjectionKey, Ref } from "vue";

export type DropdownMenuRadioValue = {
  modelValue: Ref<boolean>;
};

export const DROPDOWN_RADIO_ITEM_SYMBOL =
  Symbol() as InjectionKey<DropdownMenuRadioValue>;
</script>

<script setup lang="ts">
import { computed, provide } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import {
  RADIO_GROUP_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./DropdownMenuRadioGroup.vue";
import { injectSafely } from "./utils";
import { Components } from "./constants";
import { type PrimitiveProps } from "@/Primitive";

interface RadioGroupItemProps extends PrimitiveProps {
  value?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onSelect?: void;
  textValue?: string;
}

const rootInjectedValue = injectSafely<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY,
  Components.ROOT
);

const radioInjectedValue = injectSafely<RadioGroupProvideValue>(
  RADIO_GROUP_INJECTION_KEY,
  Components.RADIO_GROUP
);

const props = defineProps<RadioGroupItemProps>();

defineExpose({ providerName: Components.RADIO_ITEM });

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

provide(DROPDOWN_RADIO_ITEM_SYMBOL, {
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
    @escape-keydown="handleEscape"
    @click="handleClick"
    role="menuitemradio"
    :data-state="radioDataState"
    :as-child="props.asChild"
  >
    <slot />
  </BaseMenuItem>
</template>
