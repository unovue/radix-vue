<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";

const injectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const props = defineProps({
  class: String,
});

const arrowElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.arrowElement.value = arrowElement.value;
});
</script>

<template>
  <span ref="arrowElement" style="position: absolute">
    <svg
      :class="props.class"
      width="10"
      height="5"
      viewBox="0 0 30 10"
      preserveAspectRatio="none"
      style="display: block"
    >
      <polygon points="0,0 30,0 15,10"></polygon>
    </svg>
  </span>
</template>
