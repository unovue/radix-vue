<script lang="ts">
import { CalendarPrev, type CalendarPrevProps } from '..'

export interface DatePickerPrevProps extends CalendarPrevProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerPrevProps>()
</script>

<template>
  <CalendarPrev v-bind="props">
    <slot />
  </CalendarPrev>
</template>
