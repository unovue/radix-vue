<script setup lang="ts">
import { inject, ref } from "vue";
import { trapFocus } from "../shared/trap-focus.ts";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";

const injectedValue = inject<TooltipProvideValue>(TOOLTIP_INJECTION_KEY);

const tooltipContentElement = ref<HTMLElement>();

</script>

<template>
  <div
    ref="tooltipContentElement"
    v-if="injectedValue?.modelValue.value"
    :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
    role="tooltip"
    tabindex="-1"
    style="pointer-events: auto"
  >
    <slot />
  </div>
</template>
