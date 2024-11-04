<script setup lang="ts">
import type { AcceptableValue } from '@/shared/types'
import type { SelectRootContext } from './SelectRoot.vue'
import { provideSelectRootContext } from './SelectRoot.vue'
import { SelectContentDefaultContextValue, provideSelectContentContext } from './SelectContentImpl.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  context: SelectRootContext<AcceptableValue>
}>()

provideSelectRootContext(props.context)
provideSelectContentContext(SelectContentDefaultContextValue)
</script>

<template>
  <slot />
</template>
