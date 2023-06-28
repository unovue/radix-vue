<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import { PrimitiveButton } from "@/Primitive";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";
import { useHoverDelay } from "../shared";

const injectedValue = inject<TooltipProvideValue>(TOOLTIP_INJECTION_KEY);

const triggerElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});

async function handleMouseEnter(e: MouseEvent) {
  const result = await useHoverDelay(e, triggerElement.value!);
  if (result) {
    injectedValue?.showTooltip();
  }
}
</script>

<template>
  <PrimitiveButton
    type="button"
    ref="triggerElement"
    :aria-expanded="injectedValue?.modelValue.value || false"
    :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
    @mouseenter="handleMouseEnter"
    @mouseleave="injectedValue?.hideTooltip"
    style="cursor: default"
  >
    <slot />
  </PrimitiveButton>
</template>
