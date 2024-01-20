<script lang="ts">
import type { MenuSeparatorProps } from '@/Menu'
import { useForwardRef } from '@/shared'

export interface DropdownMenuSeparatorProps extends MenuSeparatorProps {}
</script>

<script setup lang="ts">
import { MenuSeparator } from '@/Menu'

const props = defineProps<DropdownMenuSeparatorProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuSeparator v-bind="props" :ref="forwardRef">
    <slot />
  </MenuSeparator>
</template>
