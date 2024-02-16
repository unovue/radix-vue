<script lang="ts" setup>
import type { DateValue } from '@internationalized/date'
import type { CalendarRootProps, CalendarView } from '../'
import { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarHeadingSegment, CalendarNext, CalendarPrev, CalendarRoot } from '../'

const props = defineProps<{ calendarProps?: CalendarRootProps; emits?: { 'onUpdate:modelValue'?: (data: DateValue) => void } }>()

function computeTestIdByView(view: CalendarView) {
  if (view === 'month')
    return 'day'
  if (view === 'year')
    return 'month'

  return 'year'
}
</script>

<template>
  <CalendarRoot
    v-slot="{ weekDays, grid, calendarView }"
    v-bind="props.calendarProps"
    data-testid="calendar"
    v-on="{ 'update:modelValue': props.emits?.['onUpdate:modelValue'] }"
  >
    <CalendarHeader data-testid="header">
      <CalendarPrev
        data-testid="prev-button"
      />
      <CalendarHeading v-slot="{ headingValue }" data-testid="heading">
        <CalendarHeadingSegment v-for="item in headingValue" :key="item.value" :type="item.type" :value="item.value" :data-testid="item.type === 'literal' ? '' : `heading-${item.type}`" />
      </CalendarHeading>
      <CalendarNext
        data-testid="next-button"
      />
    </CalendarHeader>

    <CalendarGrid v-for="month in grid" :key="month.value.toString()" :data-testid="`grid-${month.value.month}`">
      <CalendarGridHead :data-testid="`grid-head-${month.value.month}`">
        <CalendarGridRow>
          <CalendarHeadCell
            v-for="(day, i) in weekDays" :key="day"
            :data-testid="`weekday-${month.value.month}-${i}`"
          >
            {{ day }}
          </CalendarHeadCell>
        </CalendarGridRow>
      </CalendarGridHead>
      <CalendarGridBody :data-testid="`grid-body-${month.value.month}`">
        <CalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" data-week :data-testid="`grid-row-${month.value.month}-${index}`">
          <CalendarCell
            v-for="(weekDate, d) in weekDates"
            :key="weekDate.toString()"
            :data-testid="`cell-${weekDate.month}-${d}`"
            :date="weekDate"
          >
            <CalendarCellTrigger
              :day="weekDate"
              :month="month.value"
              :data-testid="`date-${weekDate.month}-${weekDate[computeTestIdByView(calendarView)]}`"
            />
          </CalendarCell>
        </CalendarGridRow>
      </CalendarGridBody>
    </CalendarGrid>
  </CalendarRoot>
</template>
