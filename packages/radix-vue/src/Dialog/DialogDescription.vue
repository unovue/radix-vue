<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface DialogDescriptionProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectDialogRootContext } from './DialogRoot.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<DialogDescriptionProps>(), { as: 'p' })

useForwardExpose()
const rootContext = injectDialogRootContext()
</script>

<template>
  <Primitive v-bind="props" :id="rootContext.descriptionId">
    <slot />
  </Primitive>
</template>
