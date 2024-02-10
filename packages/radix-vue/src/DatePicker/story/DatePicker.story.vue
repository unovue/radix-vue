<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { type DateValue } from '@internationalized/date'
import {
  DatePickerArrow,
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerField,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerInput,
  DatePickerNext,
  DatePickerPrev,
  DatePickerRoot,
  DatePickerTrigger,
} from '../'
import { Label } from '@/Label'
</script>

<template>
  <Story title="Date Picker">
    <Variant title="default">
      <Label for="date-field">Input label</Label>
      <DatePickerRoot
        id="date-field"
        :is-date-unavailable="(date:DateValue) => date.day === 19"
        granularity="second"
      >
        <DatePickerField v-slot="{ segments }">
          <DatePickerInput v-for="item in segments" :key="item.part" :part="item.part">
            {{ item.value }}
          </DatePickerInput>
          <DatePickerTrigger>
            <Icon icon="radix-icons:calendar" class="w-6 h-6" />
          </DatePickerTrigger>
        </DatePickerField>

        <DatePickerContent class="rounded-lg bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade">
          <DatePickerArrow class="fill-white" />
          <DatePickerCalendar
            v-slot="{ weekDays, months }"
            class="p-[22px]"
          >
            <DatePickerHeader class="flex items-center justify-between">
              <DatePickerPrev
                class="inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-10 h-10 hover:bg-black hover:text-white active:scale-98 active:transition-all"
              >
                <Icon icon="radix-icons:chevron-left" class="w-6 h-6" />
              </DatePickerPrev>
              <DatePickerHeading class="text-[15px] text-black font-medium" />
              <DatePickerNext
                class="inline-flex items-center cursor-pointer justify-center text-black rounded-[9px] bg-transparent w-10 h-10 hover:bg-black hover:text-white active:scale-98 active:transition-all"
              >
                <Icon icon="radix-icons:chevron-right" class="w-6 h-6" />
              </DatePickerNext>
            </DatePickerHeader>
            <div
              class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <DatePickerGrid v-for="month in months" :key="month.value.toString()" class="w-full border-collapse select-none space-y-1">
                <DatePickerGridHead>
                  <DatePickerGridRow class="mb-1 flex w-full justify-between">
                    <DatePickerHeadCell
                      v-for="day in weekDays" :key="day"
                      class="w-10 rounded-md text-xs !font-normal text-black"
                    >
                      {{ day }}
                    </DatePickerHeadCell>
                  </DatePickerGridRow>
                </DatePickerGridHead>
                <DatePickerGridBody>
                  <DatePickerGridRow
                    v-for="(weekDates, index) in month.weeks"
                    :key="`weekDate-${index}`"
                    class="flex w-full"
                  >
                    <DatePickerCell
                      v-for="weekDate in weekDates"
                      :key="weekDate.toString()"
                      :date="weekDate"
                      class="relative !p-0 text-center text-sm w-10 h-10"
                    >
                      <DatePickerCellTrigger
                        :day="weekDate"
                        :month="month.value"
                        class="group relative inline-flex items-center justify-center whitespace-nowrap rounded-[9px] border border-transparent bg-transparent p-0 text-sm font-normal text-black w-10 h-10 hover:border-black data-[disabled]:pointer-events-none data-[outside-month]:pointer-events-none data-[selected]:bg-black data-[selected]:font-medium data-[disabled]:text-black/30 data-[selected]:text-white data-[unavailable]:text-black/30 data-[unavailable]:line-through"
                      >
                        <div
                          class="absolute top-[5px] hidden rounded-full w-1 h-1 group-data-[today]:block group-data-[today]:bg-grass9 group-data-[selected]:bg-white"
                        />
                        {{ weekDate.day }}
                      </DatePickerCellTrigger>
                    </DatePickerCell>
                  </DatePickerGridRow>
                </DatePickerGridBody>
              </DatePickerGrid>
            </div>
          </DatePickerCalendar>
        </DatePickerContent>
      </DatePickerRoot>
    </Variant>
  </Story>
</template>
