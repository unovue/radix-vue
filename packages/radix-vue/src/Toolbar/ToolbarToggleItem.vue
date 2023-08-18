<script setup lang="ts">
import { ref, inject, computed } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { TOOLBAR_TOGGLE_GROUP_INJECTION_KEY } from "./ToolbarToggleGroup.vue";
import { TOOLBAR_INJECTION_KEY } from "./ToolbarRoot.vue";
import { useArrowNavigation } from "../shared";

export interface ToolbarToggleItemProps extends PrimitiveProps {
  value?: string;
  disabled?: boolean;
}

const injectedValue = inject(TOOLBAR_TOGGLE_GROUP_INJECTION_KEY);
const rootInjectedValue = inject(TOOLBAR_INJECTION_KEY);

const props = defineProps<ToolbarToggleItemProps>();

const state = computed(() => {
  if (injectedValue?.type === "multiple") {
    return injectedValue?.modelValue?.value?.includes(props.value!)
      ? "on"
      : "off";
  } else {
    return injectedValue?.modelValue?.value === props.value ? "on" : "off";
  }
});

const currentToggleElement = ref<HTMLElement | undefined>();

function handleKeydown(e: KeyboardEvent) {
  const newSelectedElement = useArrowNavigation(
    e,
    currentToggleElement.value!,
    rootInjectedValue?.parentElement.value!
  );
  newSelectedElement?.focus();
}
</script>

<template>
  <Primitive
    type="button"
    :data-state="state"
    :data-disabled="props.disabled"
    :data-orientation="injectedValue?.orientation"
    :as-child="props.asChild"
    :as="as"
    @click="injectedValue!.changeModelValue(props.value)"
    ref="currentToggleElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </Primitive>
</template>
