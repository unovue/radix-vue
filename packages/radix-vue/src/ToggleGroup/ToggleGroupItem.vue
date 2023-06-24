<script setup lang="ts">
import { ref, inject, computed, onMounted } from "vue";
import type { Ref } from "vue";
import {
  TOGGLE_GROUP_INJECTION_KEY,
  type ToggleGroupProvideValue,
} from "./ToggleGroupRoot.vue";

interface ToggleGroupItemProps {
  value?: string;
}

const injectedValue = inject<ToggleGroupProvideValue>(
  TOGGLE_GROUP_INJECTION_KEY
);

const props = withDefaults(defineProps<ToggleGroupItemProps>(), {});

const state = computed(() => {
  if (injectedValue?.type === "multiple") {
    return injectedValue?.modelValue?.value?.includes(props.value)
      ? "on"
      : "off";
  } else {
    return injectedValue?.modelValue?.value === props.value ? "on" : "off";
  }
});

onMounted(() => {
  const allToggleItem = Array.from(
    injectedValue?.parentElement.value.querySelectorAll(
      "[data-radix-vue-collection-item]"
    )
  );
  console.log(allToggleItem);
  console.log(allToggleItem);
  console.log("length: ", allToggleItem.length);
  console.log("lengths: ", currentToggleElement.value);
  console.log("length: ", allToggleItem.indexOf(currentToggleElement.value));
});

const currentToggleElement: Ref<HTMLElement> = ref();

function handleKeydown(e: KeyboardEvent) {
  const allToggleItem = Array.from(
    injectedValue?.parentElement.value.querySelectorAll(
      "[data-radix-vue-collection-item]"
    )
  );
  if (allToggleItem.length) {
    const currentTabIndex = allToggleItem.indexOf(currentToggleElement.value);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (allToggleItem[currentTabIndex + 1]) {
        allToggleItem[currentTabIndex + 1].focus();
      } else {
        allToggleItem[0].focus();
      }
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (allToggleItem[currentTabIndex - 1]) {
        allToggleItem[currentTabIndex - 1].focus();
      } else {
        allToggleItem[allToggleItem.length - 1].focus();
      }
    }
  }
}
</script>

<template>
  <button
    type="button"
    :data-state="state"
    @click="injectedValue.changeModelValue(props.value)"
    ref="currentToggleElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </button>
</template>
