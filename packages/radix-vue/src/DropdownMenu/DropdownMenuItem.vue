<script setup lang="ts">
import { inject } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import {
  DROPDOWN_MENU_SUB_INJECTION_KEY,
  type DropdownMenuSubProvideValue,
} from "./DropdownMenuSub.vue";

interface DropdownMenuItemProps {
  asChild?: boolean;
  value?: string;
  disabled?: boolean;
  //onSelect?: void;
  textValue?: string;
}

const rootInjectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const subInjectedValue = inject<DropdownMenuSubProvideValue>(
  DROPDOWN_MENU_SUB_INJECTION_KEY
);

const props = defineProps<DropdownMenuItemProps>();

function handleClick() {
  if (rootInjectedValue?.selectedElement.value) {
    rootInjectedValue.hideTooltip();
  }
}
</script>

<template>
  <BaseMenuItem
    :disabled="props.disabled"
    :rootProvider="rootInjectedValue"
    :subProvider="subInjectedValue"
    :orientation="rootInjectedValue?.orientation"
    @handle-click="handleClick"
  >
    <slot />
  </BaseMenuItem>
</template>
