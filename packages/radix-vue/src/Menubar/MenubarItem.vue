<script setup lang="ts">
import { inject } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import { useArrowNavigation } from "@/shared/useArrowNavigation";
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
  rootInjectedValue!.changeValue(undefined);
  rootInjectedValue!.changeSelected(
    rootInjectedValue!.triggerElement.value as HTMLElement
  );
}

function handleHorizontalKeydown(e: KeyboardEvent) {
  const newSelectedElement = useArrowNavigation(
    e,
    rootInjectedValue?.triggerElement.value as HTMLElement,
    undefined,
    {
      arrowKeyOptions: "horizontal",
      itemsArray: rootInjectedValue?.triggerItemsArray,
    }
  );
  if (newSelectedElement) {
    rootInjectedValue?.changeSelected(newSelectedElement);
    rootInjectedValue?.changeValue(newSelectedElement.id);
  }
}

function handleEscapeKeydown(e: KeyboardEvent) {
  rootInjectedValue!.changeValue(undefined);
  rootInjectedValue!.changeSelected(
    rootInjectedValue!.triggerElement.value as HTMLElement
  );
}
</script>

<template>
  <BaseMenuItem
    :disabled="props.disabled"
    :rootProvider="rootInjectedValue"
    :subProvider="subInjectedValue"
    :orientation="rootInjectedValue?.orientation"
    @handle-click="handleClick"
    @horizontal-keydown="handleHorizontalKeydown"
    @escape-keydown="handleEscapeKeydown"
  >
    <slot />
  </BaseMenuItem>
</template>
