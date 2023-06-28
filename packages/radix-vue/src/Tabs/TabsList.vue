<script lang="ts">
export interface TabsListProps {
  asChild?: boolean;
  loop?: boolean;
}
</script>

<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";

const props = withDefaults(defineProps<TabsListProps>(), {
  asChild: false,
  loop: true,
});

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);
const parentElement = ref();
onMounted(() => {
  injectedValue!.parentElement.value = parentElement.value;
});
</script>

<template>
  <div
    :asChild="props.asChild ? '' : undefined"
    role="tablist"
    ref="parentElement"
    :aria-orientation="injectedValue?.orientation"
    tabindex="0"
    :data-orientation="injectedValue?.orientation"
    style="outline: none"
  >
    <slot />
  </div>
</template>
