<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { inject } from "vue";
import { SELECT_ITEM_INJECTION_KEY } from "./SelectItem.vue";

interface SelectItemIndicatorProps extends PrimitiveProps {}
const props = withDefaults(defineProps<SelectItemIndicatorProps>(), {
  as: "span",
});

const itemContext = inject(SELECT_ITEM_INJECTION_KEY);
</script>

<template>
  <Primitive v-if="itemContext?.isSelected.value" aria-hidden v-bind="props">
    <slot></slot>
  </Primitive>
</template>
