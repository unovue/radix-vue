<script lang="ts">
import type { MenuSubTriggerProps } from '@/Menu'

export interface DropdownMenuSubTriggerProps extends MenuSubTriggerProps {}
</script>

<script setup lang="ts">
import { MenuSubTrigger } from '@/Menu'

const props = defineProps<DropdownMenuSubTriggerProps>()
</script>

<template>
  <MenuSubTrigger v-bind="props">
    <slot />
  </MenuSubTrigger>
</template>
