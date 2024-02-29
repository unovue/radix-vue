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
import { isBetweenInclusive, parseStringToDateValue, toDate } from '@/shared/date'

export interface RangeCalendarCellTriggerProps extends PrimitiveProps {
  day: DateValue
  month: DateValue
}
</script>

<script setup lang="ts">
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { injectRangeCalendarRootContext } from './RangeCalendarRoot.vue'

const props = withDefaults(defineProps<RangeCalendarCellTriggerProps>(), { as: 'div' })
const rootContext = injectRangeCalendarRootContext()
const placeholder = rootContext.defaultDate.set({ ...rootContext.placeholder.value })
const day = computed(() => placeholder.set({ ...props.day }))
const month = computed(() => placeholder.set({ ...props.month }))

const kbd = useKbd()

const { primitiveElement, currentElement } = usePrimitiveElement()

const labelText = computed(() => rootContext.formatter.custom(toDate(day.value), {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
}))

const isDisabled = computed(() => rootContext.isDateDisabled(day.value))
const isUnavailable = computed(() => rootContext.isDateUnavailable?.(day.value))
const isSelectedDate = computed(() => rootContext.isSelected(day.value))
const isSelectionStart = computed(() => rootContext.isSelectionStart(day.value))
const isSelectionEnd = computed(() => rootContext.isSelectionEnd(day.value))
const isHighlighted = computed(() => rootContext.highlightedRange.value
  ? isBetweenInclusive(day.value, rootContext.highlightedRange.value.start, rootContext.highlightedRange.value.end)
  : false)

const SELECTOR
  = '[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])'

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

function changeDate(date: DateValue) {
  if (rootContext.readonly.value)
    return
  if (rootContext.isDateDisabled(date) || rootContext.isDateUnavailable?.(date))
    return

  rootContext.lastPressedDateValue.value = rootContext.defaultDate.set({ ...date })

  if (rootContext.startValue.value && rootContext.highlightedRange.value === null) {
    if (isSameDay(date, rootContext.startValue.value) && !rootContext.preventDeselect.value && !rootContext.endValue.value) {
      rootContext.startValue.value = undefined
      return
    }
    else if (!rootContext.endValue.value) {
      if (rootContext.lastPressedDateValue.value && isSameDay(rootContext.lastPressedDateValue.value, date))
        rootContext.startValue.value = rootContext.defaultDate.set({ ...date })
      return
    }
  }
  if (rootContext.startValue.value && isSameDay(rootContext.startValue.value, date) && !rootContext.preventDeselect.value && !rootContext.endValue.value)
    rootContext.startValue.value = undefined

  if (!rootContext.startValue.value)
    rootContext.startValue.value = placeholder.set({ ...date })

  else if (!rootContext.endValue.value)
    rootContext.endValue.value = placeholder.set({ ...date })
}

function handleClick(e: Event) {
  changeDate(parseStringToDateValue((e.target as HTMLDivElement).getAttribute('data-value')!, placeholder))
}

function handleFocus(date: DateValue) {
  rootContext.focusedValue.value = placeholder.set({ ...date })
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
      changeDate(parseStringToDateValue(currentCell!.getAttribute('data-value')!, placeholder))
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
    :aria-selected="isSelectedDate ? true : undefined"
    :aria-disabled="isOutsideView || isDisabled || isUnavailable ? true : undefined"
    :data-highlighted="isHighlighted ? '' : undefined"
    :data-selection-start="isSelectionStart ? true : undefined"
    :data-selection-end="isSelectionEnd ? true : undefined"
    :data-selected="isSelectedDate ? true : undefined"
    :data-outside-visible-view="isOutsideVisibleView ? '' : undefined"
    :data-value="day.toString()"
    :data-disabled="isDisabled || isOutsideView ? '' : undefined"
    :data-unavailable="isUnavailable ? '' : undefined"
    :data-today="isDateToday ? '' : undefined"
    :data-outside-month="isOutsideView ? '' : undefined"
    :data-focused="isFocusedDate ? '' : undefined"
    :tabindex="isFocusedDate ? 0 : isOutsideView || isDisabled ? undefined : -1"
    @click="handleClick"
    @focus="handleFocus(day)"
    @mouseenter="handleFocus(day)"
    @keydown.up.down.left.right.enter.space="handleArrowKey"
  >
    <slot>
      {{ formattedTriggerText }}
    </slot>
  </Primitive>
</template>
