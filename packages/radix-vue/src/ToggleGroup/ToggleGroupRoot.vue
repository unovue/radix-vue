<script setup lang="ts">
import { provide } from 'vue'

type TypeEnum = "single" | "multiple";
type DataOrientation = "vertical" | "horizontal"

const props = defineProps({
  type: {
    type: String as TypeEnum,
    required: false,
    default: "single",
  },
  value: {
    type: String,
    required: false,
    default: false,
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
  },
  loop: {
    type: Boolean,
    required: false,
    default: true,
  },
});


</script>

<template></template>
