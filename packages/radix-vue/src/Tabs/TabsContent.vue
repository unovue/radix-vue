<script lang="ts">
export interface TabsContentProps extends PrimitiveProps {
  value?: string;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject, computed } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";

const injectedValue = inject(TABS_INJECTION_KEY);

const props = defineProps<TabsContentProps>();

const dataState = computed<"active" | "inactive">(() => {
  return injectedValue?.modelValue?.value === props.value
    ? "active"
    : "inactive";
});
</script>

<template>
  <Primitive
    :as-child="props.asChild"
    :as="as"
    v-if="injectedValue?.modelValue?.value === props.value"
    role="tabpanel"
    :data-state="dataState"
    :data-orientation="injectedValue?.orientation"
    tabindex="0"
  >
    <slot />
  </Primitive>
</template>
