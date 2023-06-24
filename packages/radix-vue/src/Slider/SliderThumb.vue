<script setup lang="ts">
import { ref, inject } from "vue";
import { SLIDER_INJECTION_KEY } from "./SliderRoot.vue";
import type { SliderProvideValue } from "./SliderRoot.vue";

const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY);

const offsetHandler = ref(0);
</script>

<template>
  <span
    :style="`position: absolute; left: calc(${
      injectedValue?.modelValue % +offsetHandler
    }px)`"
  >
    <span
      bind:this="{$thumbElement}"
      role="slider"
      :aria-valuenow="injectedValue?.modelValue"
      :aria-valuemin="injectedValue?minValue"
      :aria-valuemax="injectedValue?maxValue"
      :aria-orientation="injectedValue?.orientation"
      on:keydown="{handleKeydown}"
      tabindex="0"
      class="{className}"
    ></span>
  </span>
</template>
