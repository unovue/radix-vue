<script lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";

interface SelectLabelProps extends PrimitiveProps {
  for?: string;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { SELECT_GROUP_INJECTION_KEY } from "./SelectGroup.vue";
const props = withDefaults(defineProps<SelectLabelProps>(), {
  as: "label",
});

const groupContext = inject(SELECT_GROUP_INJECTION_KEY, {
  id: "",
});
</script>

<template>
  <Primitive v-bind="props" :id="groupContext.id"><slot /></Primitive>
</template>
