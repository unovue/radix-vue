<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectTagsInputItemContext } from './TagsInputItem.vue'
import { injectTagsInputRootContext } from './TagsInputRoot.vue'

export interface TagsInputItemDeleteProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<TagsInputItemDeleteProps>(), {
  as: 'button',
})

const context = injectTagsInputRootContext()
const itemContext = injectTagsInputItemContext()

function handleDelete() {
  const index = context.modelValue.value.findIndex(i => i === itemContext.value.value)
  context.onRemoveValue(index)
}
</script>

<template>
  <Primitive
    tabindex="-1"
    v-bind="props"
    :type="as === 'button' ? 'button' : undefined"
    @click="handleDelete"
  >
    <slot />
  </Primitive>
</template>
