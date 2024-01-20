<script lang="ts">
import type { MenuSubTriggerProps } from '@/Menu'

export interface ContextMenuSubTriggerProps extends MenuSubTriggerProps {}
</script>

<script setup lang="ts">
import { MenuSubTrigger } from '@/Menu'
import { useForwardRef } from '@/shared'

const props = defineProps<ContextMenuSubTriggerProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuSubTrigger v-bind="props" :ref="forwardRef">
    <slot />
  </MenuSubTrigger>
</template>
