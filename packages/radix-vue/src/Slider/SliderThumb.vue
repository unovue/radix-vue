<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import { SLIDER_INJECTION_KEY } from "./SliderRoot.vue";
import type { SliderProvideValue } from "./SliderRoot.vue";

const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY);

const props = defineProps({
  class: String,
});

let extraStep = 2;

function handleKeydown(e: KeyboardEvent) {
  //prevent default when enter/space
  if (e.keyCode === 32 || e.key === "Enter") {
    e.preventDefault();
  }
  const step = parseInt(injectedValue?.step);
  //add value
  if (e.key === "ArrowUp" || e.key === "ArrowRight") {
    if (e.shiftKey) {
      e.preventDefault();
      if (injectedValue?.modelValue?.value + extraStep >= injectedValue?.max) {
        injectedValue?.changeModelValue(injectedValue?.max);
      } else if (
        injectedValue?.modelValue?.value + extraStep <=
        injectedValue?.min
      ) {
        injectedValue?.changeModelValue(injectedValue?.min);
      } else {
        injectedValue?.changeModelValue(
          injectedValue?.modelValue?.value + extraStep
        );
      }
    } else {
      e.preventDefault();
      if (injectedValue?.modelValue?.value + step >= injectedValue?.max) {
        console.log("handlemax");
        injectedValue?.changeModelValue(injectedValue?.max);
      } else if (
        injectedValue?.modelValue?.value + step <=
        injectedValue?.min
      ) {
        injectedValue?.changeModelValue(injectedValue?.min);
      } else {
        injectedValue?.changeModelValue(
          injectedValue?.modelValue?.value + step
        );
      }
    }
  }
  //subtract value
  if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
    if (e.shiftKey) {
      e.preventDefault();
      if (injectedValue?.modelValue?.value - extraStep >= injectedValue?.max) {
        injectedValue?.changeModelValue(injectedValue?.max);
      } else if (
        injectedValue?.modelValue?.value - extraStep <=
        injectedValue?.min
      ) {
        injectedValue?.changeModelValue(injectedValue?.min);
      } else {
        injectedValue?.changeModelValue(
          injectedValue?.modelValue?.value - extraStep
        );
      }
    } else {
      e.preventDefault();
      if (injectedValue?.modelValue?.value - step >= injectedValue?.max) {
        injectedValue?.changeModelValue(injectedValue?.max);
      } else if (
        injectedValue?.modelValue?.value - step <=
        injectedValue?.min
      ) {
        injectedValue?.changeModelValue(injectedValue?.min);
      } else {
        injectedValue?.changeModelValue(
          injectedValue?.modelValue?.value - step
        );
      }
    }
  }
}

const thumbElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue.thumbElement.value = thumbElement.value;
});
</script>

<template>
  <span
    :style="`transform: translateX(-50%); position: absolute; left: calc(${injectedValue?.modelValue?.value}%)`"
  >
    <span
      :class="props.class"
      ref="thumbElement"
      role="slider"
      tabindex="0"
      :aria-valuenow="injectedValue?.modelValue?.value"
      :aria-valuemin="injectedValue?.min"
      :aria-valuemax="injectedValue?.max"
      :aria-orientation="injectedValue?.orientation"
      @keydown="handleKeydown"
    >
    </span>
  </span>
</template>
