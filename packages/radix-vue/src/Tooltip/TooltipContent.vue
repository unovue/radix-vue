<script lang="ts">
export interface TooltipContentProps extends PopperContentProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";
import { PrimitiveDiv } from "@/Primitive";
import { PopperContent, type PopperContentProps } from "@/Popper";

const injectedValue = inject<TooltipProvideValue>(TOOLTIP_INJECTION_KEY);

const props = withDefaults(defineProps<TooltipContentProps>(), {
  side: "top",
  align: "center",
});
</script>

<template>
  <PopperContent v-bind="props" v-if="injectedValue?.open.value">
    <PrimitiveDiv
      ref="primitiveElement"
      :data-state="injectedValue.open.value ? 'delayed-open' : 'closed'"
      :data-side="side"
      :data-align="align"
      role="tooltip"
      tabindex="-1"
      :asChild="props.asChild"
    >
      <slot />
    </PrimitiveDiv>
  </PopperContent>
</template>
