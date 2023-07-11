<script lang="ts">
export interface TooltipContentProps extends PopperContentProps {
  asChild?: boolean;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { onMounted, inject } from "vue";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import { PopperContent, type PopperContentProps } from "@/Popper";

const injectedValue = inject<TooltipProvideValue>(TOOLTIP_INJECTION_KEY);

const props = withDefaults(defineProps<TooltipContentProps>(), {
  side: "top",
  align: "center",
});

const { primitiveElement, currentElement: tooltipContentElement } =
  usePrimitiveElement();
onMounted(() => {
  injectedValue!.floatingElement.value = tooltipContentElement.value;
});
</script>

<template>
  <PopperContent v-bind="props" v-if="injectedValue?.open.value">
    <PrimitiveDiv
      ref="primitiveElement"
      :data-state="injectedValue?.open.value ? 'delayed-open' : 'closed'"
      data-side="top"
      data-align="center"
      role="tooltip"
      tabindex="-1"
      :asChild="props.asChild"
    >
      <slot />
    </PrimitiveDiv>
  </PopperContent>
</template>
