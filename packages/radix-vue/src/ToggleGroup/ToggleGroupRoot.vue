<script setup lang="ts">
import { ref, computed, provide } from "vue";

type TypeEnum = "single" | "multiple";
type DataOrientation = "vertical" | "horizontal";

const props = defineProps({
  type: {
    type: String as TypeEnum,
    required: false,
    default: "single",
  },
  value: {
    type: String,
    required: false,
  },
  defaultValue: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  // disable arrow key navigation
  rovingFocus: {
    type: Boolean,
    required: false,
  },
  // "horizontal" | "vertical" | undefined
  orientation: {
    type: String as DataOrientation,
    required: false,
  },
  // "ltr" | "rtl"
  dir: {
    type: String,
    required: false,
    default: "ltr",
  },
  loop: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const modelPlaceHolder = ref(props.checked);

const refChecked = computed({
  get() {
    if (props.modelValue != null) {
      return props.modelValue;
    } else {
      return modelPlaceHolder.value;
    }
  },
  set(value) {
    if (props.modelValue != null) {
      emits("update:modelValue", value);
    } else {
      modelPlaceHolder.value = !modelPlaceHolder.value;
    }
  },
});

provide("refChecked", refChecked);
</script>

<template>
  <div role="group" :dir="props.dir" aria-label="Text alignment">
    <slot />
  </div>
</template>
