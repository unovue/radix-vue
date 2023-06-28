<script lang="ts">
export interface PopoverTriggerProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";

const injectedValue = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);

const triggerElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});
</script>

<template>
  <button
    type="button"
    ref="triggerElement"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.showPopover"
  >
    <slot />
  </button>
</template>
