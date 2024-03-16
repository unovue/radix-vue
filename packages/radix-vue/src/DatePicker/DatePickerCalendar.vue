<script lang="ts">
import { type DateValue, compare } from 'flat-internationalized-date'
import { CalendarRoot } from '..'
import { injectDatePickerRootContext } from './DatePickerRoot.vue'
</script>

<script setup lang="ts">
const rootContext = injectDatePickerRootContext()
</script>

<template>
  <CalendarRoot
    v-slot="{ weekDays, grid, date, formatter }"
    v-bind="{
      isDateDisabled: rootContext.isDateDisabled,
      isDateUnavailable: rootContext.isDateUnavailable,
      minValue: rootContext.minValue.value,
      maxValue: rootContext.maxValue.value,
      locale: rootContext.locale.value,
      disabled: rootContext.disabled.value,
      pagedNavigation: rootContext.pagedNavigation.value,
      weekStartsOn: rootContext.weekStartsOn.value,
      weekdayFormat: rootContext.weekdayFormat.value,
      fixedWeeks: rootContext.fixedWeeks.value,
      numberOfMonths: rootContext.numberOfMonths.value,
      readonly: rootContext.readonly.value,
      preventDeselect: rootContext.preventDeselect.value,
    }"
    :model-value="rootContext.modelValue.value"
    :placeholder="rootContext.placeholder.value"
    initial-focus
    :multiple="false"
    @update:model-value="(date: DateValue | undefined) => {
      if (date && rootContext.modelValue.value && compare(date, rootContext.modelValue.value) === 0) return
      rootContext.onDateChange(date)
    }"
    @update:placeholder="(date: DateValue) => {
      if (compare(date, rootContext.placeholder.value) === 0) return
      rootContext.onPlaceholderChange(date)
    }"
  >
    <slot
      :date="date"
      :grid="grid"
      :week-days="weekDays"
      :formatter="formatter"
    />
  </CalendarRoot>
</template>
