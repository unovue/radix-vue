<script setup lang="ts">
import type { Matcher } from '@/shared/date'
import DateRangeField from './_DummyDateRangeField.vue'
import { createCalendarDate } from 'flat-internationalized-date'

const defaultValue = { start: createCalendarDate({ year: 2024, month: 2, day: 20 }), end: createCalendarDate({ year: 2024, month: 2, day: 27 }) }
const minValue = createCalendarDate({ year: 2024, month: 2, day: 15 })
const maxValue = createCalendarDate({ year: 2024, month: 2, day: 28 })

const isFirstOrFifteenth: Matcher = (date) => {
  return date.day === 1 || date.day === 15
}
</script>

<template>
  <Story title="Date Range Field/Validation" :layout="{ type: 'grid', width: '50%', iframe: false }">
    <Variant title="Unavailable">
      <DateRangeField :default-value="defaultValue" :is-date-unavailable="isFirstOrFifteenth" />
    </Variant>

    <Variant title="Disabled">
      <DateRangeField :default-value="defaultValue" :is-date-disabled="isFirstOrFifteenth" />
    </Variant>

    <Variant title="Min">
      <DateRangeField :default-value="defaultValue" :min-value="minValue" />
    </Variant>

    <Variant title="Max">
      <DateRangeField :default-value="defaultValue" :max-value="maxValue" />
    </Variant>
  </Story>
</template>
