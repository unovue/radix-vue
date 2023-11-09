<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectTagsInputRootContext } from './TagsInputRoot.vue'

export interface TagsInputCancelProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<TagsInputCancelProps>(), {
  as: 'button',
})

const context = injectTagsInputRootContext()

function handleCancel() {
  context.modelValue.value = []
}
</script>

<template>
  <Primitive
    v-bind="props"
    :type="as === 'button' ? 'button' : undefined"
    @click="handleCancel"
  >
    <slot />
  </Primitive>
</template>
