<script lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { type SegmentPart, getDaysInMonth, useKbd } from '@/shared'
import { injectDateFieldRootContext } from './DateFieldRoot.vue'
import { isAcceptableSegmentKey, isNumberString, isSegmentNavigationKey, segmentBuilders } from './utils'
import { computed, ref } from 'vue'
import { useDateField } from './useDateField'

export interface DateFieldInputProps extends PrimitiveProps {
  part: SegmentPart
}
</script>

<script setup lang="ts">
const props = defineProps<DateFieldInputProps>()

const rootContext = injectDateFieldRootContext()

const hasLeftFocus = ref(true)
const lastKeyZero = ref(false)

const {
  updateDayOrMonth,
  updateYear,
  updateHour,
  updateMinuteOrSecond,
  dateTimeValueIncrementation,
  deleteValue,
} = useDateField({
  hasLeftFocus,
  lastKeyZero,
})

const attributes = computed(() => ({
  ...segmentBuilders[props.part].attrs({
    placeholder: rootContext.placeholder.value,
    hourCycle: rootContext.hourCycle,
    segmentValues: rootContext.segmentValues.value,
    formatter: rootContext.formatter,
  }),
}))

const kbd = useKbd()

function handleDaySegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  if (e.key === kbd.ARROW_DOWN || e.key === kbd.ARROW_UP) {
    rootContext.segmentValues.value.day = dateTimeValueIncrementation(e, 'day', rootContext.placeholder.value, rootContext.segmentValues.value.day)
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const $segmentMonthValue = rootContext.segmentValues.value.month
    const $placeholder = rootContext.placeholder.value

    const daysInMonth = $segmentMonthValue
      ? getDaysInMonth($placeholder.set({ month: $segmentMonthValue }))
      : getDaysInMonth($placeholder)

    const { value, moveToNext } = updateDayOrMonth(daysInMonth, num, rootContext.segmentValues.value.day)

    rootContext.segmentValues.value.day = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    rootContext.segmentValues.value.day = deleteValue(rootContext.segmentValues.value.day)
  }
}

function handleMonthSegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  if (e.key === kbd.ARROW_DOWN || e.key === kbd.ARROW_UP) {
    rootContext.segmentValues.value.month = dateTimeValueIncrementation(e, 'month', rootContext.placeholder.value, rootContext.segmentValues.value.month)
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateDayOrMonth(12, num, rootContext.segmentValues.value.month)

    rootContext.segmentValues.value.month = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    rootContext.segmentValues.value.month = deleteValue(rootContext.segmentValues.value.month)
  }
}

function handleYearSegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  if (e.key === kbd.ARROW_DOWN || e.key === kbd.ARROW_UP) {
    rootContext.segmentValues.value.year = dateTimeValueIncrementation(e, 'year', rootContext.placeholder.value, rootContext.segmentValues.value.year)
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateYear(num, rootContext.segmentValues.value.year)

    rootContext.segmentValues.value.year = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    rootContext.segmentValues.value.year = deleteValue(rootContext.segmentValues.value.year)
  }
}

function handleHourSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('hour' in dateRef) || !('hour' in rootContext.segmentValues.value))
    return

  const $hourCycle = rootContext.hourCycle

  if (e.key === kbd.ARROW_UP || e.key === kbd.ARROW_DOWN) {
    rootContext.segmentValues.value.hour = dateTimeValueIncrementation(e, 'hour', rootContext.placeholder.value, rootContext.segmentValues.value.hour, $hourCycle)

    if ('dayPeriod' in rootContext.segmentValues.value) {
      if (rootContext.segmentValues.value.hour < 12)
        rootContext.segmentValues.value.dayPeriod = 'AM'
      else if (rootContext.segmentValues.value.hour)
        rootContext.segmentValues.value.dayPeriod = 'PM'
    }

    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateHour(num, rootContext.segmentValues.value.hour)

    if ('dayPeriod' in rootContext.segmentValues.value && value && value > 12)
      rootContext.segmentValues.value.dayPeriod = 'PM'
    else if ('dayPeriod' in rootContext.segmentValues.value && value)
      rootContext.segmentValues.value.dayPeriod = 'AM'

    rootContext.segmentValues.value.hour = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    rootContext.segmentValues.value.hour = deleteValue(rootContext.segmentValues.value.hour)
  }
}

function handleMinuteSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value
  const min = 0
  const max = 59

  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('minute' in dateRef) || !('minute' in rootContext.segmentValues.value))
    return

  if (e.key === kbd.ARROW_UP) {
    if (rootContext.segmentValues.value.minute === null) {
      rootContext.segmentValues.value.minute = min
      return
    }
    rootContext.segmentValues.value.minute = dateRef.set({ minute: rootContext.segmentValues.value.minute }).cycle('minute', 1).minute
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (rootContext.segmentValues.value.minute === null) {
      rootContext.segmentValues.value.minute = max
      return
    }
    rootContext.segmentValues.value.minute = dateRef.set({ minute: rootContext.segmentValues.value.minute }).cycle('minute', -1).minute
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateMinuteOrSecond(num, rootContext.segmentValues.value.minute)

    rootContext.segmentValues.value.minute = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!rootContext.segmentValues.value.minute)
      return

    const str = rootContext.segmentValues.value.minute.toString()
    if (str.length === 1) {
      rootContext.segmentValues.value.minute = null
      return
    }
    rootContext.segmentValues.value.minute = Number.parseInt(str.slice(0, -1))
  }
}

function handleSecondSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value
  const min = 0
  const max = 59

  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('second' in dateRef) || !('second' in rootContext.segmentValues.value))
    return

  if (e.key === kbd.ARROW_UP) {
    if (rootContext.segmentValues.value.second === null) {
      rootContext.segmentValues.value.second = min
      return
    }
    rootContext.segmentValues.value.second = dateRef.set({ second: rootContext.segmentValues.value.second }).cycle('second', 1).second
    return
  }

  if (e.key === kbd.ARROW_DOWN) {
    if (rootContext.segmentValues.value.second === null) {
      rootContext.segmentValues.value.second = max
      return
    }
    rootContext.segmentValues.value.second = dateRef.set({ second: rootContext.segmentValues.value.second }).cycle('second', -1).second
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateMinuteOrSecond(num, rootContext.segmentValues.value.second)

    rootContext.segmentValues.value.second = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    if (!rootContext.segmentValues.value.second)
      return

    const str = rootContext.segmentValues.value.second.toString()
    if (str.length === 1) {
      rootContext.segmentValues.value.second = null
      return
    }
    rootContext.segmentValues.value.second = Number.parseInt(str.slice(0, -1))
  }
}

function handleDayPeriodSegmentKeydown(e: KeyboardEvent) {
  if (((!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key)) && e.key !== 'a' && e.key !== 'p') || !('hour' in rootContext.placeholder.value) || !('dayPeriod' in rootContext.segmentValues.value))
    return

  if (e.key === kbd.ARROW_UP || e.key === kbd.ARROW_DOWN) {
    if (rootContext.segmentValues.value.dayPeriod === 'AM') {
      rootContext.segmentValues.value.dayPeriod = 'PM'
      return
    }
    rootContext.segmentValues.value.dayPeriod = 'AM'
    return
  }

  if (e.key === 'a') {
    rootContext.segmentValues.value.dayPeriod = 'AM'
    return
  }

  if (e.key === 'p')
    rootContext.segmentValues.value.dayPeriod = 'PM'
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
    timeZoneName: () => {},
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
