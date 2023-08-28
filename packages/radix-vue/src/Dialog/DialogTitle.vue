<script setup lang="ts">
import { inject } from 'vue'
import { DIALOG_INJECTION_KEY } from './DialogRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface DialogTitleProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogTitleProps>(), { as: 'h2' })

const context = inject(DIALOG_INJECTION_KEY)
</script>

<template>
  <Primitive v-bind="props" :id="context?.titleId">
    <slot />
  </Primitive>
</template>
