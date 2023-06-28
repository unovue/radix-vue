<script lang="ts">
import type { InjectionKey, Ref } from "vue";
import type { Side, MiddlewareData } from "@floating-ui/dom";

export const HOVER_CARD_CONTENT_INJECTION_KEY =
  Symbol() as InjectionKey<HoverCardContentProvideValue>;

export type HoverCardContentProvideValue = {
  middlewareData: Ref<MiddlewareData>;
  floatPosition: Ref<Side>;
};
</script>

<script setup lang="ts">
import { onMounted, inject, ref, provide } from "vue";
import {
  useFloating,
  offset,
  flip,
  shift,
  arrow,
  autoUpdate,
} from "@floating-ui/vue";
import {
  HOVER_CARD_INJECTION_KEY,
  type HoverCardProvideValue,
} from "./HoverCardRoot.vue";
import { useMouseleaveDelay } from "../shared";

const injectedValue = inject<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY);

const props = defineProps({
  class: String,
});

const tooltipContentElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.floatingElement.value = tooltipContentElement.value;
});

const {
  floatingStyles,
  middlewareData,
  placement: floatPosition,
} = useFloating(injectedValue!.triggerElement, tooltipContentElement, {
  placement: "bottom",
  middleware: [
    offset(10),
    flip(),
    shift(),
    arrow({ element: injectedValue?.arrowElement }),
  ],
  whileElementsMounted: autoUpdate,
});

provide<HoverCardContentProvideValue>(HOVER_CARD_CONTENT_INJECTION_KEY, {
  middlewareData: middlewareData,
  floatPosition: floatPosition as Ref<Side>,
});

async function handleMouseleave(e: MouseEvent) {
  injectedValue!.isHover = false;
  const result = await useMouseleaveDelay(e, injectedValue?.closeDelay!);
  if (result && !injectedValue?.isHover) {
    injectedValue?.hideTooltip();
  }
}
</script>

<template>
  <div
    ref="tooltipContentElement"
    v-if="injectedValue?.open.value"
    style="min-width: max-content; will-change: transform; z-index: auto"
    :style="floatingStyles"
    @mouseover="injectedValue.isHover = true"
    @mouseleave="handleMouseleave"
  >
    <div
      :data-state="injectedValue?.open.value ? 'delayed-open' : 'closed'"
      data-side="bottom"
      role="tooltip"
      tabindex="-1"
      :class="props.class"
    >
      <slot />
    </div>
  </div>
</template>
