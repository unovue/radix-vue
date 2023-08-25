<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { RovingFocusItem } from '@/RovingFocus'

export interface ToolbarButtonProps extends PrimitiveProps {
  disabled?: boolean
}
const props = withDefaults(defineProps<ToolbarButtonProps>(), { as: 'button' })
</script>

<template>
  <RovingFocusItem as-child :focusable="!disabled">
    <Primitive :type="as === 'button' ? 'button' : undefined" v-bind="props">
      <slot />
    </Primitive>
  </RovingFocusItem>
</template>
