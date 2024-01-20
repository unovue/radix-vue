<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export interface DialogTitleProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectDialogRootContext } from './DialogRoot.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<DialogTitleProps>(), { as: 'h2' })
const rootContext = injectDialogRootContext()
const { forwardRef } = useForwardRef()
</script>

<template>
  <Primitive v-bind="props" :id="rootContext.titleId" :ref="forwardRef">
    <slot />
  </Primitive>
</template>
