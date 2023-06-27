<script lang="ts">
import type { Ref } from "vue";

interface DropdownMenuCheckboxItemProps {
  modelValue?: boolean;
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
}

export type DropdownMenuCheckboxProvideValue = Readonly<Ref<boolean>>;
</script>

<script setup lang="ts">
import { inject, computed, provide, toRef } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";

const injectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const props = defineProps<DropdownMenuCheckboxItemProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const checkboxDataState = computed(() => {
  return props.modelValue ? "checked" : "unchecked";
});

function handleClick(): void {
  return updateModelValue();
}

function updateModelValue(): void {
  return emit("update:modelValue", !props.modelValue);
}

provide<DropdownMenuCheckboxProvideValue>(
  "modelValue",
  toRef(() => props.modelValue)
);
</script>

<template>
  <BaseMenuItem
    ref="currentElement"
    :disabled="props.disabled"
    :selectedElementProvider="injectedValue"
    :orientation="injectedValue?.orientation"
    @handle-click="handleClick"
    role="menuitemcheckbox"
    :data-state="checkboxDataState"
    :aria-checked="props.modelValue ? true : false"
  >
    <input
      type="checkbox"
      :id="props.id"
      v-bind="props.modelValue"
      @change="updateModelValue"
      :checked="props.modelValue"
      :name="props.name"
      aria-hidden="true"
      :disabled="props.disabled"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </BaseMenuItem>
</template>
