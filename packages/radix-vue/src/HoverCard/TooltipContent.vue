<script setup lang="ts">
import { onMounted, inject, ref } from "vue";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";
import { useFloating, offset, flip, shift, arrow } from "@floating-ui/vue";

const injectedValue = inject<TooltipProvideValue>(TOOLTIP_INJECTION_KEY);

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
