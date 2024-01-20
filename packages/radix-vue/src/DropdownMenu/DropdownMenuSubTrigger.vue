<script lang="ts">
import type { MenuSubTriggerProps } from '@/Menu'
import { useForwardRef } from '@/shared'

export interface DropdownMenuSubTriggerProps extends MenuSubTriggerProps {}
</script>

<script setup lang="ts">
import { MenuSubTrigger } from '@/Menu'

const props = defineProps<DropdownMenuSubTriggerProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuSubTrigger v-bind="props" :ref="forwardRef">
    <slot />
  </MenuSubTrigger>
</template>
