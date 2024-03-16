<script setup lang="ts">
import DateRangeField from './_DummyDateRangeField.vue'
import { type DateValue, createCalendarDateTime, getLocalTimeZone, now } from 'flat-internationalized-date'
import { type Ref, ref } from 'vue'

const defaultValue = { start: createCalendarDateTime({ year: 2024, month: 2, day: 20 }), end: createCalendarDateTime({ year: 2024, month: 2, day: 27 }) }
const modelValue = ref(defaultValue) as Ref<{ start: DateValue; end: DateValue }>

const defaultPlaceholder = createCalendarDateTime({ year: 2023, month: 10, day: 11, hour: 12, minute: 30 })
const localTimezonePlaceholder = now(getLocalTimeZone())
</script>

<template>
  <Story title="Date Range Field/Chromatic" :layout="{ type: 'grid', width: '50%', iframe: false }">
    <Variant title="Empty default">
      <DateRangeField />
    </Variant>

    <Variant title="With default">
      <DateRangeField :default-value="defaultValue" />
    </Variant>

    <Variant title="Uncontrolled">
      <DateRangeField :default-value="defaultValue" />
    </Variant>

    <Variant title="Controlled">
      <DateRangeField v-model="modelValue" />
    </Variant>

    <Variant title="Disabled">
      <DateRangeField :default-value="defaultValue" disabled />
    </Variant>

    <Variant title="Locale awareness">
      <DateRangeField :default-value="defaultValue" locale="de" />
    </Variant>

    <Variant title="Placeholder">
      <DateRangeField :default-placeholder="defaultPlaceholder" />
    </Variant>

    <Variant title="Locale timezone">
      <DateRangeField :default-placeholder="localTimezonePlaceholder" />
    </Variant>
  </Story>
</template>
