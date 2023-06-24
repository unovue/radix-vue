<script lang="ts">
import { provide, ref } from "vue";
import type { Ref } from "vue";

export interface TabsListProps {
  loop?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);

const parentElementRef = ref<HTMLElement | undefined>();
provide<Ref<HTMLElement | undefined>>("parentElement", parentElementRef);
</script>

<template>
  <div
    role="tablist"
    ref="parentElementRef"
    :aria-orientation="injectedValue?.orientation"
    tabindex="0"
    :data-orientation="injectedValue?.orientation"
  >
    <slot />
  </div>
</template>
