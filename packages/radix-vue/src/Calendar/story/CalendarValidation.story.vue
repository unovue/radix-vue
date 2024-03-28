<script setup lang="ts">
import Calendar from './_DummyCalendar.vue'
import type { CalendarRootProps } from '../'
import { CalendarDate, type DateValue, isWeekend } from '@internationalized/date'
import { ref } from 'vue'

const isDateUnavailable: CalendarRootProps['isDateUnavailable'] = (date) => {
  return isWeekend(date, 'en')
}
const isDateDisabled: CalendarRootProps['isDateUnavailable'] = (date) => {
  return date.day > 20
}

const modelValue = ref<DateValue>()
const defaultValue = new CalendarDate(2024, 2, 14)
const placeholder = new CalendarDate(2024, 4, 14)
const minValue = new CalendarDate(2024, 2, 12)
const maxValue = new CalendarDate(2024, 2, 20)
</script>

<template>
  <Story title="Calendar/Validation" :layout="{ type: 'grid', width: '50%', iframe: false }">
    <Variant title="Unavailable">
      <Calendar :default-value="defaultValue" :is-date-unavailable="isDateUnavailable" />
    </Variant>

    <Variant title="Disabled">
      <Calendar :default-value="defaultValue" :is-date-disabled="isDateDisabled" />
    </Variant>

    <Variant title="Min">
      <Calendar :default-value="defaultValue" :min-value="minValue" />
    </Variant>

    <Variant title="Max">
      <Calendar :default-value="defaultValue" :max-value="maxValue" />
    </Variant>

    <Variant title="Min Max">
      <Calendar :default-value="defaultValue" :min-value="minValue" :max-value="maxValue" />
    </Variant>
  </Story>
</template>
