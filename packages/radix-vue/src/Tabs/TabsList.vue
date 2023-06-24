<script setup lang="ts">
import { inject } from "vue";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);

export interface TabsListProps {
  loop?: boolean;
}
</script>

<template>
  <div
    role="tablist"
    :aria-orientation="injectedValue."
    tabindex="0"
    :data-orientation="props.orientation"
  >
    <slot />
  </div>
</template>
