<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface ComboboxSeparatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = defineProps<ComboboxSeparatorProps>()
</script>

<template>
  <Primitive aria-hidden v-bind="props">
    <slot />
  </Primitive>
</template>
