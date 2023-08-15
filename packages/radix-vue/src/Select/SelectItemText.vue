<script setup lang="ts">
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from "@/Primitive";
import { inject, onMounted } from "vue";
import { SELECT_INJECTION_KEY } from "./SelectRoot.vue";
import { SELECT_CONTENT_INJECTION_KEY } from "./SelectContentImpl.vue";
import { SELECT_ITEM_INJECTION_KEY } from "./SelectItem.vue";

interface SelectItemTextProps extends PrimitiveProps {}

const props = withDefaults(defineProps<SelectItemTextProps>(), {
  as: "span",
});

const context = inject(SELECT_INJECTION_KEY);
const contentContext = inject(SELECT_CONTENT_INJECTION_KEY);
const itemContext = inject(SELECT_ITEM_INJECTION_KEY);

const { primitiveElement, currentElement: itemTextElement } =
  usePrimitiveElement();

onMounted(() => {
  if (!itemTextElement.value) return;
  itemContext?.onItemTextChange(itemTextElement.value);
  contentContext?.itemTextRefCallback(
    itemTextElement.value,
    itemContext!.value,
    itemContext!.disabled.value
  );
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <Primitive ref="primitiveElement" :id="itemContext?.textId" v-bind="props">
    <slot></slot>
  </Primitive>
</template>
