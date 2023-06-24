<script lang="ts">
export interface TabsTriggerProps {
  value?: string;
}
</script>

<script setup lang="ts">
import { inject, computed } from "vue";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);

const props = defineProps<TabsTriggerProps>();

const dataState = computed<"active" | "inactive">(() => {
  return injectedValue?.modelValue?.value === props.value
    ? "active"
    : "inactive";
});
</script>

<template>
  <div
    v-if="injectedValue?.modelValue?.value === props.value"
    role="tabpanel"
    :data-state="dataState"
    :data-orientation="injectedValue?.orientation"
  >
    <slot />
  </div>
</template>
