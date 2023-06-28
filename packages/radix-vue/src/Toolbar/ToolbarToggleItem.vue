<script setup lang="ts">
import { ref, inject, computed } from "vue";
import {
  TOOLBAR_TOGGLE_GROUP_INJECTION_KEY,
  type ToolbarToggleGroupProvideValue,
} from "./ToolbarToggleGroup.vue";
import {
  TOOLBAR_INJECTION_KEY,
  type ToolbarProvideValue,
} from "./ToolbarRoot.vue";
import { useArrowNavigation } from "../shared";

interface ToggleGroupItemProps {
  asChild?: boolean;
  value?: string;
  disabled?: boolean;
}

const injectedValue = inject<ToolbarToggleGroupProvideValue>(
  TOOLBAR_TOGGLE_GROUP_INJECTION_KEY
);
const rootInjectedValue = inject<ToolbarProvideValue>(TOOLBAR_INJECTION_KEY);

const props = withDefaults(defineProps<ToggleGroupItemProps>(), {
  asChild: false,
});

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
  <button
    type="button"
    :data-state="state"
    :data-disabled="props.disabled"
    :data-orientation="injectedValue?.orientation"
    @click="injectedValue!.changeModelValue(props.value)"
    ref="currentToggleElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </button>
</template>
