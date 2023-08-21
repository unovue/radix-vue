<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface MenuGroupProps extends PrimitiveProps {}

const props = defineProps<MenuGroupProps>()
</script>

<template>
  <Primitive role="group" v-bind="props">
    <slot />
  </Primitive>
</template>
