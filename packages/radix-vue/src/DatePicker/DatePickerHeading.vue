<script lang="ts">
import { CalendarHeading, type CalendarHeadingProps } from '..'

export interface DatePickerHeadingProps extends CalendarHeadingProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerHeadingProps>()
</script>

<template>
  <CalendarHeading v-bind="props">
    <slot />
  </CalendarHeading>
</template>
