<script lang="ts">
import { useVModel } from "@vueuse/core";
import { type PrimitiveProps } from "@/Primitive";

interface MenubarCheckboxItemProps extends PrimitiveProps {
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
import { inject, computed, provide } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import { useArrowNavigation } from "@/shared/useArrowNavigation";
import { MENUBAR_ITEM_SYMBOL } from "./utils";
import {
  MENUBAR_INJECTION_KEY,
  type MenubarProvideValue,
} from "./MenubarRoot.vue";

const injectedValue = inject<MenubarProvideValue>(MENUBAR_INJECTION_KEY);

const props = defineProps<MenubarCheckboxItemProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const modelValue = useVModel(props, "modelValue", emit, {
  passive: true,
});

const checkboxDataState = computed(() => {
  return modelValue.value ? "checked" : "unchecked";
});

function handleClick() {
  modelValue.value = !modelValue.value;
}

provide(MENUBAR_ITEM_SYMBOL, {
  modelValue,
});

function handleHorizontalKeydown(e: KeyboardEvent) {
  const newSelectedElement = useArrowNavigation(
    e,
    injectedValue?.triggerElement.value as HTMLElement,
    undefined,
    {
      arrowKeyOptions: "horizontal",
      itemsArray: injectedValue?.triggerItemsArray,
    }
  );
  if (newSelectedElement) {
    injectedValue?.changeSelected(newSelectedElement);
    injectedValue?.changeValue(newSelectedElement.id);
  }
}

function handleEscapeKeydown(e: KeyboardEvent) {
  injectedValue!.changeValue(undefined);
  injectedValue!.changeSelected(
    injectedValue!.triggerElement.value as HTMLElement
  );
}
</script>

<template>
  <BaseMenuItem
    ref="currentElement"
    :disabled="props.disabled"
    :rootProvider="injectedValue"
    :orientation="injectedValue?.orientation"
    @handle-click="handleClick"
    @horizontal-keydown="handleHorizontalKeydown"
    @escape-keydown="handleEscapeKeydown"
    role="menuitemcheckbox"
    :data-state="checkboxDataState"
    :aria-checked="props.modelValue ? true : false"
    :as-child="props.asChild"
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
