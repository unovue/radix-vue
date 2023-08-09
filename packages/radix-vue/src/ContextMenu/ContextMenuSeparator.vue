<script setup lang="ts">
import { MenuSeparator, type MenuSeparatorProps } from "@/Menu";

const props = defineProps<MenuSeparatorProps>();
</script>

<template>
  <MenuSeparator v-bind="props">
    <slot></slot>
  </MenuSeparator>
</template>
