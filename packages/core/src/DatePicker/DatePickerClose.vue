<script lang="ts">
import { PopoverClose, type PopoverCloseProps } from '..'

export interface DatePickerCloseProps extends PopoverCloseProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerCloseProps>()
</script>

<template>
  <PopoverClose v-bind="props">
    <slot />
  </PopoverClose>
</template>
