<script lang="ts">
import type { MenuSeparatorProps } from '@/Menu'

export interface MenubarSeparatorProps extends MenuSeparatorProps {}
</script>

<script setup lang="ts">
import { MenuSeparator } from '@/Menu'

const props = defineProps<MenubarSeparatorProps>()
</script>

<template>
  <MenuSeparator v-bind="props">
    <slot />
  </MenuSeparator>
</template>
