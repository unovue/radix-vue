<script lang="ts">
export interface SliderThumbProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { computed, inject, onMounted } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { SLIDER_INJECTION_KEY } from "./SliderRoot.vue";
import type { SliderProvideValue } from "./SliderRoot.vue";
import { convertValueToPercentage } from "./utils";

defineOptions({
  inheritAttrs: false,
});

const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY);
const { primitiveElement, currentElement: thumbElement } =
  usePrimitiveElement();

onMounted(() => {
  if (injectedValue?.thumbElements && thumbElement.value) {
    injectedValue.thumbElements.value.push(thumbElement.value);
  }
});

const props = withDefaults(defineProps<SliderThumbProps>(), {
  as: "span",
});

const index = computed<number>(() => {
  if (injectedValue && injectedValue.thumbElements && thumbElement.value) {
    const foundIndex = injectedValue.thumbElements.value.indexOf(
      thumbElement.value
    );
    if (foundIndex !== -1) {
      return foundIndex;
    }
  }

  return -1;
});

const value = computed<number | undefined>(() => {
  if (injectedValue?.modelValue && index.value !== -1) {
    return injectedValue.modelValue.value?.[index.value];
  }

  return undefined;
});

const percent = computed(() => {
  if (value.value === undefined) {
    return 0;
  }

  const minValue = injectedValue?.min ?? 0;
  const maxValue = injectedValue?.max ?? 100;

  return convertValueToPercentage(value.value, minValue, maxValue);
});

const thumbStyle = computed(() => {
  if (!injectedValue) {
    return {};
  }

  const { orientation, flipped } = injectedValue;
  const style: Record<string, string | number> = {
    position: "absolute",
    transform:
      orientation === "vertical" ? "translateY(-50%)" : "translateX(-50%)",
  };

  if (orientation === "vertical") {
    style.top = `${flipped?.value ? 100 - percent.value : percent.value}%`;
  } else {
    style.left = `${flipped?.value ? 100 - percent.value : percent.value}%`;
  }

  return style;
});
</script>

<template>
  <span :style="thumbStyle">
    <Primitive
      v-bind="$attrs"
      ref="primitiveElement"
      role="slider"
      tabindex="0"
      :data-disabled="injectedValue?.disabled"
      :data-orientation="injectedValue?.orientation"
      :aria-valuenow="value"
      :aria-valuemin="injectedValue?.min"
      :aria-valuemax="injectedValue?.max"
      :aria-orientation="injectedValue?.orientation"
      :as-child="props.asChild"
      :as="as"
    >
    </Primitive>
  </span>
</template>
