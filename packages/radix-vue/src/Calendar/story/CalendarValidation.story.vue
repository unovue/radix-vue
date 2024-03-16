<script setup lang="ts">
import Calendar from './_DummyCalendar.vue'
import type { CalendarRootProps } from '../'
import { type DateValue, createCalendarDate, isWeekend } from 'flat-internationalized-date'
import { ref } from 'vue'

const isDateUnavailable: CalendarRootProps['isDateUnavailable'] = (date) => {
  return isWeekend(date, 'en')
}
const isDateDisabled: CalendarRootProps['isDateUnavailable'] = (date) => {
  return date.day > 20
}

const modelValue = ref<DateValue>()
const defaultValue = createCalendarDate({ year: 2024, month: 2, day: 14 })
const placeholder = createCalendarDate({ year: 2024, month: 4, day: 14 })
const minValue = createCalendarDate({ year: 2024, month: 2, day: 12 })
const maxValue = createCalendarDate({ year: 2024, month: 2, day: 20 })
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
