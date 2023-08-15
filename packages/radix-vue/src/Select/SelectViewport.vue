<script lang="ts">
type SelectViewportContextValue = {
  contentWrapper?: Ref<HTMLElement | undefined>;
  shouldExpandOnScrollRef?: Ref<boolean>;
  onScrollButtonChange: (node: HTMLElement | undefined) => void;
};

export const SELECT_VIEWPORT_INJECTION_KEY =
  Symbol() as InjectionKey<SelectViewportContextValue>;

export interface SelectViewportProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { onMounted, type InjectionKey, type Ref, inject, ref } from "vue";
import { SELECT_CONTENT_INJECTION_KEY } from "./SelectContentImpl.vue";
import { CONTENT_MARGIN } from "./utils";

const props = defineProps<SelectViewportProps>();
const contentContext = inject(SELECT_CONTENT_INJECTION_KEY);
const viewportContext =
  contentContext!.position === "item-aligned"
    ? inject(SELECT_VIEWPORT_INJECTION_KEY)
    : undefined;

const { primitiveElement, currentElement } = usePrimitiveElement();

onMounted(() => {
  contentContext!.onViewportChange(currentElement.value);
});

const prevScrollTopRef = ref(0);

const handleScroll = (event: WheelEvent) => {
  const viewport = event.currentTarget as HTMLElement;
  const { shouldExpandOnScrollRef, contentWrapper } = viewportContext!;
  if (shouldExpandOnScrollRef?.value && contentWrapper?.value) {
    const scrolledBy = Math.abs(prevScrollTopRef.value - viewport.scrollTop);
    if (scrolledBy > 0) {
      const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
      const cssMinHeight = parseFloat(contentWrapper.value.style.minHeight);
      const cssHeight = parseFloat(contentWrapper.value.style.height);
      const prevHeight = Math.max(cssMinHeight, cssHeight);

      if (prevHeight < availableHeight) {
        const nextHeight = prevHeight + scrolledBy;
        const clampedNextHeight = Math.min(availableHeight, nextHeight);
        const heightDiff = nextHeight - clampedNextHeight;

        contentWrapper.value.style.height = clampedNextHeight + "px";
        if (contentWrapper.value.style.bottom === "0px") {
          viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
          // ensure the content stays pinned to the bottom
          contentWrapper.value.style.justifyContent = "flex-end";
        }
      }
    }
  }
  prevScrollTopRef.value = viewport.scrollTop;
};
</script>

<template>
  <Primitive as="style">
    /* Hide scrollbars cross-browser and enable momentum scroll for touch
    devices */ [data-radix-select-viewport] { -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch; }
    [data-radix-select-viewport]::-webkit-scrollbar { display: none; }
  </Primitive>
  <Primitive
    ref="primitiveElement"
    data-radix-select-viewport
    role="presentation"
    v-bind="{ ...$attrs, ...props }"
    :style="{
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: 'relative',
      flex: 1,
      overflow: 'auto',
    }"
    @scroll="handleScroll"
  >
    <slot></slot>
  </Primitive>
</template>
