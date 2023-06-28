<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan } from "@/Primitive";
import type { DropdownMenuCheckboxProvideValue } from "./DropdownMenuCheckboxItem.vue";

const modelValue = inject<DropdownMenuCheckboxProvideValue>("modelValue");
</script>

<template>
  <PrimitiveSpan v-if="modelValue" style="pointer-events: none">
    <slot />
  </PrimitiveSpan>
</template>
