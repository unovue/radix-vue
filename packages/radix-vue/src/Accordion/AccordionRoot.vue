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
  (e: "update:value", value: string | string[] | undefined): void;
}>();
</script>

<template>
  <AccordionImplMultiple
    v-if="props.type === 'multiple'"
    v-bind="props"
    @update:value="(value) => emit('update:value', value)"
  >
    <slot />
  </AccordionImplMultiple>
  <AccordionImplSingle
    v-else
    v-bind="props"
    @update:value="(value) => emit('update:value', value)"
  >
    <slot />
  </AccordionImplSingle>
</template>
