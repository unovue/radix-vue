<script lang="ts">
export interface TabsTriggerProps {
  value?: string;
}
</script>

<script setup lang="ts">
import { inject, ref } from "vue";
import { PrimitiveButton } from "@/Primitive";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";
import { useArrowNavigation } from "../shared";

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);
const currentToggleElement = ref<HTMLElement>();

const props = defineProps<TabsTriggerProps>();

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
    ref="currentToggleElement"
    type="button"
    role="tab"
    :aria-selected="
      injectedValue?.modelValue?.value === props.value ? 'true' : 'false'
    "
    :data-state="
      injectedValue?.modelValue?.value === props.value ? 'active' : 'inactive'
    "
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
