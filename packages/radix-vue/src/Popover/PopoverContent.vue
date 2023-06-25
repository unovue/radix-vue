<script setup lang="ts">
import { onMounted, inject, ref, watchEffect } from "vue";
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/vue";
import { trapFocus } from "../shared/trap-focus.ts";
import { useClickOutside } from "../shared/useClickOutside.ts";
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

const { floatingStyles } = useFloating(
  injectedValue!.triggerElement,
  tooltipContentElement,
  {
    placement: "bottom",
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  }
);

watchEffect(() => {
  if (tooltipContentElement.value) {
    if (injectedValue.modelValue.value) {
      setTimeout(() => {
        trapFocus(tooltipContentElement.value);
      }, 0);

      window.addEventListener("mousedown", closeDialogWhenClickOutside);
      window.addEventListener("mouseup", clearEvents);
    } else {
      if (injectedValue.triggerElement.value) {
        injectedValue.triggerElement.value.focus();
      }
    }
  }
});

function closeDialogWhenClickOutside(e: MouseEvent) {
  const clickOutside = useClickOutside(e, tooltipContentElement.value);
  if (clickOutside) {
    injectedValue.hideTooltip();
  }
}

function clearEvents() {
  window.removeEventListener("mousedown", closeDialogWhenClickOutside);
  window.removeEventListener("mouseup", clearEvents);
}
</script>

<template>
  <div
    ref="tooltipContentElement"
    v-if="injectedValue?.modelValue.value"
    style="min-width: max-content; will-change: transform; z-index: auto"
    :style="floatingStyles"
  >
    <div
      :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
      data-side="bottom"
      role="tooltip"
      :class="props.class"
    >
      <slot />
    </div>
  </div>
</template>
