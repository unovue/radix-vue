<script setup lang="ts">
import { MenuLabel, type MenuLabelProps } from "@/Menu";

export interface MenubarLabelProps extends MenuLabelProps {}
const props = defineProps<MenubarLabelProps>();
</script>

<template>
  <MenuLabel v-bind="props"><slot /></MenuLabel>
</template>
