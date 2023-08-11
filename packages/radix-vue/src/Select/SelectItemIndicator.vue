<script lang="ts">
export interface SelectItemIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject, computed } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { SELECT_ITEM_SYMBOL } from "./utils";
import { type SelectItemProvideValue } from "./SelectItem.vue";
import {
  SELECT_INJECTION_KEY,
  type SelectProvideValue,
} from "./SelectRoot.vue";

const props = defineProps<SelectItemIndicatorProps>();

const rootInjectedValue = inject<SelectProvideValue>(SELECT_INJECTION_KEY);
const selectItemInjectedValue =
  inject<SelectItemProvideValue>(SELECT_ITEM_SYMBOL);

const visibleState = computed(() => {
  if (rootInjectedValue?.multiple) {
    return rootInjectedValue?.modelValue.value?.includes(
      selectItemInjectedValue!.value
    );
  } else {
    return (
      rootInjectedValue?.modelValue.value === selectItemInjectedValue?.value
    );
  }
});
</script>

<template>
  <Primitive
    v-if="visibleState"
    aria-hidden="true"
    style="pointer-events: none"
    :as-child="props.asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
