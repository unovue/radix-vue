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
import { useKbd } from '@/shared'
import {
  parseStringToDateValue, toDate,
} from '@/shared/date'

export interface CalendarCellTriggerProps extends PrimitiveProps {
  /** The date value provided to the cell trigger */
  day: DateValue
  /** The month in which the cell is rendered */
  month: DateValue
}
</script>

<script setup lang="ts">
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { injectCalendarRootContext } from './CalendarRoot.vue'

const props = withDefaults(defineProps<CalendarCellTriggerProps>(), {
  as: 'div',
})
const kbd = useKbd()
const rootContext = injectCalendarRootContext()
const placeholder = rootContext.defaultDate.set({ ...rootContext.placeholder.value })
const day = computed(() => placeholder.set({ ...props.day }))
const month = computed(() => placeholder.set({ ...props.month }))

const { primitiveElement, currentElement } = usePrimitiveElement()

const labelText = computed(() => {
  return rootContext.formatter.custom(toDate(day.value), {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
})

const isDisabled = computed(() => rootContext.isDateDisabled(day.value))
const isUnavailable = computed(() =>
  rootContext.isDateUnavailable?.(day.value),
)
const isDateToday = computed(() => {
  return isToday(day.value, getLocalTimeZone())
})
const isOutsideView = computed(() => {
  return !isSameMonth(day.value, month.value)
})
const isOutsideVisibleView = computed(() =>
  rootContext.isOutsideVisibleView(day.value),
)

const isFocusedDate = computed(() => {
  return isSameDay(day.value, rootContext.placeholder.value)
})
const isSelectedDate = computed(() => rootContext.isDateSelected(day.value))

const SELECTOR
  = '[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])'

function changeDate(date: DateValue) {
  if (rootContext.readonly.value)
    return
  if (rootContext.isDateDisabled(date) || rootContext.isDateUnavailable?.(date))
    return

  rootContext.onDateChange(date)
}

function handleClick(e: Event) {
  changeDate(
    parseStringToDateValue(
      (e.target as HTMLDivElement).getAttribute('data-value')!,
      placeholder,
    ),
  )
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
  const indexIncrementation = 7
  switch (e.code) {
    case kbd.ARROW_RIGHT:
      newIndex++
      break
    case kbd.ARROW_LEFT:
      newIndex--
      break
    case kbd.ARROW_UP:
      newIndex -= indexIncrementation
      break
    case kbd.ARROW_DOWN:
      newIndex += indexIncrementation
      break
    case kbd.ENTER:
    case kbd.SPACE_CODE:
      changeDate(
        parseStringToDateValue(
          currentCell!.getAttribute('data-value')!,
          placeholder,
        ),
      )
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
      newCollectionItems[
        newCollectionItems.length - Math.abs(newIndex)
      ].focus()
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
const formattedTriggerText = computed(() => {
  return rootContext.formatter.custom(day.value.toDate(getLocalTimeZone()), {
    day: 'numeric',
  })
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    v-bind="props"
    role="button"
    :aria-label="labelText"
    data-radix-vue-calendar-cell-trigger
    :aria-disabled="isOutsideView || isDisabled || isUnavailable ? true : undefined"
    :data-selected="isSelectedDate ? true : undefined"
    :data-value="day.toString()"
    :data-disabled="isDisabled || isOutsideView ? '' : undefined"
    :data-unavailable="isUnavailable ? '' : undefined"
    :data-today="isDateToday ? '' : undefined"
    :data-outside-view="isOutsideView ? '' : undefined"
    :data-outside-visible-view="isOutsideVisibleView ? '' : undefined"
    :data-focused="isFocusedDate ? '' : undefined"
    :tabindex="isFocusedDate ? 0 : isOutsideView || isDisabled ? undefined : -1"
    @click="handleClick"
    @keydown.up.down.left.right.space.enter="handleArrowKey"
    @keydown.enter.prevent
  >
    <slot>
      {{ formattedTriggerText }}
    </slot>
  </Primitive>
</template>
