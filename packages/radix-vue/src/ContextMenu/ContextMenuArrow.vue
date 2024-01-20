<script lang="ts">
import type { MenuArrowProps } from '@/Menu'
import { useForwardRef } from '@/shared'

export interface ContextMenuArrowProps extends MenuArrowProps {}
</script>

<script setup lang="ts">
import { MenuArrow } from '@/Menu'

const props = defineProps<ContextMenuArrowProps>()

const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuArrow v-bind="props" :ref="forwardRef">
    <slot />
  </MenuArrow>
</template>
