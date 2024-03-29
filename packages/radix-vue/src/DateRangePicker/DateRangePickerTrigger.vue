<script lang="ts">
import { PopoverTrigger, type PopoverTriggerProps } from '..'
import { injectDateRangePickerRootContext } from './DateRangePickerRoot.vue'

export interface DateRangePickerTriggerProps extends PopoverTriggerProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerTriggerProps>()
const rootContext = injectDateRangePickerRootContext()
</script>

<template>
  <PopoverTrigger
    data-radix-vue-date-field-segment="trigger"
    v-bind="props"
    @focusin="(e: FocusEvent) => {
      rootContext.dateFieldRef.value?.setFocusedElement(e.target as HTMLElement)
    }"
  >
    <slot />
  </PopoverTrigger>
</template>
