<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface ToolbarLinkProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { RovingFocusItem } from '@/RovingFocus'

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
