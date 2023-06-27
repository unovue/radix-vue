<script lang="ts">
import type {
  AccordionCollapsibleProvideValue,
  AccordionImplProps,
  AccordionValueProvideValue,
} from "./AccordionImpl.vue";

export interface AccordionImplMultipleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion items whose contents are expanded.
   */
  value?: string[];
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
import { provide, ref, watch } from "vue";
import AccordionImpl, {
  ACCORDION_COLLAPSIBLE_INJECTION_KEY,
  ACCORDION_VALUE_INJECTION_KEY,
} from "./AccordionImpl.vue";

const props = withDefaults(defineProps<AccordionMultipleProps>(), {
  value: () => [],
});

const emit = defineEmits<{
  (e: "update:value", value: string[] | undefined): void;
}>();

const value = ref(props.value);

watch(value, (newValue) => {
  emit("update:value", newValue);
});

const handleItemOpen = (itemValue: string) => {
  value.value = [...value.value, itemValue];
};

const handleItemClose = (itemValue: string) => {
  value.value = value.value.filter((value) => value !== itemValue);
};

provide<AccordionValueProvideValue>(ACCORDION_VALUE_INJECTION_KEY, {
  value: value,
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
