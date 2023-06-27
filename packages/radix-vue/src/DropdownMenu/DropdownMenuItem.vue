<script setup lang="ts">
import { inject } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";

interface ToggleGroupItemProps {
  value?: string;
  disabled?: boolean;
}

const rootInjectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);
const props = defineProps<ToggleGroupItemProps>();

function handleClick() {
  if (rootInjectedValue?.selectedElement.value) {
    rootInjectedValue.selectedElement.value.click();
  }
}
</script>

<template>
  <BaseMenuItem
    :disabled="props.disabled"
    :selectedElementProvider="rootInjectedValue"
    :orientation="rootInjectedValue?.orientation"
    @handle-click="handleClick"
  >
    <slot />
  </BaseMenuItem>
</template>
