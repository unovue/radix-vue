<script setup lang="ts">
import { ref, inject, computed } from "vue";
import {
  DROPDOWN_MENU_GROUP_INJECTION_KEY,
  type DropdownMenuGroupProvideValue,
} from "./DropdownMenuGroup.vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";

const injectedValue = inject<DropdownMenuGroupProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

interface ToggleGroupItemProps {
  value?: string;
}

const rootInjectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
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

const currentToggleElement = ref<HTMLElement | undefined>();

function handleKeydown(e: KeyboardEvent) {
  const allToggleItem = Array.from(
    rootInjectedValue.parentElement.value.querySelectorAll(
      "[data-radix-vue-collection-item]"
    )
  ) as HTMLElement[];
  if (allToggleItem.length) {
    const currentTabIndex = allToggleItem.indexOf(currentToggleElement.value!);

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
    @click="injectedValue!.changeModelValue(props.value)"
    ref="currentToggleElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </button>
</template>
