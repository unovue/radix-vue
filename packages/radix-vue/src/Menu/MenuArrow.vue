<script setup lang="ts">
import { PopperArrow, type PopperArrowProps } from '@/Popper'

export interface MenuArrowProps extends PopperArrowProps {}

const props = defineProps<MenuArrowProps>()
</script>

<template>
  <PopperArrow v-bind="props">
    <slot />
  </PopperArrow>
</template>
