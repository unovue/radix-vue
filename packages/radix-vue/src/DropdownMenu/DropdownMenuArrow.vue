<script setup lang="ts">
import { MenuArrow, type MenuArrowProps } from "@/Menu";

const props = defineProps<MenuArrowProps>();
</script>

<template>
  <MenuArrow v-bind="props">
    <slot></slot>
  </MenuArrow>
</template>
