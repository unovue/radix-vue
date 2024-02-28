<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import {
  type DateValue,
  getLocalTimeZone,
  isSameDay,
  isSameMonth,
  isSameYear,
  isToday,
  today,
} from '@internationalized/date'
import { computed, nextTick } from 'vue'
import { useKbd } from '@/shared'
import {
  endOfDecade,
  isBetweenInclusive,
  parseStringToDateValue,
  startOfDecade, toDate,
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
const isUnavailable = computed(() =>
  rootContext.isDateUnavailable?.(props.day),
)
const isDateToday = computed(() => {
  if (rootContext.calendarView.value === 'decade')
    return isSameYear(props.day, today(getLocalTimeZone()))
  if (rootContext.calendarView.value === 'year')
    return isSameMonth(props.day, today(getLocalTimeZone()))
  return isToday(props.day, getLocalTimeZone())
})
const isOutsideView = computed(() => {
  if (rootContext.calendarView.value === 'decade') {
    return !isBetweenInclusive(
      props.day,
      startOfDecade(props.month),
      endOfDecade(props.month),
    )
  }

  if (rootContext.calendarView.value === 'year')
    return !isSameYear(props.day, props.month)
  return !isSameMonth(props.day, props.month)
})
const isOutsideVisibleView = computed(() =>
  rootContext.isOutsideVisibleView(props.day),
)

const isFocusedDate = computed(() => {
  if (rootContext.calendarView.value === 'decade')
    return isSameYear(props.day, rootContext.placeholder.value)
  if (rootContext.calendarView.value === 'year')
    return isSameMonth(props.day, rootContext.placeholder.value)
  return isSameDay(props.day, rootContext.placeholder.value)
})
const isSelectedDate = computed(() => rootContext.calendarView.value === 'month' && rootContext.isDateSelected(props.day))

const SELECTOR
  = '[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])'

function changeDate(date: DateValue) {
  if (rootContext.readonly.value)
    return
  if (rootContext.isDateDisabled(date) || rootContext.isDateUnavailable?.(date))
    return
  if (rootContext.calendarView.value !== 'month') {
    rootContext.onPlaceholderChange(date)
    rootContext.calendarView.value
      = rootContext.calendarView.value === 'decade' ? 'year' : 'month'
    return
  }
  rootContext.onDateChange(date)
}

function handleClick(e: Event) {
  changeDate(
    parseStringToDateValue(
      (e.target as HTMLDivElement).getAttribute('data-value')!,
      rootContext.placeholder.value,
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
  const indexIncrementation
    = rootContext.calendarView.value === 'month' ? 7 : rootContext.columns.value
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
          rootContext.placeholder.value,
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
  if (rootContext.calendarView.value === 'month')
    return props.day.day

  if (rootContext.calendarView.value === 'year') {
    if (rootContext.numberOfMonths.value > 1) {
      const firstMonth = rootContext.formatter.custom(props.day.toDate(getLocalTimeZone()), {
        month: 'short',
      })
      const result = [firstMonth]

      for (let i = 0; i < rootContext.numberOfMonths.value - 1; i++) {
        result.push(rootContext.formatter.custom(props.day.add({ months: i + 1 }).toDate(getLocalTimeZone()), {
          month: 'short',
        }))
      }
      return result.join('-')
    }
    return rootContext.formatter.custom(props.day.toDate(getLocalTimeZone()), {
      month: 'short',
    })
  }

  return props.day.year
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
