<script setup lang="ts">
import { injectDialogContext } from './DialogRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface DialogDescriptionProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogDescriptionProps>(), { as: 'p' })

const context = injectDialogContext()
</script>

<template>
  <Primitive v-bind="props" :id="context.descriptionId">
    <slot />
  </Primitive>
</template>
