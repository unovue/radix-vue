<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface ComboboxAnchorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { PopperAnchor } from '@/Popper'
import { useForwardRef } from '@/shared'

defineProps<ComboboxAnchorProps>()

const { forwardRef } = useForwardRef()
</script>

<template>
  <PopperAnchor as-child>
    <Primitive
      :ref="forwardRef"
      :as-child="asChild"
      :as="as"
      v-bind="$attrs"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
