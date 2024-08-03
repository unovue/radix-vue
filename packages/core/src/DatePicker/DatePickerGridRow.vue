<script lang="ts">
import { CalendarGridRow, type CalendarGridRowProps } from '..'

export interface DatePickerGridRowProps extends CalendarGridRowProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerGridRowProps>()
</script>

<template>
  <CalendarGridRow v-bind="props">
    <slot />
  </CalendarGridRow>
</template>
