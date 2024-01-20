<script lang="ts">
import type { MenuLabelProps } from '@/Menu'
import { useForwardRef } from '@/shared'

export interface DropdownMenuLabelProps extends MenuLabelProps {}
</script>

<script setup lang="ts">
import { MenuLabel } from '@/Menu'

const props = defineProps<DropdownMenuLabelProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuLabel v-bind="props" :ref="forwardRef">
    <slot />
  </MenuLabel>
</template>
