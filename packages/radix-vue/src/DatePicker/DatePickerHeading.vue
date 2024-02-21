<script lang="ts">
import { CalendarHeading, type CalendarHeadingProps } from '..'

export interface DatePickerHeadingProps extends CalendarHeadingProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerHeadingProps>()
</script>

<template>
  <CalendarHeading
    v-slot="{ headingValue }"
    v-bind="props"
  >
    <slot :heading-value="headingValue" />
  </CalendarHeading>
</template>
