<script setup lang="ts">
import { ref, inject, computed } from "vue";
import {
  TOGGLE_GROUP_INJECTION_KEY,
  type ToggleGroupProvideValue,
} from "./ToggleGroupRoot.vue";
import { useArrowNavigation } from "../shared";

interface ToggleGroupItemProps {
  value?: string;
}

const injectedValue = inject<ToggleGroupProvideValue>(
  TOGGLE_GROUP_INJECTION_KEY
);

const props = withDefaults(defineProps<ToggleGroupItemProps>(), {});

const state = computed(() => {
  if (injectedValue?.type === "multiple") {
    return injectedValue?.modelValue?.value?.includes(props.value!)
      ? "on"
      : "off";
  } else {
    return injectedValue?.modelValue?.value === props.value ? "on" : "off";
  }
});

const currentToggleElement = ref<HTMLElement>();

function handleKeydown(e: KeyboardEvent) {
  useArrowNavigation(
    e,
    currentToggleElement.value!,
    injectedValue?.parentElement.value!
  );
}
</script>

<template>
  <button
    type="button"
    :data-state="state"
    @click="injectedValue!.changeModelValue(props.value)"
    ref="currentToggleElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </button>
</template>
