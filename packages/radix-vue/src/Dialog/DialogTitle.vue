<script setup lang="ts">
import { injectDialogContext } from './DialogRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface DialogTitleProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogTitleProps>(), { as: 'h2' })

const context = injectDialogContext()
</script>

<template>
  <Primitive v-bind="props" :id="context.titleId">
    <slot />
  </Primitive>
</template>
