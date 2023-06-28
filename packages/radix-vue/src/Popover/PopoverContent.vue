<script lang="ts">
import type { InjectionKey, Ref } from "vue";
import type { Side, MiddlewareData } from "@floating-ui/dom";

export const POPOVER_CONTENT_INJECTION_KEY =
  Symbol() as InjectionKey<PopoverContentProvideValue>;

export type PopoverContentProvideValue = {
  middlewareData: Ref<MiddlewareData>;
  floatPosition: Ref<Side>;
};
</script>

<script setup lang="ts">
import { onMounted, inject, ref, watchEffect, provide } from "vue";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  arrow,
} from "@floating-ui/vue";
import { trapFocus } from "../shared/trap-focus";
import { useClickOutside } from "../shared/useClickOutside";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";

const injectedValue = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);

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

watchEffect(() => {
  if (tooltipContentElement.value) {
    if (injectedValue?.open.value) {
      setTimeout(() => {
        trapFocus(tooltipContentElement.value!);
      }, 0);

      window.addEventListener("mousedown", closeDialogWhenClickOutside);
      window.addEventListener("mouseup", clearEvents);
    } else {
      if (injectedValue?.triggerElement.value) {
        injectedValue?.triggerElement.value.focus();
      }
    }
  }
});

function closeDialogWhenClickOutside(e: MouseEvent) {
  const clickOutside = useClickOutside(e, tooltipContentElement.value!);
  if (clickOutside) {
    injectedValue?.hidePopover();
  }
}

function clearEvents() {
  window.removeEventListener("mousedown", closeDialogWhenClickOutside);
  window.removeEventListener("mouseup", clearEvents);
}

provide<PopoverContentProvideValue>(POPOVER_CONTENT_INJECTION_KEY, {
  middlewareData: middlewareData,
  floatPosition: floatPosition as Ref<Side>,
});
</script>

<template>
  <div
    ref="tooltipContentElement"
    v-if="injectedValue?.open.value"
    style="min-width: max-content; will-change: transform; z-index: auto"
    :style="floatingStyles"
  >
    <div
      :data-state="injectedValue?.open.value ? 'open' : 'closed'"
      data-side="bottom"
      role="tooltip"
      :class="props.class"
    >
      <slot />
    </div>
  </div>
</template>
