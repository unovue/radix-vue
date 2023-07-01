<script lang="ts">
export interface TabsTriggerProps {
  asChild?: boolean;
  value?: string;
  disabled: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveButton, usePrimitiveElement } from "@/Primitive";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";
import { useArrowNavigation } from "../shared";

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);
const { primitiveElement, currentElement: currentToggleElement } =
  usePrimitiveElement();

const props = withDefaults(defineProps<TabsTriggerProps>(), {
  asChild: false,
  disabled: false,
});

function changeTab(value: string) {
  injectedValue?.changeModelValue(value);
}

function handleKeydown(e: KeyboardEvent) {
  const newSelectedElement = useArrowNavigation(
    e,
    currentToggleElement.value!,
    injectedValue?.parentElement.value!,
    { arrowKeyOptions: "horizontal" }
  );

  if (newSelectedElement) {
    newSelectedElement.focus();
    changeTab(newSelectedElement?.getAttribute("data-radix-vue-tab-value")!);
  }
}
</script>

<template>
  <PrimitiveButton
    ref="primitiveElement"
    type="button"
    role="tab"
    :aria-selected="
      injectedValue?.modelValue?.value === props.value ? 'true' : 'false'
    "
    :data-state="
      injectedValue?.modelValue?.value === props.value ? 'active' : 'inactive'
    "
    :data-disabled="props.disabled"
    :tabindex="injectedValue?.modelValue?.value === props.value ? '0' : '-1'"
    :data-orientation="injectedValue?.orientation"
    data-radix-vue-collection-item
    :data-radix-vue-tab-value="props.value"
    @click="changeTab(props.value!)"
    @keydown="handleKeydown"
  >
    <slot />
  </PrimitiveButton>
</template>
