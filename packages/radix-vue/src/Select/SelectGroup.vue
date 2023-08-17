<script lang="ts">
export interface SelectGroupProps extends PrimitiveProps {}

type SelectGroupContextValue = { id: string };
export const SELECT_GROUP_INJECTION_KEY =
  Symbol() as InjectionKey<SelectGroupContextValue>;
</script>
<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { useId } from "@/shared";
import { provide, type InjectionKey } from "vue";

const props = defineProps<SelectGroupProps>();

const id = useId();
provide(SELECT_GROUP_INJECTION_KEY, {
  id,
});
</script>

<template>
  <Primitive role="group" v-bind="props" :aria-labelledby="id">
    <slot></slot>
  </Primitive>
</template>
