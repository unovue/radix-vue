<script setup lang="ts">
import { MenuLabel, type MenuLabelProps } from "@/Menu";

const props = defineProps<MenuLabelProps>();
</script>

<template>
  <MenuLabel v-bind="props"><slot /></MenuLabel>
</template>
