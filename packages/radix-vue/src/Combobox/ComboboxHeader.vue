<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { PopperAnchor } from '@/Popper'

export interface ComboboxHeaderProps extends PrimitiveProps {}

defineProps<ComboboxHeaderProps>()
</script>

<template>
  <PopperAnchor as-child>
    <Primitive
      :as-child="asChild"
      :as="as"
      v-bind="$attrs"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
