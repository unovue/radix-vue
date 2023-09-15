<script setup lang="ts" generic="T">
import { computed } from 'vue'
import VisuallyHidden from './VisuallyHidden.vue'

const props = defineProps<{
  name: string
  value: T
}>()

const parsedValue = computed(() => {
  if (typeof props.value === 'string' || typeof props.value === 'number')
    return [{ name: props.name, value: props.value }]

  else if (typeof props.value === 'object' && Array.isArray(props.value))
    return props.value.flatMap((obj, index) => Object.entries(obj).map(([key, value]) => ({ name: `[${index}][${props.name}][${key}]`, value })))

  else if (typeof props.value === 'object' && !Array.isArray(props.value))
    return Object.entries(props.value as object).map(([key, value]) => ({ name: `[${props.name}][${key}]`, value }))

  return []
})
</script>

<template>
  <VisuallyHidden
    v-for="parsed in parsedValue"
    :key="parsed.name"
    as="input"
    type="hidden"
    hidden
    readonly
    :name="parsed.name"
    :value="parsed.value"
  />
</template>
