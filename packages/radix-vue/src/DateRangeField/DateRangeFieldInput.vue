<script lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { type SegmentPart, getDaysInMonth, useKbd } from '@/shared'
import { injectDateRangeFieldRootContext } from './DateRangeFieldRoot.vue'
import { isAcceptableSegmentKey, isNumberString, isSegmentNavigationKey, segmentBuilders, useDateField } from '@/DateField'
import { computed, ref, watch } from 'vue'

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

const dateRangeSegment = ref(rootContext.segmentValues.value[props.type])

watch(dateRangeSegment, (value) => {
  if (Object.values(value).join('') !== Object.values(rootContext.segmentValues.value[props.type]).join(''))
    rootContext.segmentValues.value[props.type] = { ...value }
}, { deep: true })

const attributes = computed(() => ({
  ...segmentBuilders[props.part].attrs({
    placeholder: rootContext.placeholder.value,
    hourCycle: rootContext.hourCycle,
    segmentValues: dateRangeSegment.value,
    formatter: rootContext.formatter,
  }),
}))

const kbd = useKbd()

function handleDaySegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  if (e.key === kbd.ARROW_UP) {
    if (!dateRangeSegment.value.day) {
      dateRangeSegment.value.day = rootContext.placeholder.value.day
      return
    }

    dateRangeSegment.value.day = rootContext.placeholder.value.set({ day: dateRangeSegment.value.day }).cycle('day', 1).day
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (!dateRangeSegment.value.day) {
      dateRangeSegment.value.day = rootContext.placeholder.value.day
      return
    }
    dateRangeSegment.value.day = rootContext.placeholder.value.set({ day: dateRangeSegment.value.day! }).cycle('day', -1).day
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const $segmentMonthValue = dateRangeSegment.value.month
    const $placeholder = rootContext.placeholder.value

    const daysInMonth = $segmentMonthValue
      ? getDaysInMonth($placeholder.set({ month: $segmentMonthValue }))
      : getDaysInMonth($placeholder)

    const { value, moveToNext } = updateDayOrMonth(daysInMonth, num, dateRangeSegment.value.day)

    dateRangeSegment.value.day = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.value.day)
      return

    const str = dateRangeSegment.value.day!.toString()
    if (str.length === 1) {
      dateRangeSegment.value.day = null
      return
    }
    dateRangeSegment.value.day = Number.parseInt(str.slice(0, -1))
  }
}

function handleMonthSegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  if (e.key === kbd.ARROW_UP) {
    if (!dateRangeSegment.value.month) {
      dateRangeSegment.value.month = rootContext.placeholder.value.month
      return
    }
    dateRangeSegment.value.month = rootContext.placeholder.value.set({ month: dateRangeSegment.value.month! }).cycle('month', 1).month
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (!dateRangeSegment.value.month) {
      dateRangeSegment.value.month = rootContext.placeholder.value.month
      return
    }
    dateRangeSegment.value.month = rootContext.placeholder.value.set({ month: dateRangeSegment.value.month! }).cycle('month', -1).month
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateDayOrMonth(12, num, dateRangeSegment.value.month)

    dateRangeSegment.value.month = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.value.month)
      return

    const str = dateRangeSegment.value.month!.toString()
    if (str.length === 1) {
      dateRangeSegment.value.month = null
      return
    }
    dateRangeSegment.value.month = Number.parseInt(str.slice(0, -1))
  }
}

function handleYearSegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  if (e.key === kbd.ARROW_UP) {
    if (!dateRangeSegment.value.year) {
      dateRangeSegment.value.year = rootContext.placeholder.value.year
      return
    }
    dateRangeSegment.value.year = rootContext.placeholder.value.set({ year: dateRangeSegment.value.year! }).cycle('year', 1).year
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (!dateRangeSegment.value.year) {
      dateRangeSegment.value.year = rootContext.placeholder.value.year
      return
    }
    dateRangeSegment.value.year = rootContext.placeholder.value.set({ year: dateRangeSegment.value.year! }).cycle('year', -1).year
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateYear(num, dateRangeSegment.value.year)

    dateRangeSegment.value.year = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.value.year)
      return

    const str = dateRangeSegment.value.year!.toString()
    if (str.length === 1) {
      dateRangeSegment.value.year = null
      return
    }
    dateRangeSegment.value.year = Number.parseInt(str.slice(0, -1))
  }
}

function handleHourSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('hour' in dateRef) || !('hour' in dateRangeSegment.value))
    return

  const $hourCycle = rootContext.hourCycle

  if (e.key === kbd.ARROW_UP) {
    if (!dateRangeSegment.value.hour) {
      dateRangeSegment.value.hour = dateRef.cycle('hour', 1, { hourCycle: $hourCycle }).hour

      if ('dayPeriod' in dateRangeSegment.value) {
        if (dateRangeSegment.value.hour < 12)
          dateRangeSegment.value.dayPeriod = 'AM'
        else if (dateRangeSegment.value.hour)
          dateRangeSegment.value.dayPeriod = 'PM'
      }

      return
    }

    dateRangeSegment.value.hour = dateRef.set({ hour: dateRangeSegment.value.hour }).cycle('hour', 1, { hourCycle: $hourCycle }).hour

    if ('dayPeriod' in dateRangeSegment.value) {
      if (dateRangeSegment.value.hour < 12)
        dateRangeSegment.value.dayPeriod = 'AM'
      else if (dateRangeSegment.value.hour)
        dateRangeSegment.value.dayPeriod = 'PM'
    }
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (!dateRangeSegment.value.hour) {
      dateRangeSegment.value.hour = dateRef.cycle('hour', -1, { hourCycle: $hourCycle }).hour

      if ('dayPeriod' in dateRangeSegment.value) {
        if (dateRangeSegment.value.hour < 12)
          dateRangeSegment.value.dayPeriod = 'AM'
        else if (dateRangeSegment.value.hour)
          dateRangeSegment.value.dayPeriod = 'PM'
      }

      return
    }

    dateRangeSegment.value.hour = dateRef.set({ hour: dateRangeSegment.value.hour }).cycle('hour', -1, { hourCycle: $hourCycle }).hour

    if ('dayPeriod' in dateRangeSegment.value) {
      if (dateRangeSegment.value.hour < 12)
        dateRangeSegment.value.dayPeriod = 'AM'
      else if (dateRangeSegment.value.hour)
        dateRangeSegment.value.dayPeriod = 'PM'
    }

    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateHour(num, dateRangeSegment.value.hour)

    if ('dayPeriod' in dateRangeSegment.value && value && value > 12)
      dateRangeSegment.value.dayPeriod = 'PM'
    else if ('dayPeriod' in dateRangeSegment.value && value)
      dateRangeSegment.value.dayPeriod = 'AM'

    dateRangeSegment.value.hour = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.value.hour)
      return

    const str = dateRangeSegment.value.hour.toString()
    if (str.length === 1) {
      dateRangeSegment.value.hour = null
      return
    }
    dateRangeSegment.value.hour = Number.parseInt(str.slice(0, -1))
  }
}

function handleMinuteSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value
  const min = 0
  const max = 59
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('minute' in dateRef) || !('minute' in dateRangeSegment.value))
    return

  if (e.key === kbd.ARROW_UP) {
    if (dateRangeSegment.value.minute === null) {
      dateRangeSegment.value.minute = min
      return
    }
    dateRangeSegment.value.minute = dateRef.set({ minute: dateRangeSegment.value.minute }).cycle('minute', 1).minute
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (dateRangeSegment.value.minute === null) {
      dateRangeSegment.value.minute = max
      return
    }
    dateRangeSegment.value.minute = dateRef.set({ minute: dateRangeSegment.value.minute }).cycle('minute', -1).minute
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateMinuteOrSecond(num, dateRangeSegment.value.minute)

    dateRangeSegment.value.minute = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.value.minute)
      return

    const str = dateRangeSegment.value.minute.toString()
    if (str.length === 1) {
      dateRangeSegment.value.minute = null
      return
    }
    dateRangeSegment.value.minute = Number.parseInt(str.slice(0, -1))
  }
}

function handleSecondSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value
  const min = 0
  const max = 59
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('second' in dateRef) || !('second' in dateRangeSegment.value))
    return

  if (e.key === kbd.ARROW_UP) {
    if (dateRangeSegment.value.second === null) {
      dateRangeSegment.value.second = min
      return
    }
    dateRangeSegment.value.second = dateRef.set({ second: dateRangeSegment.value.second }).cycle('second', 1).second
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (dateRangeSegment.value.second === null) {
      dateRangeSegment.value.second = max
      return
    }
    dateRangeSegment.value.second = dateRef.set({ second: dateRangeSegment.value.second }).cycle('second', -1).second
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateMinuteOrSecond(num, dateRangeSegment.value.second)

    dateRangeSegment.value.second = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!dateRangeSegment.value.second)
      return

    const str = dateRangeSegment.value.second.toString()
    if (str.length === 1) {
      dateRangeSegment.value.second = null
      return
    }
    dateRangeSegment.value.second = Number.parseInt(str.slice(0, -1))
  }
}

function handleDayPeriodSegmentKeydown(e: KeyboardEvent) {
  if (((!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key)) && e.key !== 'a' && e.key !== 'p') || !('hour' in rootContext.placeholder.value) || !('dayPeriod' in dateRangeSegment.value))
    return

  if (e.key === kbd.ARROW_UP || e.key === kbd.ARROW_DOWN) {
    if (dateRangeSegment.value.dayPeriod === 'AM') {
      dateRangeSegment.value.dayPeriod = 'PM'
      return
    }
    dateRangeSegment.value.dayPeriod = 'AM'
    return
  }

  if (e.key === 'a') {
    dateRangeSegment.value.dayPeriod = 'AM'
    return
  }

  if (e.key === 'p')
    dateRangeSegment.value.dayPeriod = 'PM'
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
