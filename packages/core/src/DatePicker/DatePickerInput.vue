<script lang="ts">
import { DateFieldInput, type DateFieldInputProps } from '..'

export interface DatePickerInputProps extends DateFieldInputProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerInputProps>()
</script>

<template>
  <DateFieldInput v-bind="props">
    <slot />
  </DateFieldInput>
</template>
