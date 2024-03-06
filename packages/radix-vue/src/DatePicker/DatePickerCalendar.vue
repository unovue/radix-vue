<script lang="ts">
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
    initial-focus
    :multiple="false"
    :model-value="rootContext.modelValue.value"
    :placeholder="rootContext.placeholder.value"
    @update:model-value="rootContext.onDateChange"
    @update:placeholder="rootContext.onPlaceholderChange"
  >
    <slot
      :date="date"
      :grid="grid"
      :week-days="weekDays"
      :formatter="formatter"
    />
  </CalendarRoot>
</template>
