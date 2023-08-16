<script setup lang="ts">
import { toRefs, ref, watchEffect } from "vue";
import { VisuallyHidden } from "@/VisuallyHidden";
import { usePrevious } from "@vueuse/core";

interface BubbleSelectProps {
  autocomplete?: string;
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
  value?: any;
}

const props = defineProps<BubbleSelectProps>();
const { value } = toRefs(props);
const prevValue = usePrevious(value);
const selectElement = ref<HTMLElement>();

// watchEffect(() => {
//   const selectProto = window.HTMLSelectElement.prototype;
//   const descriptor = Object.getOwnPropertyDescriptor(
//     selectProto,
//     "value"
//   ) as PropertyDescriptor;
//   const setValue = descriptor.set;
//   if (prevValue.value !== value.value && setValue) {
//     const event = new Event("change", { bubbles: true });
//     setValue.call(selectElement.value, value.value);
//     selectElement.value?.dispatchEvent(event);
//   }
// });

/**
 * We purposefully use a `select` here to support form autofill as much
 * as possible.
 *
 * We purposefully do not add the `value` attribute here to allow the value
 * to be set programatically and bubble to any parent form `onChange` event.
 *
 * We use `VisuallyHidden` rather than `display: "none"` because Safari autofill
 * won't work otherwise.
 */
</script>

<template>
  <VisuallyHidden asChild>
    <select ref="selectElement" :default-value="value" v-bind="props">
    <slot></slot>
    </select>
  </VisuallyHidden>
</template>
