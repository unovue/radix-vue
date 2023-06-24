<script lang="ts">
export interface TabsTriggerProps {
  value?: string;
}
</script>

<script setup lang="ts">
import { inject, computed, ref } from "vue";
import type { Ref } from "vue";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);
const parentElement = inject<Ref<HTMLElement | undefined>>("parentElement");
const currentToggleElement = ref<HTMLElement>();

const props = defineProps<TabsTriggerProps>();

const ariaSelected = computed<boolean>(() => {
  return injectedValue?.modelValue?.value === props.value ? true : false;
});

const dataState = computed<"active" | "inactive">(() => {
  return injectedValue?.modelValue?.value === props.value
    ? "active"
    : "inactive";
});

function changeTab(value) {
  injectedValue?.changeModelValue(value);
}

function handleKeydown(e: KeyboardEvent) {
  const allToggleItem = Array.from(
    parentElement!.value!.querySelectorAll("[data-radix-vue-collection-item]")
  );
  if (allToggleItem.length) {
    const currentTabIndex = allToggleItem.indexOf(currentToggleElement.value);

    if (e.key === "ArrowRight") {
      e.preventDefault();
      if (allToggleItem[currentTabIndex + 1]) {
        allToggleItem[currentTabIndex + 1].focus();
        changeTab(
          allToggleItem[currentTabIndex + 1].getAttribute(
            "data-radix-vue-tab-value"
          )
        );
      } else {
        allToggleItem[0].focus();
        changeTab(allToggleItem[0].getAttribute("data-radix-vue-tab-value"));
      }
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (allToggleItem[currentTabIndex - 1]) {
        allToggleItem[currentTabIndex - 1].focus();
        changeTab(
          allToggleItem[currentTabIndex - 1].getAttribute(
            "data-radix-vue-tab-value"
          )
        );
      } else {
        allToggleItem[allToggleItem.length - 1].focus();
        changeTab(
          allToggleItem[allToggleItem.length - 1].getAttribute(
            "data-radix-vue-tab-value"
          )
        );
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
    :aria-selected="ariaSelected"
    :data-state="dataState"
    :data-orientation="injectedValue?.orientation"
    data-radix-vue-collection-item
    :data-radix-vue-tab-value="props.value"
    @click="changeTab(props.value)"
    @keydown="handleKeydown"
  >
    <slot />
  </button>
</template>
