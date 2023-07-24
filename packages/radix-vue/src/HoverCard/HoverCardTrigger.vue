<script lang="ts">
export interface HoverCardTriggerProps extends PrimitiveProps { }
</script>

<script setup lang="ts">
import { PopperAnchor } from "@/Popper";
import { PrimitiveButton, type PrimitiveProps } from "@/Primitive";
import { useHover } from "@/shared";
import { inject, ref } from "vue";
import {
  HOVER_CARD_INJECTION_KEY,
  type HoverCardProvideValue,
} from "./HoverCardRoot.vue";

const injectedValue = inject<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY);

const props = defineProps<HoverCardTriggerProps>();
const triggerElement = ref<HTMLElement>();

const isHovered = useHover(triggerElement, {
  delayEnter: injectedValue?.openDelay,
  onHoverEnter: () => injectedValue?.showTooltip(),
  delayLeave: injectedValue?.closeDelay,
  onHoverLeave: () => injectedValue?.hideTooltip(),
});
</script>

<template>
  <PopperAnchor asChild>
    <PrimitiveButton ref="primitiveElement" :as-child="props.asChild" :aria-expanded="injectedValue?.open.value || false"
      :data-state="injectedValue?.open.value ? 'open' : 'closed'" @mouseover="injectedValue!.isHover = true"
      style="cursor: default">
      <slot />
    </PrimitiveButton>
  </PopperAnchor>
</template>
