<script lang="ts">
import { DateRangeFieldInput, type DateRangeFieldInputProps } from '..'

export interface DateRangePickerInputProps extends DateRangeFieldInputProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerInputProps>()
</script>

<template>
  <DateRangeFieldInput v-bind="props">
    <slot />
  </DateRangeFieldInput>
</template>
