<script setup lang="ts">
import {
  MenuRadioItem,
  type MenuRadioItemProps,
  type MenuItemEmits,
} from "@/Menu";
import { useEmitAsProps } from "@/shared";

const props = defineProps<MenuRadioItemProps>();
const emits = defineEmits<MenuItemEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuRadioItem v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuRadioItem>
</template>
