<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import { PrimitiveButton } from "@/Primitive";
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
  <PrimitiveButton
    type="button"
    ref="triggerElement"
    :aria-expanded="injectedValue?.modelValue.value || false"
    :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
    @click="injectedValue?.showTooltip"
  >
    <slot />
  </PrimitiveButton>
</template>
