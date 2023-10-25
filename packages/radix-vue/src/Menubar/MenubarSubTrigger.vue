<script lang="ts">
import type { MenuSubTriggerProps } from '@/Menu'

export interface MenubarSubTriggerProps extends MenuSubTriggerProps {}
</script>

<script setup lang="ts">
import { MenuSubTrigger } from '@/Menu'

const props = defineProps<MenubarSubTriggerProps>()
</script>

<template>
  <MenuSubTrigger data-radix-menubar-subtrigger="" v-bind="props">
    <slot />
  </MenuSubTrigger>
</template>
