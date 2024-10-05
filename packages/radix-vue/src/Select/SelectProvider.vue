<script setup lang="ts">
import type { SelectRootContext } from './SelectRoot.vue'
import { provideSelectRootContext } from './SelectRoot.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  context: SelectRootContext
}>()

provideSelectRootContext(props.context)
</script>

<template>
  <slot />
</template>
