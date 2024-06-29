<script setup lang="ts" generic="T">
import { computed } from 'vue'
import VisuallyHidden from './VisuallyHidden.vue'

const props = defineProps<{
  name: string
  value: T
  required?: boolean
  disabled?: boolean
}>()

const parsedValue = computed(() => {
  // if primitive value
  if (typeof props.value === 'string' || typeof props.value === 'number' || typeof props.value === 'boolean') {
    return [{ name: props.name, value: props.value }]
  }

  // if array value
  else if (typeof props.value === 'object' && Array.isArray(props.value)) {
    return props.value.flatMap((obj, index) => {
      // if item in array is object
      if (typeof obj === 'object')
        return Object.entries(obj).map(([key, value]) => ({ name: `[${index}][${props.name}][${key}]`, value }))
      // if item in array is not object, may be primitive
      else
        return ({ name: `[${props.name}][${index}]`, value: obj })
    })
  }

  // if object value
  else if (props.value !== null && typeof props.value === 'object' && !Array.isArray(props.value)) {
    return Object.entries(props.value as object).map(([key, value]) => ({ name: `[${props.name}][${key}]`, value }))
  }

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
    :required="required"
    :disabled="disabled"
  />
</template>
