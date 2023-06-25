<script setup lang="ts">
import { inject } from "vue";
import type { DropdownMenuCheckboxProvideValue } from "./DropdownMenuCheckboxItem.vue";

const modelValue = inject<DropdownMenuCheckboxProvideValue>("modelValue");
</script>

<template>
  <span v-if="modelValue" style="pointer-events: none">
    <slot />
  </span>
</template>
