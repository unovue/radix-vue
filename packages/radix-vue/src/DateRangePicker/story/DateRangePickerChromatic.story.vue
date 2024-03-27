<script setup lang="ts">
import { type DateValue, createCalendarDateTime, getLocalTimeZone, now } from '@internationalized/date'
import DateRangePicker from './_DummyDateRangePicker.vue'
import { type Ref, ref } from 'vue'

const defaultValue = { start: createCalendarDateTime({ year: 2024, month: 2, day: 20 }), end: createCalendarDateTime({ year: 2024, month: 2, day: 27 }) }
const modelValue = ref(defaultValue) as Ref<{ start: DateValue; end: DateValue }>

const defaultPlaceholder = createCalendarDateTime({ year: 2023, month: 10, day: 11, hour: 12, minute: 30 })
const localTimezonePlaceholder = now(getLocalTimeZone())
</script>

<template>
  <Story title="Date Range Picker/Chromatic" :layout="{ type: 'grid', width: '50%', iframe: false }">
    <Variant title="Empty default">
      <DateRangePicker />
    </Variant>

    <Variant title="With default">
      <DateRangePicker :default-value="defaultValue" />
    </Variant>

    <Variant title="Uncontrolled">
      <DateRangePicker :default-value="defaultValue" />
    </Variant>

    <Variant title="Controlled">
      <DateRangePicker v-model="modelValue" />
    </Variant>

    <Variant title="Disabled">
      <DateRangePicker :default-value="defaultValue" disabled />
    </Variant>

    <Variant title="Prevent deselect">
      <DateRangePicker :default-value="defaultValue" prevent-deselect />
    </Variant>

    <Variant title="Locale awareness">
      <DateRangePicker :default-value="defaultValue" locale="de" />
    </Variant>

    <Variant title="Fixed weeks">
      <DateRangePicker :default-value="defaultValue" fixed-weeks />
    </Variant>

    <Variant title="Multiple months">
      <DateRangePicker :default-value="defaultValue" :number-of-months="2" />
    </Variant>

    <Variant title="Multiple months (Paged nagivation)">
      <DateRangePicker :default-value="defaultValue" :number-of-months="2" paged-navigation />
    </Variant>
  </Story>
</template>
