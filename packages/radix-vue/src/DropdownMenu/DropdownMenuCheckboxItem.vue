<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import { useVModel } from "@vueuse/core";
import { type PrimitiveProps } from "@/Primitive";

export type DropdownMenuCheckboxValue = {
  modelValue: Ref<boolean>;
};

export const DROPDOWN_CHECKBOX_ITEM_SYMBOL =
  Symbol() as InjectionKey<DropdownMenuCheckboxValue>;

interface DropdownMenuCheckboxItemProps extends PrimitiveProps {
  checked?: boolean;
  //onCheckedChange?: void;
  modelValue?: boolean;
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  onSelect?: void;
  textValue?: string;
}
</script>

<script setup lang="ts">
import { computed, provide } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import { injectSafely } from "./utils";
import { Components } from "./constants";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";

const injectedValue = injectSafely<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY,
  Components.ROOT
);

const props = defineProps<DropdownMenuCheckboxItemProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

defineExpose({ providerName: Components.CHECKBOX_ITEM });

const modelValue = useVModel(props, "modelValue", emit, {
  passive: true,
});

const checkboxDataState = computed(() => {
  return modelValue.value ? "checked" : "unchecked";
});

function handleClick() {
  modelValue.value = !modelValue.value;
}
function handleEscape() {
  injectedValue?.hideTooltip();
}

provide(DROPDOWN_CHECKBOX_ITEM_SYMBOL, {
  modelValue,
});
</script>

<template>
  <BaseMenuItem
    ref="currentElement"
    :disabled="props.disabled"
    :rootProvider="injectedValue"
    :orientation="injectedValue?.orientation"
    @handle-click="handleClick"
    @escape-keydown="handleEscape"
    role="menuitemcheckbox"
    :data-state="checkboxDataState"
    :as-child="props.asChild"
    :aria-checked="props.modelValue ? true : false"
  >
    <input
      type="checkbox"
      :id="props.id"
      v-bind="props.modelValue"
      :checked="props.modelValue"
      :name="props.name"
      aria-hidden="true"
      :disabled="props.disabled"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </BaseMenuItem>
</template>
