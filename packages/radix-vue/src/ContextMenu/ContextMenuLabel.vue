<script lang="ts">
import type { MenuLabelProps } from '@/Menu'

export interface ContextMenuLabelProps extends MenuLabelProps {}
</script>

<script setup lang="ts">
import { MenuLabel } from '@/Menu'
import { useForwardRef } from '@/shared'

const props = defineProps<ContextMenuLabelProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuLabel v-bind="props" :ref="forwardRef">
    <slot />
  </MenuLabel>
</template>
