<script lang="ts">
import type {
  AccordionCollapsibleProvideValue,
  AccordionImplProps,
  AccordionValueProvideValue,
} from "./AccordionImpl.vue";
import { useVModel } from "@vueuse/core";

export interface AccordionImplMultipleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion items whose contents are expanded.
   */
  modelValue?: string[];
  /**
   * The value of the items whose contents are expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string[];
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onValueChange?(value: string[]): void;
}

export interface AccordionMultipleProps extends AccordionImplMultipleProps {
  type: "multiple";
}
</script>

<script setup lang="ts">
import { provide } from "vue";
import AccordionImpl, {
  ACCORDION_COLLAPSIBLE_INJECTION_KEY,
  ACCORDION_VALUE_INJECTION_KEY,
} from "./AccordionImpl.vue";

const props = withDefaults(defineProps<AccordionMultipleProps>(), {
  // @ts-expect-error
  defaultValue: [],
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string[] | undefined): void;
}>();

const modelValue = useVModel(props, "modelValue", emit, {
  defaultValue: props.defaultValue,
  passive: true,
});

const handleItemOpen = (itemValue: string) => {
  modelValue.value = [...modelValue.value, itemValue];
};

const handleItemClose = (itemValue: string) => {
  modelValue.value = [...modelValue.value].filter(
    (value) => value !== itemValue
  );
};

provide<AccordionValueProvideValue>(ACCORDION_VALUE_INJECTION_KEY, {
  modelValue,
  onItemOpen: handleItemOpen,
  onItemClose: handleItemClose,
});

provide<AccordionCollapsibleProvideValue>(ACCORDION_COLLAPSIBLE_INJECTION_KEY, {
  collapsible: false,
});
</script>

<template>
  <AccordionImpl v-bind="props">
    <slot />
  </AccordionImpl>
</template>
