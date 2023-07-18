<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export type PopperContentContextValue = {
  placedSide: Ref<Side>;
  onArrowChange(arrow: HTMLElement | undefined): void;
  arrowX?: Ref<number>;
  arrowY?: Ref<number>;
  shouldHideArrow: Ref<boolean>;
};

export interface PopperContentProps extends PrimitiveProps {
  side?: Side;
  sideOffset?: number;
  align?: Align;
  alignOffset?: number;
  arrowPadding?: number;
  avoidCollisions?: boolean;
  collisionBoundary?: HTMLElement | HTMLElement[];
  collisionPadding?: number | Partial<Record<Side, number>>;
  sticky?: "partial" | "always";
  hideWhenDetached?: boolean;
  updatePositionStrategy?: "optimized" | "always";
  onPlaced?: () => void;
  prioritizePosition?: boolean;
}

export const POPPER_CONTENT_KEY =
  Symbol() as InjectionKey<PopperContentContextValue>;

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { computed, inject, provide, ref, watchEffect } from "vue";
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";
import { POPPER_ROOT_KEY } from "./PopperRoot.vue";
import { useSize } from "@/shared";
import { computedEager } from "@vueuse/core";
import {
  type Side,
  type Align,
  getSideAndAlignFromPlacement,
  transformOrigin,
} from "./utils";
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  limitShift,
  hide,
  arrow as floatingUIarrow,
  flip,
  size,
  type Placement,
  type Middleware,
} from "@floating-ui/vue";

const props = withDefaults(defineProps<PopperContentProps>(), {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
  updatePositionStrategy: "optimized",
  prioritizePosition: false,
});

const context = inject(POPPER_ROOT_KEY);

const floatingRef = ref<HTMLElement>();

const content = ref<HTMLElement>();
const arrow = ref<HTMLElement>();
const { width: arrowWidth, height: arrowHeight } = useSize(arrow);

const desiredPlacement = computed(
  () =>
    (props.side +
      (props.align !== "center" ? "-" + props.align : "")) as Placement
);

const collisionPadding = computed(() => {
  return typeof props.collisionPadding === "number"
    ? props.collisionPadding
    : { top: 0, right: 0, bottom: 0, left: 0, ...props.collisionPadding };
});

const boundary = computed(() => {
  return Array.isArray(props.collisionBoundary)
    ? props.collisionBoundary
    : [props.collisionBoundary];
});

const detectOverflowOptions = computed(() => {
  return {
    padding: collisionPadding.value,
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: boundary.value.length > 0,
  };
});

const computedMiddleware = computedEager(() => {
  return [
    offset({
      mainAxis: props.sideOffset + arrowHeight.value,
      alignmentAxis: props.alignOffset,
    }),
    props.avoidCollisions &&
      shift({
        mainAxis: true,
        crossAxis: props.prioritizePosition ? true : false,
        limiter: props.sticky === "partial" ? limitShift() : undefined,
        ...detectOverflowOptions.value,
      }),
    !props.prioritizePosition &&
      props.avoidCollisions &&
      flip({
        ...detectOverflowOptions.value,
      }),
    size({
      ...detectOverflowOptions,
      apply: ({ elements, rects, availableWidth, availableHeight }) => {
        const { width: anchorWidth, height: anchorHeight } = rects.reference;
        const contentStyle = elements.floating.style;
        Object.assign(elements.floating.style, {
          maxWidth: `${availableWidth}px`,
          maxHeight: `${availableHeight}px`,
        });
        contentStyle.setProperty(
          "--radix-popper-available-width",
          `${availableWidth}px`
        );
        contentStyle.setProperty(
          "--radix-popper-available-height",
          `${availableHeight}px`
        );
        contentStyle.setProperty(
          "--radix-popper-anchor-width",
          `${anchorWidth}px`
        );
        contentStyle.setProperty(
          "--radix-popper-anchor-height",
          `${anchorHeight}px`
        );
      },
    }),
    arrow.value &&
      floatingUIarrow({ element: arrow.value, padding: props.arrowPadding }),
    transformOrigin({
      arrowWidth: arrowWidth.value,
      arrowHeight: arrowHeight.value,
    }),
    props.hideWhenDetached &&
      hide({ strategy: "referenceHidden", ...detectOverflowOptions.value }),
  ] as Middleware[];
});

const { floatingStyles, placement, isPositioned, middlewareData } = useFloating(
  context!.anchor,
  floatingRef,
  {
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: props.updatePositionStrategy === "always",
      });
      return cleanup;
    },
    middleware: computedMiddleware,
  }
);

const placedSide = computed(
  () => getSideAndAlignFromPlacement(placement.value)[0]
);
const placedAlign = computed(
  () => getSideAndAlignFromPlacement(placement.value)[1]
);

watchEffect(() => {
  if (isPositioned.value) {
    props.onPlaced?.();
  }
});

const cannotCenterArrow = computed(
  () => middlewareData.value.arrow?.centerOffset !== 0
);

const contentZIndex = ref("");

watchEffect(() => {
  if (content.value) {
    contentZIndex.value = window.getComputedStyle(content.value).zIndex;
  }
});

const arrowX = computed(() => middlewareData.value.arrow?.x ?? 0);
const arrowY = computed(() => middlewareData.value.arrow?.y ?? 0);

provide(POPPER_CONTENT_KEY, {
  placedSide,
  onArrowChange: (element: HTMLElement | undefined) => {
    arrow.value = element;
  },
  arrowX,
  arrowY,
  shouldHideArrow: cannotCenterArrow,
});
</script>

<template>
  <div
    ref="floatingRef"
    data-radix-popper-content-wrapper=""
    :style="{
    ...floatingStyles,
    transform: isPositioned ? floatingStyles.transform : 'translate(0, -200%)', // keep off the page when measuring
    minWidth: 'max-content',
    zIndex: contentZIndex,
    ['--radix-popper-transform-origin' as any]: [
      middlewareData.transformOrigin?.x,
      middlewareData.transformOrigin?.y,
    ].join(' '),
  }"
  >
    <PrimitiveDiv
      v-bind="$attrs"
      :as-child="props.asChild"
      :data-side="placedSide"
      :data-align="placedAlign"
      :style="{
        // if the PopperContent hasn't been placed yet (not all measurements done)
        // we prevent animations so that users's animation don't kick in too early referring wrong sides
        animation: !isPositioned ? 'none' : undefined,
        // hide the content if using the hide middleware and should be hidden
        opacity: middlewareData.hide?.referenceHidden ? 0 : undefined,
      }"
    >
      <slot></slot>
    </PrimitiveDiv>
  </div>
</template>
