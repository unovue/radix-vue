<script setup lang="ts">
import { onMounted, inject, ref } from "vue";
import { useFloating, offset, flip, shift, arrow } from "@floating-ui/vue";
import {
  HOVER_CARD_INJECTION_KEY,
  type HoverCardProvideValue,
} from "./HoverCardRoot.vue";

const injectedValue = inject<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY);

const props = defineProps({
  class: String,
});

const tooltipContentElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.floatingElement.value = tooltipContentElement.value;
});

const { floatingStyles } = useFloating(
  injectedValue.triggerElement,
  tooltipContentElement,
  {
    placement: "top",
    middleware: [
      offset(10),
      flip(),
      shift(),
      arrow({ element: injectedValue?.arrowElement }),
    ],
  }
);
</script>

<template>
  <div
    ref="tooltipContentElement"
    v-if="injectedValue?.modelValue.value"
    style="min-width: max-content; will-change: transform; z-index: auto"
    :style="floatingStyles"
    @mouseenter="injectedValue?.showTooltip"
    @mouseleave="injectedValue?.hideTooltip"
  >
    <div
      :data-state="injectedValue?.modelValue.value ? 'delayed-open' : 'closed'"
      data-side="top"
      role="tooltip"
      tabindex="-1"
      :class="props.class"
    >
      <slot />
    </div>
  </div>
</template>
