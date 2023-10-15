<script setup lang="ts">
import type { SelectRootContext } from './SelectRoot.vue'
import { provideSelectRootContext } from './SelectRoot.vue'

const props = defineProps<{
  context: SelectRootContext
}>()

provideSelectRootContext(props.context)
</script>

<template>
  <slot />
</template>
