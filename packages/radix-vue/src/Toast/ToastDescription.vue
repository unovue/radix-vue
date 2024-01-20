<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export interface ToastDescriptionProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = defineProps<ToastDescriptionProps>()
useForwardRef()
</script>

<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
