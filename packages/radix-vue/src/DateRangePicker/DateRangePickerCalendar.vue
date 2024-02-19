<script lang="ts">
import { RangeCalendarRoot } from '..'
import { injectDateRangePickerRootContext } from './DateRangePickerRoot.vue'
</script>

<script setup lang="ts">
const rootContext = injectDateRangePickerRootContext()
</script>

<template>
  <RangeCalendarRoot
    v-slot="{ weekDays, grid, date, formatter, calendarView }"
    v-bind="{
      isDateDisabled: rootContext.isDateDisabled,
      isDateUnavailable: rootContext.isDateUnavailable,
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
    :class="$attrs.class"
    initial-focus
    :model-value="rootContext.modelValue.value"
    :placeholder="rootContext.placeholder.value"
    @update:model-value="rootContext.onDateChange"
    @update:placeholder="rootContext.onPlaceholderChange"
  >
    <slot
      :date="date"
      :grid="grid"
      :calendar-view="calendarView"
      :week-days="weekDays"
      :formatter="formatter"
    />
  </RangeCalendarRoot>
</template>
