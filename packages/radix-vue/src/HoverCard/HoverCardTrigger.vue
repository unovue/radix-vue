<script lang="ts">
export interface HoverCardTriggerProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import {
  HOVER_CARD_INJECTION_KEY,
  type HoverCardProvideValue,
} from "./HoverCardRoot.vue";
import { useHoverDelay, useMouseleaveDelay } from "../shared";

const injectedValue = inject<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY);

const triggerElement = ref<HTMLElement>();

onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});

async function handleMouseEnter(e: MouseEvent) {
  const result = await useHoverDelay(
    e,
    triggerElement.value!,
    injectedValue?.openDelay
  );
  if (result) {
    injectedValue?.showTooltip();
  }
}

async function handleMouseleave(e: MouseEvent) {
  injectedValue!.isHover = false;
  const result = await useMouseleaveDelay(e, injectedValue?.closeDelay!);
  if (result && !injectedValue?.isHover) {
    injectedValue?.hideTooltip();
  }
}
</script>

<template>
  <button
    type="button"
    ref="triggerElement"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @mouseover="injectedValue!.isHover = true"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseleave"
    style="cursor: default"
  >
    <slot />
  </button>
</template>
