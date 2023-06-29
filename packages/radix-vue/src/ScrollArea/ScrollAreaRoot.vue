<script lang="ts">
import type { Ref } from "vue";

export type Direction = "ltr" | "rtl";
export type Sizes = {
  content: number;
  viewport: number;
  scrollbar: {
    size: number;
    paddingStart: number;
    paddingEnd: number;
  };
};

export interface ScrollAreaProvideValue {
  type: "auto" | "always" | "scroll" | "hover";
  dir?: Direction;
  scrollHideDelay: number;
  scrollArea: HTMLElement | null;
  viewport: HTMLDivElement | null;
  onViewportChange(viewport: HTMLDivElement | null): void;
  content: HTMLDivElement | null;
  onContentChange(content: HTMLDivElement): void;
  scrollbarX: HTMLElement | null;
  onScrollbarXChange(scrollbar: HTMLElement | null): void;
  scrollbarXEnabled: Ref<boolean>;
  onScrollbarXEnabledChange(rendered: boolean): void;
  scrollbarY: HTMLElement | null;
  onScrollbarYChange(scrollbar: HTMLElement | null): void;
  scrollbarYEnabled: Ref<boolean>;
  onScrollbarYEnabledChange(rendered: boolean): void;
  onCornerWidthChange(width: number): void;
  onCornerHeightChange(height: number): void;
}

export interface ScrollAreaRootProps {
  type?: ScrollAreaProvideValue["type"];
  dir?: ScrollAreaProvideValue["dir"];
  scrollHideDelay?: number;
}

export const SCROLL_AREA_INJECTION_KEY = "ScrollArea" as const;
</script>

<script setup lang="ts">
import { ref, toRef, provide } from "vue";

const props = withDefaults(defineProps<ScrollAreaRootProps>(), {
  type: "hover",
  dir: undefined,
  scrollHideDelay: 600,
});

const parentElementRef: Ref<HTMLElement | undefined> = ref();

const cornerWidth = ref(0);
const cornerHeight = ref(0);

provide<ScrollAreaProvideValue>(SCROLL_AREA_INJECTION_KEY, {
  type: props.type,
  dir: props.dir,
  scrollHideDelay: props.scrollHideDelay,
});
</script>

<template>
  <div
    ref="parentElementRef"
    :style="{
    position: 'relative',
    // Pass corner sizes as CSS vars to reduce re-renders of context consumers
    ['--radix-scroll-area-corner-width' as any]: cornerWidth + 'px',
    ['--radix-scroll-area-corner-height' as any]: cornerHeight + 'px',
  }"
  >
    <slot />
  </div>
</template>
