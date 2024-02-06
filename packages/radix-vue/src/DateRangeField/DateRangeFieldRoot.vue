<script lang="ts">
import { type DateValue } from '@internationalized/date'

import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import {
  type AnyExceptLiteral,
  DATE_SEGMENT_PARTS,
  type DateAndTimeSegmentObj,
  type DateSegmentObj,
  type DateSegmentPart,
  EDITABLE_SEGMENT_PARTS,
  type Formatter,
  type Granularity,
  type HourCycle,
  type Matcher,
  type SegmentContentObj,
  type SegmentPart,
  type SegmentValueObj,
  TIME_SEGMENT_PARTS,
  type TimeSegmentPart,
  areAllDaysBetweenValid,
  createContext,
  getDefaultDate,
  getOptsByGranularity,
  getPlaceholder,
  hasTime,
  isBefore,
  isDateSegmentPart,
  isSegmentPart,
  isZonedDateTime,
  toDate,
  useDateFormatter,
  useKbd,
} from '@/shared'
import { isSegmentNavigationKey } from '@/DateField'

type DateRangeFieldRootContext = {
  locale: Ref<string>
  modelValue: Ref<{ start: DateValue | undefined;end: DateValue | undefined }>
  placeholder: Ref<DateValue>
  isDateUnavailable?: Matcher
  isInvalid: Ref<boolean>
  disabled: Ref<boolean>
  readonly: Ref<boolean>
  formatter: Formatter
  hourCycle: HourCycle
  segmentValues: Ref<Record<'start' | 'end', SegmentValueObj>>
  segmentContents: Ref<{ start: { part: SegmentPart; value: string }[]; end: { part: SegmentPart; value: string }[] }>
  elements: Ref<Set<HTMLElement>>
  focusNext: () => void
  setFocusedElement: (el: HTMLElement) => void
}

export interface DateRangeFieldRootProps extends PrimitiveProps {
  defaultValue?: { start: DateValue; end: DateValue }
  placeholder?: DateValue
  modelValue?: { start: DateValue | undefined;end: DateValue | undefined }
  hourCycle?: HourCycle
  granularity?: Granularity
  hideTimeZone?: boolean
  maxValue?: DateValue
  minValue?: DateValue
  locale?: string
  disabled?: boolean
  readonly?: boolean
  isDateUnavailable?: Matcher
  name?: string
  required?: boolean
  id?: string
}

export type DateRangeFieldRootEmits = {
  'update:modelValue': [{ start: DateValue | undefined; end: DateValue | undefined }]
  'update:placeholder': [date: DateValue]
}

export const [injectDateRangeFieldRootContext, provideDateRangeFieldRootContext]
  = createContext<DateRangeFieldRootContext>('DateRangeFieldRoot')
</script>

<script setup lang="ts">
import { computed, onMounted, ref, toRefs, watch } from 'vue'
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { useVModel } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DateRangeFieldRootProps>(), {
  defaultValue: undefined,
  disabled: false,
  readonly: false,
  placeholder: undefined,
  locale: 'en',
  isDateUnavailable: undefined,
})
const emits = defineEmits<DateRangeFieldRootEmits>()
const { locale, disabled, readonly, isDateUnavailable: propsIsDateUnavailable } = toRefs(props)

const formatter = useDateFormatter(props.locale)
const { primitiveElement, currentElement: parentElement }
  = usePrimitiveElement()
const segmentElements = ref<Set<HTMLElement>>(new Set())

onMounted(() => {
  Array.from(parentElement.value.querySelectorAll('[data-radix-vue-date-field-segment]')).filter(item => item.getAttribute('data-radix-vue-date-field-segment') !== 'literal').forEach(el => segmentElements.value.add(el as HTMLElement))
})

const defaultDate = getDefaultDate({
  defaultPlaceholder: props.placeholder,
  granularity: props.granularity,
  defaultValue: props.modelValue?.start,
})

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? { start: undefined, end: undefined },
  passive: (props.modelValue === undefined) as false,
}) as Ref<{ start: DateValue | undefined; end: DateValue | undefined }>

const placeholder = useVModel(props, 'placeholder', emits, {
  defaultValue: defaultDate,
  passive: (props.placeholder === undefined) as false,
}) as Ref<DateValue>

