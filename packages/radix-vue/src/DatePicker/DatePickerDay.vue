<script lang="ts">
import { CalendarDay, type CalendarDayProps } from '..'

export interface DatePickerDayProps extends CalendarDayProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerDayProps>()
</script>

<template>
  <CalendarDay v-bind="props">
    <slot />
  </CalendarDay>
</template>
