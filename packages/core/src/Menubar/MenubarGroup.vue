<script lang="ts">
import type { MenuGroupProps } from '@/Menu'

export interface MenubarGroupProps extends MenuGroupProps {}
</script>

<script setup lang="ts">
import { useForwardExpose } from '@/shared'
import { MenuGroup } from '@/Menu'

const props = defineProps<MenubarGroupProps>()
useForwardExpose()
</script>

<template>
  <MenuGroup v-bind="props">
    <slot />
  </MenuGroup>
</template>
