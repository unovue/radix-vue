<script lang="ts">
import { inject } from "vue";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";
import {
  TOOLTIP_CONTENT_INJECTION_KEY,
  type TooltipContentProvideValue,
} from "./TooltipContent.vue";
import BaseArrow from "../shared/component/BaseArrow.vue";

interface TooltipArrowProps {
  asChild?: boolean;
  size?: number;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<TooltipArrowProps>(), {
  asChild: false,
  size: 10,
});

const injectedValue = inject<TooltipProvideValue>(TOOLTIP_INJECTION_KEY);

const injectedContentValue = inject<TooltipContentProvideValue>(
  TOOLTIP_CONTENT_INJECTION_KEY
);
</script>

<template>
  <BaseArrow
    :injected-value="injectedValue"
    :injected-content-value="injectedContentValue"
    :size="props.size"
  />
</template>
