<script setup lang="ts">
import { MenuSubTrigger, type MenuSubTriggerProps } from "@/Menu";

const props = defineProps<MenuSubTriggerProps>();
</script>

<template>
  <MenuSubTrigger v-bind="props">
    <slot></slot>
  </MenuSubTrigger>
</template>
