<script lang="ts">
export interface TabsTriggerProps {
  value?: string;
}
</script>

<script setup lang="ts">
import { inject, ref } from "vue";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);
const currentToggleElement = ref<HTMLElement>();

const props = defineProps<TabsTriggerProps>();

function changeTab(value: string) {
  injectedValue?.changeModelValue(value);
}

function handleKeydown(e: KeyboardEvent) {
  const allToggleItem = Array.from(
    injectedValue!.parentElement!.value!.querySelectorAll(
      "[data-radix-vue-collection-item]"
    )
  );
  if (allToggleItem.length) {
    const currentTabIndex = allToggleItem.indexOf(currentToggleElement.value!);

    if (e.key === "ArrowRight") {
      e.preventDefault();
      if (allToggleItem[currentTabIndex + 1]) {
        const nextElement = allToggleItem[currentTabIndex + 1] as HTMLElement;
        nextElement.focus();
        changeTab(nextElement.getAttribute("data-radix-vue-tab-value")!);
      } else {
        const nextElement = allToggleItem[0] as HTMLElement;
        nextElement.focus();
        changeTab(nextElement.getAttribute("data-radix-vue-tab-value")!);
      }
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (allToggleItem[currentTabIndex - 1]) {
        const nextElement = allToggleItem[currentTabIndex - 1] as HTMLElement;
        nextElement.focus();
        changeTab(nextElement.getAttribute("data-radix-vue-tab-value")!);
      } else {
        const nextElement = allToggleItem[
          allToggleItem.length - 1
        ] as HTMLElement;
        nextElement.focus();
        changeTab(nextElement.getAttribute("data-radix-vue-tab-value")!);
      }
    }
  }
}
</script>

<template>
  <button
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
  </button>
</template>
