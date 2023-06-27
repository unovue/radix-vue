<script lang="ts">
import { ref, computed } from "vue";
import type { ToggleGroupProvideValue } from "../../ToggleGroup/ToggleGroupRoot.vue";
import { useArrowNavigation } from "../index";

interface ToggleGroupItemProps {
  value?: string;
  injectedValue?: ToggleGroupProvideValue;
}
</script>

<script setup lang="ts">
const props = defineProps<ToggleGroupItemProps>();

const currentToggleElement = ref<HTMLElement>();

const state = computed(() => {
  if (props?.injectedValue?.type === "multiple") {
    return props?.injectedValue?.modelValue?.value?.includes(props.value!) ? "on" : "off";
  } else {
    return props?.injectedValue?.modelValue?.value === props.value ? "on" : "off";
  }
});

function handleKeydown(e: KeyboardEvent) {
  const newSelectedElement = useArrowNavigation(
    e,
    currentToggleElement.value!,
    props?.injectedValue?.parentElement.value!
  );
  newSelectedElement?.focus();
}
</script>

<template>
  <button
    type="button"
    :data-state="state"
    @click="injectedValue?.changeModelValue(props.value!)"
    ref="currentToggleElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </button>
</template>
