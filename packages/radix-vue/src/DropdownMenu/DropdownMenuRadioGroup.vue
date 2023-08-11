<script setup lang="ts">
import {
  MenuRadioGroup,
  type MenuRadioGroupProps,
  type MenuRadioGroupEmits,
} from "@/Menu";
import { useEmitAsProps } from "@/shared";

const props = defineProps<MenuRadioGroupProps>();
const emits = defineEmits<MenuRadioGroupEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuRadioGroup v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuRadioGroup>
</template>
