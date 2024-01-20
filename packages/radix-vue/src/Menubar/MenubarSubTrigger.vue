<script lang="ts">
import type { MenuSubTriggerProps } from '@/Menu'
import { useForwardRef } from '@/shared'

export interface MenubarSubTriggerProps extends MenuSubTriggerProps {}
</script>

<script setup lang="ts">
import { MenuSubTrigger } from '@/Menu'

const props = defineProps<MenubarSubTriggerProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuSubTrigger
    v-bind="props"
    :ref="forwardRef"
    data-radix-menubar-subtrigger=""
  >
    <slot />
  </MenuSubTrigger>
</template>
