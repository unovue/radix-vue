<script lang="ts" setup>
import type { DateValue } from '@internationalized/date'
import type { RangeCalendarRootProps } from '../'
import { RangeCalendarCell, RangeCalendarCellTrigger, RangeCalendarGrid, RangeCalendarGridBody, RangeCalendarGridHead, RangeCalendarGridRow, RangeCalendarHeadCell, RangeCalendarHeader, RangeCalendarHeading, RangeCalendarHeadingSegment, RangeCalendarNext, RangeCalendarPrev, RangeCalendarRoot } from '../'
import type { CalendarView } from '@/Calendar'

const props = defineProps<{
  calendarProps?: RangeCalendarRootProps
  emits?: { 'onUpdate:modelValue'?: (data: DateValue) => void } }>()
function computeTestIdByView(view: CalendarView) {
  if (view === 'month')
    return 'day'
  if (view === 'year')
    return 'month'

  return 'year'
}
</script>

<template>
  <RangeCalendarRoot
    v-slot="{ weekDays, grid, calendarView }"
    v-bind="props.calendarProps"
    data-testid="calendar"
    v-on="{ 'update:modelValue': props.emits?.['onUpdate:modelValue'] }"
  >
    <RangeCalendarHeader data-testid="header">
      <RangeCalendarPrev
        data-testid="prev-button"
      />
      <RangeCalendarHeading v-slot="{ headingValue }" data-testid="heading">
        <RangeCalendarHeadingSegment
          v-for="item in headingValue"
          :key="item.value"
          :type="item.type"
          :value="item.value"
          :data-testid="item.type === 'literal' ? '' : `heading-${item.type}`"
        />
      </RangeCalendarHeading>
      <RangeCalendarNext
        data-testid="next-button"
      />
    </RangeCalendarHeader>

    <RangeCalendarGrid
      v-for="month in grid"
      :key="month.value.toString()"
      :data-testid="`grid-${month.value.month}`"
    >
      <RangeCalendarGridHead :data-testid="`grid-head-${month.value.month}`">
        <RangeCalendarGridRow>
          <RangeCalendarHeadCell
            v-for="(day, i) in weekDays" :key="day"
            :data-testid="`weekday-${month.value.month}-${i}`"
          >
            {{ day }}
          </RangeCalendarHeadCell>
        </RangeCalendarGridRow>
      </RangeCalendarGridHead>
      <RangeCalendarGridBody :data-testid="`grid-body-${month.value.month}`">
        <RangeCalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" data-week :data-testid="`grid-row-${month.value.month}-${index}`">
          <RangeCalendarCell
            v-for="(weekDate, d) in weekDates"
            :key="weekDate.toString()"
            :data-testid="`cell-${weekDate.month}-${d}`"
            :date="weekDate"
          >
            <RangeCalendarCellTrigger
              :day="weekDate"
              :month="month.value"
              :data-testid="`date-${weekDate.month}-${weekDate[computeTestIdByView(calendarView)]}`"
            />
          </RangeCalendarCell>
        </RangeCalendarGridRow>
      </RangeCalendarGridBody>
    </RangeCalendarGrid>
  </RangeCalendarRoot>
</template>
