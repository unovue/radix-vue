<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarHeadingSegment, CalendarNext, CalendarPrev, CalendarRoot } from '../'
</script>

<template>
  <Story title="Calendar/Multiple" :layout="{ type: 'single', iframe: false }">
    <Variant title="default">
      <CalendarRoot
        v-slot="{ weekDays, grid }"
        class="mt-6 rounded-[15px] border border-black bg-white p-[22px] shadow-md"
        fixed-weeks
        multiple
      >
        <CalendarHeader class="flex items-center justify-between">
          <CalendarPrev
            class="inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-10 h-10 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
          >
            <Icon icon="radix-icons:chevron-left" class="w-6 h-6" />
          </CalendarPrev>
          <CalendarHeading v-slot="{ headingValue }" class="text-[15px] text-black font-medium">
            <CalendarHeadingSegment v-for="item in headingValue" :key="item.value" :type="item.type" :value="item.value" />
          </CalendarHeading>
          <CalendarNext
            class="inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-10 h-10 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
          >
            <Icon icon="radix-icons:chevron-right" class="w-6 h-6" />
          </CalendarNext>
        </CalendarHeader>
        <div
          class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <CalendarGrid v-for="month in grid" :key="month.value.toString()" class="w-full border-collapse select-none space-y-1">
            <CalendarGridHead>
              <CalendarGridRow class="mb-1 flex w-full justify-between">
                <CalendarHeadCell
                  v-for="day in weekDays" :key="day"
                  class="w-10 rounded-md text-xs !font-normal text-black"
                >
                  <div>{{ day.slice(0, 2) }}</div>
                </CalendarHeadCell>
              </CalendarGridRow>
            </CalendarGridHead>
            <CalendarGridBody>
              <CalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="grid grid-cols-4 data-[radix-vue-calendar-month-view]:grid-cols-7">
                <CalendarCell
                  v-for="weekDate in weekDates"
                  :key="weekDate.toString()"
                  :date="weekDate"
                  class="relative !p-0 text-center text-sm w-10 h-10"
                >
                  <CalendarCellTrigger
                    :day="weekDate"
                    :month="month.value"
                    class="relative flex items-center justify-center whitespace-nowrap rounded-[9px] border border-transparent bg-transparent text-sm font-normal text-black p-2 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black hover:border-black data-[disabled]:pointer-events-none data-[outside-view]:pointer-events-none data-[selected]:bg-black data-[selected]:font-medium data-[disabled]:text-black/30 data-[selected]:text-white data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-grass9 data-[selected]:before:bg-white"
                  />
                </CalendarCell>
              </CalendarGridRow>
            </CalendarGridBody>
          </CalendarGrid>
        </div>
      </CalendarRoot>
    </Variant>
  </Story>
</template>
