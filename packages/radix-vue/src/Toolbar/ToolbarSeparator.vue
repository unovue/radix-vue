<script setup lang="ts">
import { inject } from "vue";
import { type PrimitiveProps } from "@/Primitive";
import { TOOLBAR_INJECTION_KEY } from "./ToolbarRoot.vue";
import BaseSeparator from "../shared/component/BaseSeparator.vue";

export interface ToolbarSeparatorProps extends PrimitiveProps {}
const props = defineProps<ToolbarSeparatorProps>();

const context = inject(TOOLBAR_INJECTION_KEY);
</script>

<template>
  <BaseSeparator
    :orientation="context?.orientation.value"
    :as-child="props.asChild"
    :as="as"
  >
    <slot></slot>
  </BaseSeparator>
</template>
