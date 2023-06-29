<script lang="ts">
export interface TabsListProps {
  asChild?: boolean;
  loop?: boolean;
}
</script>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";

const props = withDefaults(defineProps<TabsListProps>(), {
  asChild: false,
  loop: true,
});

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);
const { primitiveElement, currentElement: parentElement } =
  usePrimitiveElement();

onMounted(() => {
  injectedValue!.parentElement.value = parentElement.value;
});
</script>

<template>
  <PrimitiveDiv
    :asChild="asChild"
    role="tablist"
    ref="primitiveElement"
    :aria-orientation="injectedValue?.orientation"
    tabindex="0"
    :data-orientation="injectedValue?.orientation"
    style="outline: none"
  >
    <slot />
  </PrimitiveDiv>
</template>
