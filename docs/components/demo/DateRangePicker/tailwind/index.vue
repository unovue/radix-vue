<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  DateRangePickerArrow,
  DateRangePickerCalendar,
  DateRangePickerCell,
  DateRangePickerCellTrigger,
  DateRangePickerContent,
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
  Label,
} from 'radix-vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label class="text-sm text-gray9" for="date-field">Birthday</Label>
    <DateRangePickerRoot
      id="date-field"
      :is-date-unavailable="date => date.day === 19"
    >
      <DateRangePickerField
        v-slot="{ segments }"
        class="flex select-none bg-white items-center rounded-lg text-center text-green10 border border-transparent p-1 data-[invalid]:border-red-500"
      >
        <template v-for="item in segments.start" :key="item.part">
          <DateRangePickerInput
            v-if="item.part === 'literal'"
            :part="item.part"
            type="start"
          >
            {{ item.value }}
          </DateRangePickerInput>
          <DateRangePickerInput
            v-else
            :part="item.part"
            class="rounded-md p-0.5 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black aria-[valuetext=Empty]:text-green9"
            type="start"
          >
            {{ item.value }}
          </DateRangePickerInput>
        </template>
        <span class="mx-2">

          -
        </span>
        <template v-for="item in segments.end" :key="item.part">
          <DateRangePickerInput
            v-if="item.part === 'literal'"
            :part="item.part"
            type="end"
          >
            {{ item.value }}
          </DateRangePickerInput>
          <DateRangePickerInput
            v-else
            :part="item.part"
            class="rounded-md p-0.5 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black aria-[valuetext=Empty]:text-green9"
            type="end"
          >
            {{ item.value }}
          </DateRangePickerInput>
        </template>

        <DateRangePickerTrigger class="ml-4 focus:shadow-[0_0_0_2px] focus:shadow-black">
          <Icon icon="radix-icons:calendar" class="w-6 h-6" />
        </DateRangePickerTrigger>
      </DateRangePickerField>

      <DateRangePickerContent
        :side-offset="4"
        class="rounded-xl bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
      >
        <DateRangePickerArrow class="fill-white" />
        <DateRangePickerCalendar
          v-slot="{ weekDays, grid }"
          class="p-4"
        >
          <DateRangePickerHeader class="flex items-center justify-between">
            <DateRangePickerPrev
              class="inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
            >
              <Icon icon="radix-icons:chevron-left" class="w-6 h-6" />
            </DateRangePickerPrev>

            <DateRangePickerHeading class="text-[15px] text-black font-medium" />
            <DateRangePickerNext
              class="inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
            >
              <Icon icon="radix-icons:chevron-right" class="w-6 h-6" />
            </DateRangePickerNext>
          </DateRangePickerHeader>
          <div
            class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <DateRangePickerGrid v-for="month in grid" :key="month.value.toString()" class="w-full border-collapse select-none space-y-1">
              <DateRangePickerGridHead>
                <DateRangePickerGridRow class="mb-1 flex w-full justify-between">
                  <DateRangePickerHeadCell
                    v-for="day in weekDays" :key="day"
                    class="w-8 rounded-md text-xs !font-normal text-black"
                  >
                    {{ day }}
                  </DateRangePickerHeadCell>
                </DateRangePickerGridRow>
              </DateRangePickerGridHead>
              <DateRangePickerGridBody>
                <DateRangePickerGridRow
                  v-for="(weekDates, index) in month.rows"
                  :key="`weekDate-${index}`"
                  class="flex w-full"
                >
                  <DateRangePickerCell
                    v-for="weekDate in weekDates"
                    :key="weekDate.toString()"
                    :date="weekDate"
                  >
                    <DateRangePickerCellTrigger
                      :day="weekDate"
                      :month="month.value"
                      class="relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-black w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[disabled]:text-black/30 data-[selected]:!bg-green10 data-[selected]:text-white hover:bg-green5 data-[highlighted]:bg-green5 data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9 "
                    />
                  </DateRangePickerCell>
                </DateRangePickerGridRow>
              </DateRangePickerGridBody>
            </DateRangePickerGrid>
          </div>
        </DateRangePickerCalendar>
      </DateRangePickerContent>
    </DateRangePickerRoot>
  </div>
</template>
