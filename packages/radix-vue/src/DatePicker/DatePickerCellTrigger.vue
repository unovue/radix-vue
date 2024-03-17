<script lang="ts">
import { CalendarCellTrigger, type CalendarCellTriggerProps } from '..'

export interface DatePickerCellTriggerProps extends CalendarCellTriggerProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerCellTriggerProps>()
</script>

<template>
  <CalendarCellTrigger v-bind="props">
    <slot />
  </CalendarCellTrigger>
</template>
