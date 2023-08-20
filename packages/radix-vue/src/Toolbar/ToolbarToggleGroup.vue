<script setup lang="ts">
import {
  ToggleGroupRoot,
  type ToggleGroupRootProps,
  type ToggleGroupRootEmits,
} from "@/ToggleGroup";
import { inject } from "vue";
import { TOOLBAR_INJECTION_KEY } from "./ToolbarRoot.vue";
import { useEmitAsProps } from "@/shared";

const context = inject(TOOLBAR_INJECTION_KEY);

export interface ToolbarToggleGroupProps extends ToggleGroupRootProps {}
export type ToolbarToggleGroupEmits = ToggleGroupRootEmits;

const props = defineProps<ToolbarToggleGroupProps>();
const emits = defineEmits<ToolbarToggleGroupEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <ToggleGroupRoot
    v-bind="{ ...props, ...emitsAsProps }"
    :data-orientation="context?.orientation.value"
    :dir="context?.dir.value"
    :roving-focus="false"
  >
    <slot></slot>
  </ToggleGroupRoot>
</template>
