<script lang="ts">
import { PopoverAnchor, type PopoverAnchorProps } from '..'

export interface DatePickerAnchorProps extends PopoverAnchorProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerAnchorProps>()
</script>

<template>
  <PopoverAnchor v-bind="props">
    <slot />
  </PopoverAnchor>
</template>
