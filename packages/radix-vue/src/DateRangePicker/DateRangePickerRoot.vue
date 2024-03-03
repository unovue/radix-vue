<script lang="ts">
import { type DateValue } from '@internationalized/date'

import type { Ref } from 'vue'
import { createContext } from '@/shared'
import { type Granularity, type HourCycle, type Matcher, type SupportedLocale, type WeekDayFormat, getDefaultDate } from '@/shared/date'

import { type CalendarRootProps, type DateRangeFieldRoot, type DateRangeFieldRootProps, PopoverRoot, type PopoverRootEmits, type PopoverRootProps } from '..'

type DateRangePickerRootContext = {
  id: Ref<string | undefined>
  name: Ref<string | undefined>
  minValue: Ref<DateValue | undefined>
  maxValue: Ref<DateValue | undefined>
  hourCycle: Ref<HourCycle | undefined>
  granularity: Ref<Granularity | undefined>
  hideTimeZone: Ref<boolean>
  required: Ref<boolean>
  locale: Ref<SupportedLocale>
  dateFieldRef: Ref<InstanceType<typeof DateRangeFieldRoot> | undefined>
  modelValue: Ref<{ start: DateValue | undefined; end: DateValue | undefined }>
  placeholder: Ref<DateValue>
  pagedNavigation: Ref<boolean>
  preventDeselect: Ref<boolean>
  weekStartsOn: Ref<0 | 1 | 2 | 3 | 4 | 5 | 6>
  weekdayFormat: Ref<WeekDayFormat>
  fixedWeeks: Ref<boolean>
  numberOfMonths: Ref<number>
  disabled: Ref<boolean>
  readonly: Ref<boolean>
  isDateDisabled?: Matcher
  isDateUnavailable?: Matcher
  defaultOpen: Ref<boolean>
  open: Ref<boolean>
  modal: Ref<boolean>
  onDateChange: (date: { start: DateValue | undefined; end: DateValue | undefined }) => void
  onPlaceholderChange: (date: DateValue) => void
}

export type DateRangePickerRootProps = DateRangeFieldRootProps & PopoverRootProps & Pick<CalendarRootProps, 'isDateDisabled' | 'pagedNavigation' | 'weekStartsOn' | 'weekdayFormat' | 'fixedWeeks' | 'numberOfMonths' | 'preventDeselect'>

export type DateRangePickerRootEmits = {
  /** Event handler called whenever the model value changes */
  'update:modelValue': [date: DateValue | undefined]
  /** Event handler called whenever the placeholder value changes */
  'update:placeholder': [date: DateValue]
}

export const [injectDateRangePickerRootContext, provideDateRangePickerRootContext]
  = createContext<DateRangePickerRootContext>('DateRangePickerRoot')
</script>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(defineProps<DateRangePickerRootProps>(), {
  defaultOpen: false,
  open: undefined,
  modal: false,
  pagedNavigation: false,
  preventDeselect: false,
  weekStartsOn: 0,
  weekdayFormat: 'narrow',
  fixedWeeks: false,
  numberOfMonths: 1,
  disabled: false,
  readonly: false,
  initialFocus: false,
  placeholder: undefined,
  locale: 'en',
  isDateDisabled: undefined,
  isDateUnavailable: undefined,
})
const emits = defineEmits<DateRangePickerRootEmits & PopoverRootEmits>()
const {
  locale,
  disabled,
  readonly,
  pagedNavigation,
  weekStartsOn,
  weekdayFormat,
  fixedWeeks,
  numberOfMonths,
  preventDeselect,
  isDateDisabled: propsIsDateDisabled,
  isDateUnavailable: propsIsDateUnavailable,
  defaultOpen,
  modal,
  id,
  name,
  required,
  minValue,
  maxValue,
  granularity,
  hideTimeZone,
  hourCycle,
} = toRefs(props)

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? { start: undefined, end: undefined },
  passive: (props.modelValue === undefined) as false,
}) as Ref<{ start: DateValue | undefined; end: DateValue | undefined }>

const defaultDate = getDefaultDate({
  defaultPlaceholder: props.placeholder,
  granularity: props.granularity,
  defaultValue: modelValue.value.start,
})

const placeholder = useVModel(props, 'placeholder', emits, {
  defaultValue: props.defaultPlaceholder ?? defaultDate.copy(),
  passive: (props.placeholder === undefined) as false,
}) as Ref<DateValue>

const open = useVModel(props, 'open', emits, {
  defaultValue: defaultOpen.value,
  passive: (props.open === undefined) as false,
}) as Ref<boolean>

const dateFieldRef = ref<InstanceType<typeof DateRangeFieldRoot> | undefined>()

provideDateRangePickerRootContext({
  isDateUnavailable: propsIsDateUnavailable.value,
  isDateDisabled: propsIsDateDisabled.value,
  locale,
  disabled,
  pagedNavigation,
  weekStartsOn,
  weekdayFormat,
  fixedWeeks,
  numberOfMonths,
  readonly,
  preventDeselect,
  modelValue,
  placeholder,
  defaultOpen,
  modal,
  open,
  id,
  name,
  required,
  minValue,
  maxValue,
  granularity,
  hideTimeZone,
  hourCycle,
  dateFieldRef,

  onDateChange(date: { start: DateValue | undefined; end: DateValue | undefined }) {
    modelValue.value = { start: date.start ? defaultDate.set({ ...date.start }) : undefined, end: date.end ? defaultDate.set({ ...date.end }) : undefined }
  },
  onPlaceholderChange(date: DateValue) {
    placeholder.value = defaultDate.set({ ...date })
  },
})
</script>

<template>
  <PopoverRoot
    v-model:open="open"
    :default-open="defaultOpen"
    :modal="modal"
  >
    <slot />
  </PopoverRoot>
</template>
