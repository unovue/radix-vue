<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { CalendarDateTime, type DateValue, toZoned } from '@internationalized/date'
import {
  DateRangePickerArrow,
  DateRangePickerCalendar,
  DateRangePickerCell,
  DateRangePickerContent,
  DateRangePickerDay,
  DateRangePickerField,
  DateRangePickerGrid,
  DateRangePickerGridBody,
  DateRangePickerGridHead,
  DateRangePickerGridRow,
  DateRangePickerHeadCell,
  DateRangePickerHeader,
  DateRangePickerHeading,
  DateRangePickerInput,
  DateRangePickerNext,
  DateRangePickerPrev,
  DateRangePickerRoot,
  DateRangePickerTrigger,
} from '../'
import { Label } from '@/Label'
import { type Ref, ref } from 'vue'

const calendarDateTime = new CalendarDateTime(1980, 1, 20, 12, 30, 0, 0)
const zonedDateTime = toZoned(calendarDateTime, 'America/New_York')
const value = ref({
  start: zonedDateTime,
  end: zonedDateTime.add({ days: 4 }),
}) as Ref<{ start: DateValue | undefined; end: DateValue | undefined }>
</script>

<template>
  <Story title="Date Range Picker">
    <Variant title="default">
      <Label for="date-field">Input label</Label>
      <DateRangePickerRoot
        id="date-field"
        v-model="value"
        :is-date-unavailable="(date:DateValue) => date.day === 19"
        granularity="second"
      >
        <DateRangePickerField v-slot="{ segments }">
          <DateRangePickerInput
            v-for="item in segments.start"
            :key="item.part"
            type="start"
            :part="item.part"
          >
            {{ item.value }}
          </DateRangePickerInput>
          -
          <DateRangePickerInput
            v-for="item in segments.end"
            :key="item.part"
            type="end"
            :part="item.part"
          >
            {{ item.value }}
          </DateRangePickerInput>
          <DateRangePickerTrigger>
            <Icon icon="radix-icons:calendar" class="w-6 h-6" />
          </DateRangePickerTrigger>
        </DateRangePickerField>

        <DateRangePickerContent class="rounded-lg bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade">
          <DateRangePickerArrow class="fill-white" />
          <DateRangePickerCalendar
            v-slot="{ weekDays, months }"
            class="p-[22px]"
          >
            <DateRangePickerHeader class="flex items-center justify-between">
              <DateRangePickerPrev
                class="inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-10 h-10 hover:bg-black hover:text-white active:scale-98 active:transition-all"
              >
                <Icon icon="radix-icons:chevron-left" class="w-6 h-6" />
              </DateRangePickerPrev>
              <DateRangePickerHeading class="text-[15px] text-black font-medium" />
              <DateRangePickerNext
                class="inline-flex items-center cursor-pointer justify-center text-black rounded-[9px] bg-transparent w-10 h-10 hover:bg-black hover:text-white active:scale-98 active:transition-all"
              >
                <Icon icon="radix-icons:chevron-right" class="w-6 h-6" />
              </DateRangePickerNext>
            </DateRangePickerHeader>
            <div
              class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <DateRangePickerGrid v-for="month in months" :key="month.value.toString()" class="w-full border-collapse select-none space-y-1">
                <DateRangePickerGridHead>
                  <DateRangePickerGridRow class="mb-1 flex w-full justify-between">
                    <DateRangePickerHeadCell
                      v-for="day in weekDays" :key="day"
                      class="w-10 rounded-md text-xs !font-normal text-black"
                    >
                      {{ day }}
                    </DateRangePickerHeadCell>
                  </DateRangePickerGridRow>
                </DateRangePickerGridHead>
                <DateRangePickerGridBody>
                  <DateRangePickerGridRow
                    v-for="(weekDates, index) in month.weeks"
                    :key="`weekDate-${index}`"
                    class="flex w-full"
                  >
                    <DateRangePickerCell
                      v-for="weekDate in weekDates"
                      :key="weekDate.toString()"
                      :date="weekDate"
                      class="relative !p-0 text-center text-sm w-10 h-10"
                    >
                      <DateRangePickerDay
                        :day="weekDate"
                        :month="month.value"
                        class="group relative inline-flex items-center justify-center whitespace-nowrap border border-transparent bg-transparent p-0 text-sm font-normal text-black w-10 h-10 hover:border-black data-[disabled]:pointer-events-none data-[outside-month]:pointer-events-none data-[selected]:bg-black/30 data-[selected]:font-medium data-[disabled]:text-black/30 data-[selected]:text-white data-[unavailable]:text-black/30 data-[unavailable]:line-through data-[highlighted]:bg-grass9/30 data-[highlighted]:rounded-none data-[selection-start]:bg-black data-[selection-start]:rounded-l-[9px] data-[selection-end]:bg-black data-[selection-end]:rounded-r-[9px] data-[selected]:[&:not([data-selection-start])]:[&:not([data-selection-end])]:rounded-none"
                      >
                        <div
                          class="absolute top-[5px] hidden rounded-full w-1 h-1 group-data-[today]:block group-data-[today]:bg-grass9 group-data-[selected]:bg-white"
                        />
                        {{ weekDate.day }}
                      </DateRangePickerDay>
                    </DateRangePickerCell>
                  </DateRangePickerGridRow>
                </DateRangePickerGridBody>
              </DateRangePickerGrid>
            </div>
          </DateRangePickerCalendar>
        </DateRangePickerContent>
      </DateRangePickerRoot>
    </Variant>
  </Story>
</template>
