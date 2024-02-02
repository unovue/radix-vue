<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import {
  type DateValue,
  getLocalTimeZone,
  isSameDay,
  isSameMonth,
  isToday,

} from '@internationalized/date'
import { computed, nextTick } from 'vue'
import { parseStringToDateValue, toDate, useKbd } from '@/shared'

export interface CalendarDayProps extends PrimitiveProps {
  day: DateValue
  month: DateValue
}
</script>

<script setup lang="ts">
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { injectCalendarRootContext } from './CalendarRoot.vue'

const props = withDefaults(defineProps<CalendarDayProps>(), { as: 'div' })
const kbd = useKbd()
const rootContext = injectCalendarRootContext()

const { primitiveElement, currentElement } = usePrimitiveElement()

const labelText = computed(() => {
  return rootContext.formatter.custom(toDate(props.day), {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
})

const isDisabled = computed(() => rootContext.isDateDisabled(props.day))
const isUnavailable = computed(() => rootContext.isDateUnavailable?.(props.day))
const isDateToday = computed(() => isToday(props.day, getLocalTimeZone()))
const isOutsideMonth = computed(() => !isSameMonth(props.day, props.month))
const isOutsideVisibleMonths = computed(() => rootContext.isOutsideVisibleMonths(props.day))
const isFocusedDate = computed(() => isSameDay(props.day, rootContext.placeholder.value))
const isSelectedDate = computed(() => rootContext.isDateSelected(props.day))

const SELECTOR = '[data-radix-vue-calendar-day]:not([data-disabled]):not([data-outside-month])'

function changeDate(date: DateValue) {
  if (rootContext.readonly.value)
    return
  if (rootContext.isDateDisabled(date) || rootContext.isDateUnavailable?.(date))
    return
  rootContext.onDateChange(date)
}

function handleClick(e: Event) {
  changeDate(parseStringToDateValue((e.target as HTMLDivElement).getAttribute('data-value')!, rootContext.placeholder.value))
}

function handleArrowKey(e: KeyboardEvent) {
  const currentCell = e.target as HTMLDivElement
  e.preventDefault()
  e.stopPropagation()
  const parentElement = rootContext.parentElement.value!
  const allCollectionItems: HTMLElement[] = parentElement
    ? Array.from(parentElement.querySelectorAll(SELECTOR))
    : []
  const index = allCollectionItems.indexOf(currentElement.value)
  let newIndex = index
  switch (e.code) {
    case kbd.ARROW_RIGHT:
      newIndex++
      break
    case kbd.ARROW_LEFT:
      newIndex--
      break
    case kbd.ARROW_UP:
      newIndex -= 7
      break
    case kbd.ARROW_DOWN:
      newIndex += 7
      break
    case kbd.ENTER:
    case kbd.SPACE_CODE:
      changeDate(parseStringToDateValue(currentCell!.getAttribute('data-value')!, rootContext.placeholder.value))
      return
    default:
      return
  }

  if (newIndex >= 0 && newIndex < allCollectionItems.length) {
    allCollectionItems[newIndex].focus()
    return
  }

  if (newIndex < 0) {
    if (rootContext.isPrevButtonDisabled.value)
      return
    rootContext.prevPage()
    nextTick(() => {
      const newCollectionItems: HTMLElement[] = parentElement
        ? Array.from(parentElement.querySelectorAll(SELECTOR))
        : []
      newCollectionItems[newCollectionItems.length - Math.abs(newIndex)].focus()
    })
    return
  }

  if (newIndex >= allCollectionItems.length) {
    if (rootContext.isNextButtonDisabled.value)
      return
    rootContext.nextPage()
    nextTick(() => {
      const newCollectionItems: HTMLElement[] = parentElement
        ? Array.from(parentElement.querySelectorAll(SELECTOR))
        : []
      newCollectionItems[newIndex - allCollectionItems.length].focus()
    })
  }
}
</script>

<template>
  <Primitive
    ref="primitiveElement"
    v-bind="props"
    role="button"
    :aria-label="labelText"
    data-radix-vue-calendar-day
    :aria-disabled="isOutsideMonth || isDisabled || isUnavailable ? true : undefined"
    :data-selected="isSelectedDate ? true : undefined"
    :data-value="day.toString()"
    :data-disabled="isDisabled || isOutsideMonth ? '' : undefined"
    :data-unavailable="isUnavailable ? '' : undefined"
    :data-today="isDateToday ? '' : undefined"
    :data-outside-month="isOutsideMonth ? '' : undefined"
    :data-outside-visible-months="isOutsideVisibleMonths ? '' : undefined"
    :data-focused="isFocusedDate ? '' : undefined"
    :tabindex="isFocusedDate ? 0 : isOutsideMonth || isDisabled ? undefined : -1"
    @click="handleClick"
    @keydown.up.down.left.right.space.enter="handleArrowKey"
    @keydown.enter.prevent
  >
    <slot />
  </Primitive>
</template>
