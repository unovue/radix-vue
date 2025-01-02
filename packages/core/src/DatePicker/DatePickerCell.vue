<script lang="ts">
import { CalendarCell, type CalendarCellProps } from '..'

export interface DatePickerCellProps extends CalendarCellProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerCellProps>()
</script>

<template>
  <CalendarCell v-bind="props">
    <slot />
  </CalendarCell>
</template>
