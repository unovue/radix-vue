<script setup lang="ts">
import { inject } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  MENUBAR_INJECTION_KEY,
  type MenubarProvideValue,
} from "./MenubarRoot.vue";
import {
  MENUBAR_SUB_INJECTION_KEY,
  type MenubarSubProvideValue,
} from "./MenubarSub.vue";

interface MenubarItemProps {
  asChild?: boolean;
  value?: string;
  disabled?: boolean;
  //onSelect?: void;
  textValue?: string;
}

const rootInjectedValue = inject<MenubarProvideValue>(MENUBAR_INJECTION_KEY);

const subInjectedValue = inject<MenubarSubProvideValue>(
  MENUBAR_SUB_INJECTION_KEY
);

const props = defineProps<MenubarItemProps>();

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
