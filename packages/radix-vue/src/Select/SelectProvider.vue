<script setup lang="ts">
import { provide } from 'vue'
import { SELECT_INJECTION_KEY, type SelectProvideValue } from './SelectRoot.vue'

const props = defineProps<{
  context: SelectProvideValue
}>()

provide(SELECT_INJECTION_KEY, props.context)
</script>

<template>
  <slot />
</template>
