<script setup lang="ts">
import { injectDialogRootContext } from './DialogRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface DialogDescriptionProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogDescriptionProps>(), { as: 'p' })

const rootContext = injectDialogRootContext()
</script>

<template>
  <Primitive v-bind="props" :id="rootContext.descriptionId">
    <slot />
  </Primitive>
</template>
