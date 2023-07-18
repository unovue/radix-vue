<script lang="ts">
import type { Ref } from "vue";
import type { Direction } from "./types";

export interface ScrollAreaProvideValue {
  type: "auto" | "always" | "scroll" | "hover";
  dir?: Direction;
  scrollHideDelay: number;
  scrollArea: Ref<HTMLElement | undefined>;
  viewport: Ref<HTMLElement | undefined>;
  onViewportChange(viewport: HTMLElement | null): void;
  content: Ref<HTMLElement | undefined>;
  onContentChange(content: HTMLElement): void;
  scrollbarX: Ref<HTMLElement | undefined>;
  onScrollbarXChange(scrollbar: HTMLElement | null): void;
  scrollbarXEnabled: Ref<boolean>;
  onScrollbarXEnabledChange(rendered: boolean): void;
  scrollbarY: Ref<HTMLElement | undefined>;
  onScrollbarYChange(scrollbar: HTMLElement | null): void;
  scrollbarYEnabled: Ref<boolean>;
  onScrollbarYEnabledChange(rendered: boolean): void;
  // onCornerWidthChange?(width: number): void;
  // onCornerHeightChange?(height: number): void;
}

export interface ScrollAreaRootProps extends PrimitiveProps {
  type?: ScrollAreaProvideValue["type"];
  dir?: ScrollAreaProvideValue["dir"];
  scrollHideDelay?: number;
}

export const SCROLL_AREA_INJECTION_KEY = "ScrollArea" as const;
</script>

<script setup lang="ts">
import { ref, provide } from "vue";
import {
  PrimitiveDiv,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";

const props = withDefaults(defineProps<ScrollAreaRootProps>(), {
  type: "hover",
  dir: "ltr",
  scrollHideDelay: 600,
});

const { primitiveElement, currentElement: scrollArea } = usePrimitiveElement();

const cornerWidth = ref(0);
const cornerHeight = ref(0);
const viewport = ref<HTMLElement>();
const content = ref<HTMLElement>();
const scrollbarX = ref<HTMLElement>();
const scrollbarY = ref<HTMLElement>();
const scrollbarXEnabled = ref(false);
const scrollbarYEnabled = ref(false);

const onViewportChange = (el: HTMLElement) => {
  viewport.value = el;
};
const onContentChange = (el: HTMLElement) => {
  content.value = el;
};

const onScrollbarXChange = (scrollbar: HTMLElement) => {
  scrollbarX.value = scrollbar;
};
const onScrollbarYChange = (scrollbar: HTMLElement) => {
  scrollbarY.value = scrollbar;
};

const onScrollbarXEnabledChange = (rendered: boolean) => {
  scrollbarXEnabled.value = rendered;
};
const onScrollbarYEnabledChange = (rendered: boolean) => {
  scrollbarYEnabled.value = rendered;
};

provide<ScrollAreaProvideValue>(SCROLL_AREA_INJECTION_KEY, {
  type: props.type,
  dir: props.dir,
  scrollHideDelay: props.scrollHideDelay,
  scrollArea,
  viewport,
  onViewportChange,
  content,
  onContentChange,
  scrollbarX,
  scrollbarXEnabled,
  scrollbarY,
  scrollbarYEnabled,
  onScrollbarXChange,
  onScrollbarYChange,
  onScrollbarXEnabledChange,
  onScrollbarYEnabledChange,
});
</script>

<template>
  <PrimitiveDiv
    ref="primitiveElement"
    :as-child="props.asChild"
    :style="{
    position: 'relative',
    // Pass corner sizes as CSS vars to reduce re-renders of context consumers
    ['--radix-scroll-area-corner-width' as any]: cornerWidth + 'px',
    ['--radix-scroll-area-corner-height' as any]: cornerHeight + 'px',
  }"
  >
    <slot />
  </PrimitiveDiv>
</template>
