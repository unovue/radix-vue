<script setup lang="ts">
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import {
  DROPDOWN_MENU_SUB_INJECTION_KEY,
  type DropdownMenuSubProvideValue,
} from "./DropdownMenuSub.vue";
import { type PrimitiveProps } from "@/Primitive";
import { injectSafely } from "./utils";
import { Components } from "./constants";

interface DropdownMenuItemProps extends PrimitiveProps {
  value?: string;
  disabled?: boolean;
  //onSelect?: void;
  textValue?: string;
}

const rootInjectedValue = injectSafely<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY,
  Components.ROOT
);

const subInjectedValue = injectSafely<DropdownMenuSubProvideValue>(
  DROPDOWN_MENU_SUB_INJECTION_KEY,
  Components.SUB_MENU
);

const props = defineProps<DropdownMenuItemProps>();

function handleClick() {
  if (rootInjectedValue?.selectedElement.value) {
    rootInjectedValue.hideTooltip();
  }
}

function handleEscape() {
  rootInjectedValue?.hideTooltip();
}
</script>

<template>
  <BaseMenuItem
    :disabled="props.disabled"
    :rootProvider="rootInjectedValue"
    :subProvider="subInjectedValue"
    :orientation="rootInjectedValue?.orientation"
    :as-child="props.asChild"
    @handle-click="handleClick"
    @escape-keydown="handleEscape"
  >
    <slot />
  </BaseMenuItem>
</template>
