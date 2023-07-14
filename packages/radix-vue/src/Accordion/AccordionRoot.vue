<script lang="ts">
import type { AccordionMultipleProps } from "./AccordionImplMultiple.vue";
import type { AccordionSingleProps } from "./AccordionImplSingle.vue";

export type AccordionRootProps = AccordionSingleProps | AccordionMultipleProps;
</script>

<script setup lang="ts">
import AccordionImplMultiple from "./AccordionImplMultiple.vue";
import AccordionImplSingle from "./AccordionImplSingle.vue";

const props = defineProps<AccordionRootProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | string[] | undefined): void;
}>();
</script>

<template>
  <AccordionImplMultiple
    v-if="props?.type === 'multiple'"
    v-bind="props"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <slot />
  </AccordionImplMultiple>
  <AccordionImplSingle
    v-else
    v-bind="props"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <slot />
  </AccordionImplSingle>
</template>
