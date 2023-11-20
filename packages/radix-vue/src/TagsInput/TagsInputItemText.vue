<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectTagsInputItemContext } from './TagsInputItem.vue'

export interface TagsInputItemTextProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<TagsInputItemTextProps>(), {
  as: 'span',
})

const itemContext = injectTagsInputItemContext()
</script>

<template>
  <Primitive v-bind="props" :id="itemContext.textId">
    <slot />
  </Primitive>
</template>
