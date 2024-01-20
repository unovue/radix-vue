<script lang="ts">
import type { MenuArrowProps } from '@/Menu'
import { useForwardRef } from '@/shared'

export interface MenubarArrowProps extends MenuArrowProps {}
</script>

<script setup lang="ts">
import { MenuArrow } from '@/Menu'

const props = withDefaults(defineProps<MenubarArrowProps>(), {
  width: 10,
  height: 5,
})
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuArrow v-bind="props" :ref="forwardRef">
    <slot />
  </MenuArrow>
</template>
