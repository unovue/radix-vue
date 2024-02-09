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

const kbd = useKbd()

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
  minuteSecondIncrementation,
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

function handleDaySegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  const prevValue = rootContext.segmentValues.value.day

  if (e.key === kbd.ARROW_DOWN || e.key === kbd.ARROW_UP) {
    rootContext.segmentValues.value.day = dateTimeValueIncrementation({ e, part: 'day', dateRef: rootContext.placeholder.value, prevValue })
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const segmentMonthValue = rootContext.segmentValues.value.month
    const placeholder = rootContext.placeholder.value

    const daysInMonth = segmentMonthValue
      ? getDaysInMonth(placeholder.set({ month: segmentMonthValue }))
      : getDaysInMonth(placeholder)

    const { value, moveToNext } = updateDayOrMonth(daysInMonth, num, prevValue)

    rootContext.segmentValues.value.day = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    rootContext.segmentValues.value.day = deleteValue(prevValue)
  }
}

function handleMonthSegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  const prevValue = rootContext.segmentValues.value.month

  if (e.key === kbd.ARROW_DOWN || e.key === kbd.ARROW_UP) {
    rootContext.segmentValues.value.month = dateTimeValueIncrementation({ e, part: 'month', dateRef: rootContext.placeholder.value, prevValue })
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateDayOrMonth(12, num, prevValue)

    rootContext.segmentValues.value.month = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    rootContext.segmentValues.value.month = deleteValue(prevValue)
  }
}

function handleYearSegmentKeydown(e: KeyboardEvent) {
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key))
    return

  const prevValue = rootContext.segmentValues.value.year

  if (e.key === kbd.ARROW_DOWN || e.key === kbd.ARROW_UP) {
    rootContext.segmentValues.value.year = dateTimeValueIncrementation({ e, part: 'year', dateRef: rootContext.placeholder.value, prevValue })
    return
  }

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateYear(num, prevValue)

    rootContext.segmentValues.value.year = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    rootContext.segmentValues.value.year = deleteValue(prevValue)
  }
}

function handleHourSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value
  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('hour' in dateRef) || !('hour' in rootContext.segmentValues.value))
    return

  const prevValue = rootContext.segmentValues.value.hour

  const hourCycle = rootContext.hourCycle

  if (e.key === kbd.ARROW_UP || e.key === kbd.ARROW_DOWN) {
    rootContext.segmentValues.value.hour = dateTimeValueIncrementation({ e, part: 'hour', dateRef: rootContext.placeholder.value, prevValue, hourCycle })

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
    const { value, moveToNext } = updateHour(num, prevValue)

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
    rootContext.segmentValues.value.hour = deleteValue(prevValue)
  }
}

function handleMinuteSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value

  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('minute' in dateRef) || !('minute' in rootContext.segmentValues.value))
    return

  const prevValue = rootContext.segmentValues.value.minute

  rootContext.segmentValues.value.minute = minuteSecondIncrementation({ e, part: 'minute', dateRef: rootContext.placeholder.value, prevValue })

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)

    const { value, moveToNext } = updateMinuteOrSecond(num, prevValue)

    rootContext.segmentValues.value.minute = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    rootContext.segmentValues.value.minute = deleteValue(prevValue)
  }
}

function handleSecondSegmentKeydown(e: KeyboardEvent) {
  const dateRef = rootContext.placeholder.value

  if (!isAcceptableSegmentKey(e.key) || isSegmentNavigationKey(e.key) || !('second' in dateRef) || !('second' in rootContext.segmentValues.value))
    return

  const prevValue = rootContext.segmentValues.value.second

  rootContext.segmentValues.value.second = minuteSecondIncrementation({ e, part: 'second', dateRef: rootContext.placeholder.value, prevValue })

  if (isNumberString(e.key)) {
    const num = Number.parseInt(e.key)
    const { value, moveToNext } = updateMinuteOrSecond(num, prevValue)

    rootContext.segmentValues.value.second = value

    if (moveToNext)
      rootContext.focusNext()
  }

  if (e.key === kbd.BACKSPACE) {
    hasLeftFocus.value = false
    rootContext.segmentValues.value.second = deleteValue(prevValue)
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
  const disabled = rootContext.disabled.value
  if (disabled)
    e.preventDefault()
}

function handleSegmentKeydown(e: KeyboardEvent) {
  const disabled = rootContext.disabled.value
  const readonly = rootContext.readonly.value
  if (e.key !== kbd.TAB)
    e.preventDefault()

  if (disabled || readonly)
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