const inferredGranularity = computed(() => {
  if (props.granularity)
    return props.granularity

  return hasTime(placeholder.value) ? 'minute' : 'day'
})

const isStartInvalid = computed(() => {
  if (!modelValue.value.start)
    return false

  if (propsIsDateUnavailable.value?.(modelValue.value.start))
    return true

  if (props.minValue && isBefore(modelValue.value.start, props.minValue))
    return true

  if (props.maxValue && isBefore(props.maxValue, modelValue.value.start))
    return true

  return false
})

const isEndInvalid = computed(() => {
  if (!modelValue.value.end)
    return false

  if (propsIsDateUnavailable.value?.(modelValue.value.end))
    return true

  if (props.minValue && isBefore(modelValue.value.end, props.minValue))
    return true

  if (props.maxValue && isBefore(props.maxValue, modelValue.value.end))
    return true

  return false
})

const isInvalid = computed(() => {
  if (isStartInvalid.value || isEndInvalid.value)
    return true

  if (!modelValue.value.start || !modelValue.value.end)
    return true

  if (!isBefore(modelValue.value.start, modelValue.value.end))
    return true

  if (propsIsDateUnavailable.value !== undefined) {
    const allValid = areAllDaysBetweenValid(
      modelValue.value.start,
      modelValue.value.end,
      propsIsDateUnavailable.value,
      undefined,
    )
    if (!allValid)
      return true
  }
  return false
})

const calendarDateTimeGranularities = ['hour', 'minute', 'second']

type SyncSegmentValuesProps = {
  value: DateValue
  formatter: Formatter
}

function syncSegmentValues(props: SyncSegmentValuesProps): SegmentValueObj {
  const { formatter } = props

  const dateValues = DATE_SEGMENT_PARTS.map((part) => {
    return [part, props.value[part]]
  })
  if ('hour' in props.value) {
    const timeValues = TIME_SEGMENT_PARTS.map((part) => {
      if (part === 'dayPeriod')
        return [part, formatter.dayPeriod(toDate(props.value))]
      return [part, props.value[part as keyof DateValue]]
    })

    const mergedSegmentValues = [...dateValues, ...timeValues]
    return Object.fromEntries(mergedSegmentValues) as DateAndTimeSegmentObj
  }

  return Object.fromEntries(dateValues) as DateSegmentObj
}

function initializeSegmentValues(granularity: Granularity): SegmentValueObj {
  const initialParts = EDITABLE_SEGMENT_PARTS.map((part) => {
    if (part === 'dayPeriod')
      return [part, 'AM']

    return [part, null]
  }).filter(([key]) => {
    if (key === 'literal' || key === null)
      return false
    if (granularity === 'day')
      return !calendarDateTimeGranularities.includes(key)
    else return true
  })

  return Object.fromEntries(initialParts)
}

const initialSegments = initializeSegmentValues(inferredGranularity.value)

type SharedContentProps = {
  granularity: Granularity
  dateRef: Ref<DateValue>
  formatter: Formatter
  hideTimeZone: boolean
  hourCycle: HourCycle
}

type CreateContentObjProps = SharedContentProps & {
  segmentValues: SegmentValueObj
  locale: string
}

type CreateContentArrProps = SharedContentProps & {
  contentObj: SegmentContentObj
}

function createContentObj(props: CreateContentObjProps) {
  const { segmentValues, formatter, locale } = props
  function getPartContent(part: DateSegmentPart | TimeSegmentPart) {
    if ('hour' in segmentValues) {
      const value = segmentValues[part]
      if (value !== null) {
        return formatter.part(props.dateRef.value.set({ [part]: value }), part, {
          hourCycle: props.hourCycle === 24 ? 'h24' : undefined,
        })
      }
      else {
        return getPlaceholder(part, '', locale)
      }
    }
    else {
      if (isDateSegmentPart(part)) {
        const value = segmentValues[part]
        if (value !== null)
          return formatter.part(props.dateRef.value.set({ [part]: value }), part)

        else
          return getPlaceholder(part, '', locale)
      }
      return ''
    }
  }

  const content = Object.keys(segmentValues).reduce((obj, part) => {
    if (!isSegmentPart(part))
      return obj
    if ('hour' in segmentValues && part === 'dayPeriod') {
      const value = segmentValues[part]

      if (value !== null)
        obj[part] = value

      else
        obj[part] = getPlaceholder(part, 'AM', locale)
    }
    else {
      obj[part] = getPartContent(part)
    }

    return obj
  }, {} as SegmentContentObj)

  return content
}

