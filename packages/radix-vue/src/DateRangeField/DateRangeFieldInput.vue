<script lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { type SegmentPart, getDaysInMonth, useKbd } from '@/shared'
import { injectDateRangeFieldRootContext } from './DateRangeFieldRoot.vue'
import { isAcceptableSegmentKey, isNumberString, isSegmentNavigationKey, segmentBuilders, useDateField } from '@/DateField'
import { computed, ref } from 'vue'

export interface DateRangeFieldInputProps extends PrimitiveProps {
  part: SegmentPart
  type: 'start' | 'end'
}
</script>

<script setup lang="ts">
const props = defineProps<DateRangeFieldInputProps>()

const rootContext = injectDateRangeFieldRootContext()

const hasLeftFocus = ref(true)
const lastKeyZero = ref(false)

const { updateDayOrMonth, updateYear, updateHour, updateMinuteOrSecond } = useDateField({
  hasLeftFocus,
  lastKeyZero,
})

const dateRangeSegment = rootContext.segmentValues.value[props.type]

const attributes = computed(() => ({
  ...segmentBuilders[props.part].attrs({
    placeholder: rootContext.placeholder.value,
    hourCycle: rootContext.hourCycle,
    segmentValues: dateRangeSegment,
    formatter: rootContext.formatter,
  }),
}))

const kbd = useKbd()

function handleDaySegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  if (e.key === kbd.ARROW_UP) {
    if (!dateRangeSegment.day) {
      dateRangeSegment.day = rootContext.placeholder.value.day
      return
    }
    dateRangeSegment.day = rootContext.placeholder.value.set({ day: dateRangeSegment.day! }).cycle('day', 1).day
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (!dateRangeSegment.day) {
      dateRangeSegment.day = rootContext.placeholder.value.day
      return
    }
    dateRangeSegment.day = rootContext.placeholder.value.set({ day: dateRangeSegment.day! }).cycle('day', -1).day
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const $segmentMonthValue = dateRangeSegment.month
    const $placeholder = rootContext.placeholder.value

    const daysInMonth = $segmentMonthValue
      ? getDaysInMonth($placeholder.set({ month: $segmentMonthValue }))
      : getDaysInMonth($placeholder)

    const { value, moveToNext } = updateDayOrMonth(daysInMonth, num, dateRangeSegment.day)

    dateRangeSegment.day = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.day)
      return

    const str = dateRangeSegment.day!.toString()
    if (str.length === 1) {
      dateRangeSegment.day = null
      return
    }
    dateRangeSegment.day = Number.parseInt(str.slice(0, -1))
  }
}

function handleMonthSegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  if (e.key === kbd.ARROW_UP) {
    if (!dateRangeSegment.month) {
      dateRangeSegment.month = rootContext.placeholder.value.month
      return
    }
    dateRangeSegment.month = rootContext.placeholder.value.set({ month: dateRangeSegment.month! }).cycle('month', 1).month
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (!dateRangeSegment.month) {
      dateRangeSegment.month = rootContext.placeholder.value.month
      return
    }
    dateRangeSegment.month = rootContext.placeholder.value.set({ month: dateRangeSegment.month! }).cycle('month', -1).month
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateDayOrMonth(12, num, dateRangeSegment.month)

    dateRangeSegment.month = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.month)
      return

    const str = dateRangeSegment.month!.toString()
    if (str.length === 1) {
      dateRangeSegment.month = null
      return
    }
    dateRangeSegment.month = Number.parseInt(str.slice(0, -1))
  }
}

function handleYearSegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  if (e.key === kbd.ARROW_UP) {
    if (!dateRangeSegment.year) {
      dateRangeSegment.year = rootContext.placeholder.value.year
      return
    }
    dateRangeSegment.year = rootContext.placeholder.value.set({ year: dateRangeSegment.year! }).cycle('year', 1).year
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (!dateRangeSegment.year) {
      dateRangeSegment.year = rootContext.placeholder.value.year
      return
    }
    dateRangeSegment.year = rootContext.placeholder.value.set({ year: dateRangeSegment.year! }).cycle('year', -1).year
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateYear(num, dateRangeSegment.year)

    dateRangeSegment.year = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.year)
      return

    const str = dateRangeSegment.year!.toString()
    if (str.length === 1) {
      dateRangeSegment.year = null
      return
    }
    dateRangeSegment.year = Number.parseInt(str.slice(0, -1))
  }
}

function handleHourSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('hour' in dateRef) || !('hour' in dateRangeSegment))
    return

  const $hourCycle = rootContext.hourCycle

  if (e.key === kbd.ARROW_UP) {
    if (!dateRangeSegment.hour) {
      dateRangeSegment.hour = dateRef.cycle('hour', 1, { hourCycle: $hourCycle }).hour

      if ('dayPeriod' in dateRangeSegment) {
        if (dateRangeSegment.hour < 12)
          dateRangeSegment.dayPeriod = 'AM'
        else if (dateRangeSegment.hour)
          dateRangeSegment.dayPeriod = 'PM'
      }

      return
    }

    dateRangeSegment.hour = dateRef.set({ hour: dateRangeSegment.hour }).cycle('hour', 1, { hourCycle: $hourCycle }).hour

    if ('dayPeriod' in dateRangeSegment) {
      if (dateRangeSegment.hour < 12)
        dateRangeSegment.dayPeriod = 'AM'
      else if (dateRangeSegment.hour)
        dateRangeSegment.dayPeriod = 'PM'
    }
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (!dateRangeSegment.hour) {
      dateRangeSegment.hour = dateRef.cycle('hour', -1, { hourCycle: $hourCycle }).hour

      if ('dayPeriod' in dateRangeSegment) {
        if (dateRangeSegment.hour < 12)
          dateRangeSegment.dayPeriod = 'AM'
        else if (dateRangeSegment.hour)
          dateRangeSegment.dayPeriod = 'PM'
      }

      return
    }

    dateRangeSegment.hour = dateRef.set({ hour: dateRangeSegment.hour }).cycle('hour', -1, { hourCycle: $hourCycle }).hour

    if ('dayPeriod' in dateRangeSegment) {
      if (dateRangeSegment.hour < 12)
        dateRangeSegment.dayPeriod = 'AM'
      else if (dateRangeSegment.hour)
        dateRangeSegment.dayPeriod = 'PM'
    }

    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateHour(num, dateRangeSegment.hour)

    if ('dayPeriod' in dateRangeSegment && value && value > 12)
      dateRangeSegment.dayPeriod = 'PM'
    else if ('dayPeriod' in dateRangeSegment && value)
      dateRangeSegment.dayPeriod = 'AM'

    dateRangeSegment.hour = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.hour)
      return

    const str = dateRangeSegment.hour.toString()
    if (str.length === 1) {
      dateRangeSegment.hour = null
      return
    }
    dateRangeSegment.hour = Number.parseInt(str.slice(0, -1))
  }
}

function handleMinuteSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value
  const min = 0
  const max = 59
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('minute' in dateRef) || !('minute' in dateRangeSegment))
    return

  if (e.key === kbd.ARROW_UP) {
    if (dateRangeSegment.minute === null) {
      dateRangeSegment.minute = min
      return
    }
    dateRangeSegment.minute = dateRef.set({ minute: dateRangeSegment.minute }).cycle('minute', 1).minute
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (dateRangeSegment.minute === null) {
      dateRangeSegment.minute = max
      return
    }
    dateRangeSegment.minute = dateRef.set({ minute: dateRangeSegment.minute }).cycle('minute', -1).minute
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateMinuteOrSecond(num, dateRangeSegment.minute)

    dateRangeSegment.minute = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.minute)
      return

    const str = dateRangeSegment.minute.toString()
    if (str.length === 1) {
      dateRangeSegment.minute = null
      return
    }
    dateRangeSegment.minute = Number.parseInt(str.slice(0, -1))
  }
}

function handleSecondSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value
  const min = 0
  const max = 59
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('second' in dateRef) || !('second' in dateRangeSegment))
    return

  if (e.key === kbd.ARROW_UP) {
    if (dateRangeSegment.second === null) {
      dateRangeSegment.second = min
      return
    }
    dateRangeSegment.second = dateRef.set({ second: dateRangeSegment.second }).cycle('second', 1).second
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (dateRangeSegment.second === null) {
      dateRangeSegment.second = max
      return
    }
    dateRangeSegment.second = dateRef.set({ second: dateRangeSegment.second }).cycle('second', -1).second
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateMinuteOrSecond(num, dateRangeSegment.second)

    dateRangeSegment.second = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.second)
      return

    const str = dateRangeSegment.second.toString()
    if (str.length === 1) {
      dateRangeSegment.second = null
      return
    }
    dateRangeSegment.second = Number.parseInt(str.slice(0, -1))
  }
}

function handleDayPeriodSegmentKeydown(e: KeyboardEvent) {
  if (((!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key)) && e.key !== 'a' && e.key !== 'p') || !('hour' in rootContext.placeholder.value) || !('dayPeriod' in dateRangeSegment))
    return

  if (e.key === kbd.ARROW_UP || e.key === kbd.ARROW_DOWN) {
    if (dateRangeSegment.dayPeriod === 'AM') {
      dateRangeSegment.dayPeriod = 'PM'
      return
    }
    dateRangeSegment.dayPeriod = 'AM'
    return
  }

  if (e.key === 'a') {
    dateRangeSegment.dayPeriod = 'AM'
    return
  }

  if (e.key === 'p')
    dateRangeSegment.dayPeriod = 'PM'
}

function handleTimeZoneSegmentKeydown() {

}

function handleSegmentClick(e: MouseEvent) {
  const $disabled = rootContext.disabled.value
  if ($disabled)
    e.preventDefault()
}

function handleSegmentKeydown(e: KeyboardEvent) {
  const $disabled = rootContext.disabled.value
  const $readonly = rootContext.readonly.value
  if (e.key !== kbd.TAB)
    e.preventDefault()

  if ($disabled || $readonly)
    return
  const segmentKeydownHandlers = {
    day: handleDaySegmentKeydown,
    month: handleMonthSegmentKeydown,
    year: handleYearSegmentKeydown,
    hour: handleHourSegmentKeydown,
    minute: handleMinuteSegmentKeydown,
    second: handleSecondSegmentKeydown,
    dayPeriod: handleDayPeriodSegmentKeydown,
    timeZoneName: handleTimeZoneSegmentKeydown,
  } as const

  segmentKeydownHandlers[props.part as keyof typeof segmentKeydownHandlers](e)
}

const disabled = computed(() => rootContext.disabled.value)
const readonly = computed(() => rootContext.readonly.value)
const isInvalid = computed(() => {
  return rootContext.isInvalid.value
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    v-bind="attributes"
    :contenteditable="disabled || readonly ? false : part !== 'literal'"
    :data-radix-vue-date-field-segment="part"
    :aria-disabled="disabled ? true : undefined"
    :aria-readonly="readonly ? true : undefined"
    :data-disabled="disabled ? '' : undefined"
    :data-radix-vue-date-range-field-segment-type="type"
    :data-invalid="isInvalid ? '' : undefined"
    :aria-invalid="isInvalid ? true : undefined"
    v-on="part !== 'literal' ? {
      mousedown: handleSegmentClick,
      keydown: handleSegmentKeydown,
      focusout: () => { hasLeftFocus = true },
      focusin: (e: FocusEvent) => {
        rootContext.setFocusedElement(e.target as HTMLElement)
      },
    } : {}"
  >
    <slot />
  </Primitive>
</template>
