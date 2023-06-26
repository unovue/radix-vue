<script setup lang="ts">
import { inject, ref, onMounted, watchEffect, computed } from "vue";
import {
  CONTEXT_MENU_INJECTION_KEY,
  type ContextMenuProvideValue,
} from "./ContextMenuRoot.vue";

const injectedValue = inject<ContextMenuProvideValue>(
  CONTEXT_MENU_INJECTION_KEY
);

const arrowElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.arrowElement.value = arrowElement.value;
  console.log(injectedValue?.middlewareData);
});

const arrowX = ref(0);
const arrowY = ref(0);
const offset = ref(0);

watchEffect(() => {
  if (
    injectedValue.middlewareData.value &&
    injectedValue?.middlewareData.value.arrow
  ) {
    const { x, y } = injectedValue.middlewareData.value.arrow;
    arrowX.value = x;
    arrowY.value = y;
    offset.value = -Math.abs(injectedValue.middlewareData.value.offset.y) / 2;
  }
});

const position = computed(() => {
  const opposedSide = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom",
  };
  return opposedSide[injectedValue?.floatPosition.value];
});
</script>

<template>
  <div
    ref="arrowElement"
    :style="{
      left: arrowX ? `${arrowX}px` : '',
      top: arrowY ? `${arrowY}px` : '',
      [position]: `${offset}px`,
      'transform-oriƒgin': 'center 0px',
    }"
    style="
      position: absolute;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      z-index: -1;
    "
  ></div>
</template>
