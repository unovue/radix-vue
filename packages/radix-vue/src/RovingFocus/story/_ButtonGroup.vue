<script setup lang="ts">
import { provide, ref } from 'vue'
import { RovingFocusGroup, type RovingFocusGroupProps } from '../'

interface Props extends RovingFocusGroupProps {
  defaultValue?: string
}
const props = defineProps<Props>()

const value = ref(props.defaultValue ?? '')

provide('rovingFocusDemo', {
  value,
})
</script>

<template>
  <RovingFocusGroup
    v-bind="props"
    class="inline-flex gap-4 p-2"
    :class="orientation === 'vertical' ? 'flex-col' : 'flex-row'"
  >
    <slot />
  </RovingFocusGroup>
</template>