function createContentArr(props: CreateContentArrProps) {
  const { granularity, formatter, contentObj, hideTimeZone, hourCycle } = props
  const parts = formatter.toParts(props.dateRef.value, getOptsByGranularity(granularity, hourCycle))

  const segmentContentArr = parts
    .map((part) => {
      const defaultParts = ['literal', 'timeZoneName', null]

      if (defaultParts.includes(part.type) || !isSegmentPart(part.type)) {
        return {
          part: part.type,
          value: part.value,
        }
      }

      return {
        part: part.type,
        value: contentObj[part.type],
      }
    })
    .filter((segment): segment is { part: SegmentPart; value: string } => {
      if (segment.part === null || segment.value === null)
        return false
      if (segment.part === 'timeZoneName' && (!isZonedDateTime(props.dateRef.value) || hideTimeZone))
        return false

      return true
    })

  return segmentContentArr
}

type CreateContentProps = CreateContentObjProps

function createContent(props: CreateContentProps) {
  const contentObj = createContentObj(props)

  const contentArr = createContentArr({
    contentObj,
    ...props,
  })

  return {
    obj: contentObj,
    arr: contentArr,
  }
}

const segmentValues = ref<Record<'start' | 'end', SegmentValueObj>>({
  start: modelValue.value.start ? { ...syncSegmentValues({ value: modelValue.value.start, formatter }) } : { ...initialSegments },
  end: modelValue.value.end ? { ...syncSegmentValues({ value: modelValue.value.end, formatter }) } : { ...initialSegments },
})

const startSegmentContent = computed(() => createContent({
  granularity: inferredGranularity.value,
  dateRef: placeholder,
  formatter,
  hideTimeZone: props.hideTimeZone,
  hourCycle: props.hourCycle,
  segmentValues: segmentValues.value.start,
  locale: props.locale,
}))

const endSegmentContent = computed(() => createContent({
  granularity: inferredGranularity.value,
  dateRef: placeholder,
  formatter,
  hideTimeZone: props.hideTimeZone,
  hourCycle: props.hourCycle,
  segmentValues: segmentValues.value.end,
  locale: props.locale,
}))

const segmentContents = computed(() => ({
  start: startSegmentContent.value.arr,
  end: endSegmentContent.value.arr,
}))

const editableSegmentContents = computed(() => ({ start: segmentContents.value.start.filter(({ part }) => part !== 'literal'), end: segmentContents.value.end.filter(({ part }) => part !== 'literal') }))

const startValue = ref(modelValue.value.start) as Ref<DateValue | undefined>
const endValue = ref(modelValue.value.end) as Ref<DateValue | undefined>

watch([startValue, endValue], ([startValue, endValue]): void => {
  if (modelValue.value.start && modelValue.value.end && startValue && endValue && modelValue.value.start.toString() === startValue.toString() && modelValue.value.end.toString() === endValue.toString())
    return

  if (startValue && endValue) {
    modelValue.value = { start: startValue, end: endValue }
    return
  }

  modelValue.value = { start: undefined, end: undefined }
})

watch([startValue, endValue], ([startValue, endValue]) => {
  if (startValue && endValue) {
    segmentValues.value = {
      start: { ...syncSegmentValues({ value: startValue, formatter }) },
      end: { ...syncSegmentValues({ value: endValue, formatter }) },
    }
  }
})

const startSegmentValues = computed(() => segmentValues.value.start)
const endSegmentValues = computed(() => segmentValues.value.end)

