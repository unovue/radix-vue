<script setup lang="ts">
import { inject, computed, provide } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import { useArrowNavigation } from "@/shared/useArrowNavigation";
import {
  MENUBAR_INJECTION_KEY,
  type MenubarProvideValue,
} from "./MenubarRoot.vue";
import {
  RADIO_GROUP_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./MenubarRadioGroup.vue";
import { MENUBAR_ITEM_SYMBOL } from "./utils";

interface RadioGroupItemProps {
  asChild?: boolean;
  value?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onSelect?: void;
  textValue?: string;
}

const rootInjectedValue = inject<MenubarProvideValue>(MENUBAR_INJECTION_KEY);
const radioInjectedValue = inject<RadioGroupProvideValue>(
  RADIO_GROUP_INJECTION_KEY
);

const props = defineProps<RadioGroupItemProps>();

const radioDataState = computed(() => {
  return radioInjectedValue?.modelValue?.value === props.value ? "on" : "off";
});

function handleClick() {
  if (rootInjectedValue?.selectedElement.value) {
    return radioInjectedValue?.changeModelValue(props.value);
  }
}

const modelValue = computed(
  () => radioInjectedValue?.modelValue?.value === props.value
);
provide(MENUBAR_ITEM_SYMBOL, {
  modelValue,
});

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
    :orientation="rootInjectedValue?.orientation"
    :data-radix-vue-radio-value="props.value"
    @handle-click="handleClick"
    @horizontal-keydown="handleHorizontalKeydown"
    @escape-keydown="handleEscapeKeydown"
    role="menuitemradio"
    :data-state="radioDataState"
  >
    <slot />
  </BaseMenuItem>
</template>
