<script lang="ts">
import { inject } from "vue";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";
import {
  POPOVER_CONTENT_INJECTION_KEY,
  type PopoverContentProvideValue,
} from "./PopoverContent.vue";
import BaseArrow from "../shared/component/BaseArrow.vue";

interface PopoverArrowProps {
  size?: number;
}
</script>

<script setup lang="ts">
const props = defineProps<PopoverArrowProps>();

const injectedValue = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);

const injectedContentValue = inject<PopoverContentProvideValue>(
  POPOVER_CONTENT_INJECTION_KEY
);
</script>

<template>
  <BaseArrow
    :injected-value="injectedValue"
    :injected-content-value="injectedContentValue"
    :size="props.size"
  />
</template>
