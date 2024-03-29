<script lang="ts">
import { PopoverContent, type PopoverContentEmits, type PopoverContentProps, PopoverPortal, useForwardPropsEmits } from '..'

export interface DatePickerContentProps extends PopoverContentProps {}
export interface DatePickerContentEmits extends PopoverContentEmits {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerContentProps>()
const emits = defineEmits<DatePickerContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
