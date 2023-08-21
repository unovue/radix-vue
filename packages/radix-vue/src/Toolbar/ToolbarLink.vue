<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { RovingFocusItem } from '@/RovingFocus'

export interface ToolbarLinkProps extends PrimitiveProps {}
const props = withDefaults(defineProps<ToolbarLinkProps>(), { as: 'a' })
</script>

<template>
  <RovingFocusItem as-child focusable>
    <Primitive
      v-bind="props"
      @keydown="(event: KeyboardEvent) => {
        if (event.key === ' ') (event.currentTarget as HTMLElement)?.click()
      }"
    >
      <slot />
    </Primitive>
  </RovingFocusItem>
</template>
