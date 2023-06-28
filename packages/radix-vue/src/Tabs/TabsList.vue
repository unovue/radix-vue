<script lang="ts">
export interface TabsListProps {
  loop?: boolean;
}
</script>

<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import { PrimitiveDiv } from "@/Primitive";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);
const parentElement = ref();
onMounted(() => {
  injectedValue!.parentElement.value = parentElement.value;
});
</script>

<template>
  <PrimitiveDiv
    role="tablist"
    ref="parentElement"
    :aria-orientation="injectedValue?.orientation"
    tabindex="0"
    :data-orientation="injectedValue?.orientation"
    style="outline: none"
  >
    <slot />
  </PrimitiveDiv>
</template>
