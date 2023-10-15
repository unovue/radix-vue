<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { PopperAnchor } from '@/Popper'

export interface ComboboxAnchorProps extends PrimitiveProps {}

defineProps<ComboboxAnchorProps>()
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
