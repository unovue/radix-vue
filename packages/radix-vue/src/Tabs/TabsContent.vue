<script lang="ts">
export interface TabsContentProps extends PrimitiveProps {
  value?: string;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject, computed } from "vue";
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);

const props = defineProps<TabsContentProps>();

const dataState = computed<"active" | "inactive">(() => {
  return injectedValue?.modelValue?.value === props.value
    ? "active"
    : "inactive";
});
</script>

<template>
  <PrimitiveDiv
    :as-child="props.asChild"
    v-if="injectedValue?.modelValue?.value === props.value"
    role="tabpanel"
    :data-state="dataState"
    :data-orientation="injectedValue?.orientation"
    tabindex="0"
  >
    <slot />
  </PrimitiveDiv>
</template>
