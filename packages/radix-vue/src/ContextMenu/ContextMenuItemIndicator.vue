<script setup lang="ts">
import { PrimitiveSpan } from "@/Primitive";
import { inject } from "vue";
import type { ContextMenuCheckboxProvideValue } from "./ContextMenuCheckboxItem.vue";

const modelValue = inject<ContextMenuCheckboxProvideValue>("modelValue");
</script>

<template>
  <PrimitiveSpan v-if="modelValue" style="pointer-events: none">
    <slot />
  </PrimitiveSpan>
</template>
