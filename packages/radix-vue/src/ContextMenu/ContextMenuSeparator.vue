<script lang="ts">
import type { MenuSeparatorProps } from '@/Menu'

export interface ContextMenuSeparatorProps extends MenuSeparatorProps {}
</script>

<script setup lang="ts">
import { MenuSeparator } from '@/Menu'
import { useForwardRef } from '@/shared'

const props = defineProps<ContextMenuSeparatorProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuSeparator v-bind="props" :ref="forwardRef">
    <slot />
  </MenuSeparator>
</template>
