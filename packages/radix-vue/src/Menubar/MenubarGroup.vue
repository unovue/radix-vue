<script lang="ts">
import type { MenuGroupProps } from '@/Menu'

export interface MenubarGroupProps extends MenuGroupProps {}
</script>

<script setup lang="ts">
import { useForwardRef } from '@/shared'
import { MenuGroup } from '@/Menu'

const props = defineProps<MenubarGroupProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuGroup v-bind="props" :ref="forwardRef">
    <slot />
  </MenuGroup>
</template>
