<script lang="ts">
import type { MenuGroupProps } from '@/Menu'

export interface ContextMenuGroupProps extends MenuGroupProps {}
</script>

<script setup lang="ts">
import { MenuGroup } from '@/Menu'

const props = defineProps<ContextMenuGroupProps>()
</script>

<template>
  <MenuGroup v-bind="props">
    <slot />
  </MenuGroup>
</template>
