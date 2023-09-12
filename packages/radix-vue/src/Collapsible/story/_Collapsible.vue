<script setup lang="ts">
import { useEmitAsProps } from '@/shared'
import type { CollapsibleRootEmits, CollapsibleRootProps } from '..'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from '..'

const props = withDefaults(defineProps<CollapsibleRootProps>(), {
  open: undefined,
  defaultOpen: false,
})
const emits = defineEmits<CollapsibleRootEmits>()
</script>

<template>
  <CollapsibleRoot v-bind="{ ...props, ...useEmitAsProps(emits) }">
    <CollapsibleTrigger>Trigger</CollapsibleTrigger>
    <CollapsibleContent>Content</CollapsibleContent>
  </CollapsibleRoot>
</template>
