<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface ComboboxAnchorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { PopperAnchor } from '@/Popper'

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
