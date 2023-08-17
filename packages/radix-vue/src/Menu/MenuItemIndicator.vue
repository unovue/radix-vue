<script lang="ts">
interface MenuItemIndicatorContextValue {
  checked: Ref<CheckedState>;
}

export const MENU_ITEM_INDICATOR_INJECTION_KEY =
  Symbol() as InjectionKey<MenuItemIndicatorContextValue>;
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { Presence } from "@/Presence";
import { ref, inject, type InjectionKey, type Ref } from "vue";
import { isIndeterminate, getCheckedState, type CheckedState } from "./utils";

export interface MenuItemIndicatorProps extends PrimitiveProps {}

withDefaults(defineProps<MenuItemIndicatorProps>(), {
  as: "span",
});

const indicatorContext = inject(MENU_ITEM_INDICATOR_INJECTION_KEY, {
  checked: ref(false),
});
</script>

<template>
  <Presence
    :present="
      isIndeterminate(indicatorContext?.checked.value) ||
      indicatorContext?.checked.value === true
    "
  >
    <Primitive
      :as="as"
      :as-child="asChild"
      :data-state="getCheckedState(indicatorContext!.checked.value)"
    >
      <slot></slot>
    </Primitive>
  </Presence>
</template>
