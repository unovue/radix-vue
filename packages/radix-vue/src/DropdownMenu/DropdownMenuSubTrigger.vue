<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import {
  DROPDOWN_MENU_SUB_INJECTION_KEY,
  type DropdownMenuSubProvideValue,
} from "./DropdownMenuSub.vue";

const injectedValue = inject<DropdownMenuSubProvideValue>(
  DROPDOWN_MENU_SUB_INJECTION_KEY
);

const triggerElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});

function handleClick() {
  if (injectedValue?.modelValue.value) {
    injectedValue?.hideTooltip();
  } else {
    injectedValue?.showTooltip();
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "ArrowRight") {
    injectedValue?.showTooltip();
  }
}
</script>

<template>
  <button
    type="button"
    ref="triggerElement"
    data-radix-vue-collection-item
    :aria-expanded="injectedValue?.modelValue.value || false"
    :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <slot />
  </button>
</template>
