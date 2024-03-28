<script setup lang="ts">
import { CalendarDateTime, type DateValue, getLocalTimeZone, now } from '@internationalized/date'
import DateRangePicker from './_DummyDateRangePicker.vue'
import { type Ref, ref } from 'vue'

const defaultValue = { start: new CalendarDateTime(2024, 2, 20), end: new CalendarDateTime(2024, 2, 27) }
const modelValue = ref(defaultValue) as Ref<{ start: DateValue; end: DateValue }>

const defaultPlaceholder = new CalendarDateTime(2023, 10, 11, 12, 30)
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
