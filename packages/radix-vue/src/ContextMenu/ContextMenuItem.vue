<script setup lang="ts">
import { inject } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  CONTEXT_MENU_INJECTION_KEY,
  type ContextMenuProvideValue,
} from "./ContextMenuRoot.vue";
import {
  CONTEXT_MENU_SUB_INJECTION_KEY,
  type ContextMenuSubProvideValue,
} from "./ContextMenuSub.vue";
import { type PrimitiveProps } from "@/Primitive";

interface ContextMenuItemProps extends PrimitiveProps {
  value?: string;
  disabled?: boolean;
  //onSelect?: void;
  textValue?: string;
}

const rootInjectedValue = inject<ContextMenuProvideValue>(
  CONTEXT_MENU_INJECTION_KEY
);

const subInjectedValue = inject<ContextMenuSubProvideValue>(
  CONTEXT_MENU_SUB_INJECTION_KEY
);

const props = defineProps<ContextMenuItemProps>();

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
    @handle-click="handleClick"
    @escape-keydown="handleEscape"
  >
    <slot />
  </BaseMenuItem>
</template>
