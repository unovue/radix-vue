<script setup lang="ts">
import { inject } from "vue";
import type { ContextMenuCheckboxProvideValue } from "./ContextMenuCheckboxItem.vue";

const modelValue = inject<ContextMenuCheckboxProvideValue>("modelValue");
</script>

<template>
  <span v-if="modelValue" style="pointer-events: none">
    <slot />
  </span>
</template>
