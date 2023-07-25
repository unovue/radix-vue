<script lang="ts">
import type { PopperContentProps } from "@/Popper";
import { onClickOutside } from "@vueuse/core";

export interface TooltipContentProps
  extends PrimitiveProps,
  Pick<
    PopperContentProps,
    | "side"
    | "sideOffset"
    | "align"
    | "alignOffset"
    | "avoidCollisions"
    | "collisionBoundary"
    | "collisionPadding"
    | "arrowPadding"
    | "sticky"
    | "hideWhenDetached"
  > {
  /**
   * By default, screenreaders will announce the content inside
   * the component. If this is not descriptive enough, or you have
   * content that cannot be announced, use aria-label as a more
   * descriptive label.
   *
   * @default String
   */
  ariaLabel?: string;
}

export interface TooltipContentEmit {
  (e: "escapeKeyDown", event: KeyboardEvent): void;
  (e: "pointerDownOutside", event: Event): void;
}
</script>

<script setup lang="ts">
import { PopperContent } from "@/Popper";
import {
  PrimitiveDiv,
  ScreenReaderOnly,
  type PrimitiveProps,
} from "@/Primitive";
import { computed, inject, ref, useSlots, type VNode } from "vue";
import { TOOLTIP_INJECTION_KEY } from "./TooltipRoot.vue";

const contentElement = ref<HTMLElement>();

const injectedValue = inject(TOOLTIP_INJECTION_KEY);

const props = withDefaults(defineProps<TooltipContentProps>(), {
  asChild: false,
  side: "top",
  sideOffset: 0,
  align: "center",
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  arrowPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
});

const emit = defineEmits<TooltipContentEmit>();

onClickOutside(contentElement, () => {
  emit("pointerDownOutside", new Event("pointerdown"));
});

function onEscapeKeyDown(event: KeyboardEvent) {
  emit("escapeKeyDown", event);
}

const ariaLabel = computed(() => {
  if (props.ariaLabel) return props.ariaLabel;
  const defaultSlot = useSlots().default?.();
  let content: string = "";

  function recursiveTextSearch(node: VNode) {
    if (typeof node.children === "string") {
      content += node.children;
    } else if (Array.isArray(node.children)) {
      node.children.forEach((child) => recursiveTextSearch(child as VNode));
    }
  }

  defaultSlot?.forEach((node) => recursiveTextSearch(node));
  return content;
});
</script>

<template>
<PopperContent v-if="injectedValue?.open.value" ref="contentElement" :as-child="props.asChild" :side="props.side"
    :sideOffset="props.sideOffset" :align="props.align" :alignOffset="props.alignOffset"
    :avoidCollisions="props.avoidCollisions" :collisionBoundary="props.collisionBoundary"
    :collisionPadding="props.collisionPadding" :arrowPadding="props.arrowPadding" :sticky="props.sticky"
    :hideWhenDetached="props.hideWhenDetached" style="
      --radix-tooltip-content-transform-origin: var(
        --radix-popper-transform-origin
      );
      --radix-tooltip-content-available-width: var(
        --radix-popper-available-width
      );
      --radix-tooltip-content-available-height: var(
        --radix-popper-available-height
      );
      --radix-tooltip-trigger-width: var(--radix-popper-anchor-width);
      --radix-tooltip-trigger-height: var(--radix-popper-anchor-height);
    " @keydown.esc="onEscapeKeyDown($event)">
    <PrimitiveDiv :data-state="injectedValue?.dataState.value" :data-side="props.side" :data-align="props.align"
      role="tooltip" tabindex="-1">
      <slot />
      <ScreenReaderOnly :id="injectedValue?.contentId" :ariaLabel="ariaLabel" />
    </PrimitiveDiv>
  </PopperContent>
</template>
