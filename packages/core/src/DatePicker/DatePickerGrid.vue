<script lang="ts">
import { CalendarGrid, type CalendarGridProps } from '..'

export interface DatePickerGridProps extends CalendarGridProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerGridProps>()
</script>

<template>
  <CalendarGrid v-bind="props">
    <slot />
  </CalendarGrid>
</template>
