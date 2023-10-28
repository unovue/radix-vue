<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface DialogTitleProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectDialogRootContext } from './DialogRoot.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<DialogTitleProps>(), { as: 'h2' })
const rootContext = injectDialogRootContext()
</script>

<template>
  <Primitive v-bind="props" :id="rootContext.titleId">
    <slot />
  </Primitive>
</template>
