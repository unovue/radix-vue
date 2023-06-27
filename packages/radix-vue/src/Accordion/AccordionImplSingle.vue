<script lang="ts">
import type {
  AccordionCollapsibleProvideValue,
  AccordionImplProps,
} from "./AccordionImpl.vue";
import {
  ACCORDION_VALUE_INJECTION_KEY,
  type AccordionValueProvideValue,
} from "./AccordionImpl.vue";

export interface AccordionImplSingleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion item whose content is expanded.
   */
  value?: string;
  /**
   * The value of the item whose content is expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string;
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onValueChange?(value: string): void;
  /**
   * Whether an accordion item can be collapsed after it has been opened.
   * @default false
   */
  collapsible?: boolean;
}

export interface AccordionSingleProps extends AccordionImplSingleProps {
  type: "single";
}
</script>

<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";
import AccordionImpl, {
  ACCORDION_COLLAPSIBLE_INJECTION_KEY,
} from "./AccordionImpl.vue";

const props = withDefaults(defineProps<AccordionSingleProps>(), {
  onValueChange: () => {},
  collapsible: false,
});

const emit = defineEmits<{
  (e: "update:value", value: string | undefined): void;
}>();

const value = ref(props.value);

watch(value, (newValue) => {
  emit("update:value", newValue);
});

provide<AccordionValueProvideValue>(ACCORDION_VALUE_INJECTION_KEY, {
  value: computed(() => (value.value ? [value.value] : [])),
  onItemOpen: (val) => {
    value.value = val;
  },
  onItemClose: (val) => {
    if (props.collapsible) {
      value.value = "";
    }
  },
});

provide<AccordionCollapsibleProvideValue>(ACCORDION_COLLAPSIBLE_INJECTION_KEY, {
  collapsible: props.collapsible,
});
</script>

<template>
  <AccordionImpl v-bind="props">
    <slot />
  </AccordionImpl>
</template>