watch(startSegmentValues, (value) => {
  if (Object.values(value).every(item => item !== null)) {
    let updateObject = { ...value as Record<AnyExceptLiteral, number> }
    if ('dayPeriod' in value) {
      updateObject = {
        ...updateObject,
        hour: value.dayPeriod === 'PM' && !startValue.value ? value.hour! + 12 : value.hour!,
      }
    }

    let dateRef = placeholder.value
    Object.keys(updateObject).forEach((part) => {
      const value = updateObject[part as AnyExceptLiteral]
      dateRef = dateRef.set({ [part]: value })
    })
    if (startValue.value && startValue.value.toString() === dateRef.toString())
      return
    startValue.value = dateRef
  }
}, { deep: true })

watch(endSegmentValues, (value) => {
  if (Object.values(value).every(item => item !== null)) {
    let updateObject = { ...value as Record<AnyExceptLiteral, number> }
    if ('dayPeriod' in value) {
      updateObject = {
        ...updateObject,
        hour: value.dayPeriod === 'PM' && !endValue.value ? value.hour! + 12 : value.hour!,
      }
    }

    let dateRef = placeholder.value
    Object.keys(updateObject).forEach((part) => {
      const value = updateObject[part as AnyExceptLiteral]
      dateRef = dateRef.set({ [part]: value })
    })
    if (endValue.value && endValue.value.toString() === dateRef.toString())
      return
    endValue.value = dateRef
  }
}, { deep: true })

watch(modelValue, (value) => {
  if (value.start && value.start.toString() !== startValue.value?.toString())
    startValue.value = value.start

  if (value.end && value.end.toString() !== endValue.value?.toString())
    endValue.value = value.end
})

const currentFocusedElement = ref<HTMLElement | null>(null)

const currentSegmentIndex = computed(() => Array.from(segmentElements.value).findIndex(el =>
  el.getAttribute('data-radix-vue-date-field-segment') === currentFocusedElement.value?.getAttribute('data-radix-vue-date-field-segment')
&& el.getAttribute('data-radix-vue-date-range-field-segment-type') === currentFocusedElement.value?.getAttribute('data-radix-vue-date-range-field-segment-type')))

const nextFocusableSegment = computed(() => {
  if (currentSegmentIndex.value > segmentElements.value.size - 1)
    return null
  const segmentToFocus = Array.from(segmentElements.value)[currentSegmentIndex.value + 1]
  return segmentToFocus
})
const prevFocusableSegment = computed(() => {
  if (currentSegmentIndex.value < 0)
    return null

  const segmentToFocus = Array.from(segmentElements.value)[currentSegmentIndex.value - 1]
  return segmentToFocus
})

const kbd = useKbd()

function handleKeydown(e: KeyboardEvent) {
  if (!isSegmentNavigationKey(e.key))
    return
  if (e.key === kbd.ARROW_LEFT)
    prevFocusableSegment.value?.focus()
  if (e.key === kbd.ARROW_RIGHT)
    nextFocusableSegment.value?.focus()
}

function setFocusedElement(el: HTMLElement) {
  currentFocusedElement.value = el
}

provideDateRangeFieldRootContext({
  isDateUnavailable: propsIsDateUnavailable.value,
  locale,
  modelValue,
  placeholder,
  disabled,
  formatter,
  hourCycle: props.hourCycle,
  readonly,
  segmentValues,
  isInvalid,
  segmentContents: editableSegmentContents,
  elements: segmentElements,
  setFocusedElement,
  focusNext() {
    nextFocusableSegment.value?.focus()
  },
})

defineExpose({
  setFocusedElement,
})
</script>

<template>
  <Primitive
    v-bind="$attrs"
    ref="primitiveElement"
    role="group"
    :aria-disabled="disabled ? true : undefined"
    :data-disabled="disabled ? '' : undefined"
    :data-readonly="readonly ? '' : undefined"
    :data-invalid="isInvalid ? '' : undefined"
    @keydown.left.right="handleKeydown"
  >
    <slot :model-value="modelValue" :segments="segmentContents" />
  </Primitive>

  <input
    :id="id"
    type="text"
    tabindex="-1"
    aria-hidden
    :value="`${modelValue.start?.toString()} - ${modelValue.end?.toString()}`"
    :name="name"
    :disabled="disabled"
    :required="required"
    :style="{
      transform: 'translateX(-100%)',
      position: 'absolute',
      pointerEvents: 'none',
      opacity: 0,
      margin: 0,
    }"
    @focus="Array.from(segmentElements)?.[0]?.focus()"
  >
</template>
