<script setup lang="ts">
import { PopperArrow, type PopperArrowProps } from "@/Popper";
import { inject } from "vue";
import { SELECT_INJECTION_KEY } from "./SelectRoot.vue";
import { SELECT_CONTENT_INJECTION_KEY } from "./SelectContentImpl.vue";

const context = inject(SELECT_INJECTION_KEY);
const contentContext = inject(SELECT_CONTENT_INJECTION_KEY);

export interface SelectArrowProps extends PopperArrowProps {}
const props = defineProps<SelectArrowProps>();
</script>

<template>
  <PopperArrow
    v-if="context?.open.value && contentContext?.position === 'popper'"
    v-bind="props"
  >
    <slot></slot>
  </PopperArrow>
</template>
