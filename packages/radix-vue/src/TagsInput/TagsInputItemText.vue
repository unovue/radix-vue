<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface TagsInputItemTextProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<TagsInputItemTextProps>(), {
  as: 'span',
})
</script>

<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
