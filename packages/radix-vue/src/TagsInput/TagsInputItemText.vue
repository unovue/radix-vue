<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectTagsInputItemContext } from './TagsInputItem.vue'
import { useForwardExpose } from '@/shared'

export interface TagsInputItemTextProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<TagsInputItemTextProps>(), {
  as: 'span',
})

const itemContext = injectTagsInputItemContext()
useForwardExpose()
</script>

<template>
  <Primitive v-bind="props" :id="itemContext.textId">
    <slot>{{ itemContext.value.value }}</slot>
  </Primitive>
</template>
