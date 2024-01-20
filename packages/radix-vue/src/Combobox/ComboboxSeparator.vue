<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export interface ComboboxSeparatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = defineProps<ComboboxSeparatorProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <Primitive v-bind="props" :ref="forwardRef" aria-hidden>
    <slot />
  </Primitive>
</template>
