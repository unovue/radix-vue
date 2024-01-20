<script lang="ts">
import type { MenuGroupProps } from '@/Menu'
import { useForwardRef } from '@/shared'

export interface DropdownMenuGroupProps extends MenuGroupProps {}
</script>

<script setup lang="ts">
import { MenuGroup } from '@/Menu'

const props = defineProps<DropdownMenuGroupProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuGroup v-bind="props" :ref="forwardRef">
    <slot />
  </MenuGroup>
</template>
