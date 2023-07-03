<script lang="ts">
import type {
  AccordionCollapsibleProvideValue,
  AccordionImplProps,
} from "./AccordionImpl.vue";
import {
  ACCORDION_VALUE_INJECTION_KEY,
  type AccordionValueProvideValue,
} from "./AccordionImpl.vue";
import { useVModel } from "@vueuse/core";

export interface AccordionImplSingleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion item whose content is expanded.
   */
  modelValue?: string;
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
import { provide, type Ref } from "vue";
import AccordionImpl, {
  ACCORDION_COLLAPSIBLE_INJECTION_KEY,
} from "./AccordionImpl.vue";

const props = withDefaults(defineProps<AccordionSingleProps>(), {
  onValueChange: () => {},
  collapsible: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | undefined): void;
}>();

const modelValue = useVModel(props, "modelValue", emit, {
  defaultValue: props.defaultValue ?? "",
  passive: true,
}) as Ref<string>;

provide<AccordionValueProvideValue>(ACCORDION_VALUE_INJECTION_KEY, {
  modelValue,
  onItemOpen: (val) => {
    modelValue.value = val;
  },
  onItemClose: (val) => {
    if (props.collapsible) {
      modelValue.value = "";
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
