<script lang="ts">
export interface TabsListProps extends PrimitiveProps {
  loop?: boolean;
}
</script>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";

const props = withDefaults(defineProps<TabsListProps>(), {
  loop: true,
});

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);
const { primitiveElement, currentElement: parentElement } =
  usePrimitiveElement();

onMounted(() => {
  injectedValue!.parentElement.value = parentElement.value;
  injectedValue!.loop = props.loop;
});
</script>

<template>
  <Primitive
    role="tablist"
    ref="primitiveElement"
    :as-child="props.asChild"
    :as="as"
    :aria-orientation="injectedValue?.orientation"
    tabindex="0"
    :data-orientation="injectedValue?.orientation"
    style="outline: none"
  >
    <slot />
  </Primitive>
</template>
