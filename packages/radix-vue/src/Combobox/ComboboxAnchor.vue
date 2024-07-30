<script lang="ts">
export interface ComboboxAnchorProps extends PopperAnchorProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { PopperAnchor, type PopperAnchorProps } from '@/Popper'
import { useForwardExpose } from '@/shared'

defineProps<ComboboxAnchorProps>()

const { forwardRef } = useForwardExpose()
</script>

<template>
  <PopperAnchor
    as-child
    :reference="reference"
  >
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
