<script setup lang="ts">
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { shouldShowPlaceholder } from "./utils";
import { SELECT_INJECTION_KEY } from "./SelectRoot.vue";
import { inject, onMounted } from "vue";

interface SelectValueProps extends PrimitiveProps {
  placeholder?: string;
}

const props = withDefaults(defineProps<SelectValueProps>(), {
  as: "span",
  placeholder: "",
});

const { primitiveElement, currentElement } = usePrimitiveElement();

const context = inject(SELECT_INJECTION_KEY);

onMounted(() => {
  context!.valueElement = currentElement;
  // context!.valueElementHasChildren // check slot has children or not
});
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :as="as"
    :as-child="asChild"
    :style="{ pointerEvents: 'none' }"
  >
    <template v-if="shouldShowPlaceholder(context?.modelValue?.value)">
      {{ placeholder }}
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </Primitive>
</template>
