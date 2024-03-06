<script lang="ts">
import { CalendarHeadCell, type CalendarHeadCellProps } from '..'

export interface DatePickerHeadCellProps extends CalendarHeadCellProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerHeadCellProps>()
</script>

<template>
  <CalendarHeadCell v-bind="props">
    <slot />
  </CalendarHeadCell>
</template>
