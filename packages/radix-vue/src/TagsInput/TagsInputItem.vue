<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { createContext } from '@/shared'
import { type Ref, computed, toRefs } from 'vue'
import { injectTagsInputRootContext } from './TagsInputRoot.vue'

export interface TagsInputItemProps extends PrimitiveProps {
  value: string | object
}

export interface TagsInputItemContext {
  value: Ref<string | object>
}

export const [injectTagsInputItemContext, provideTagsInputItemContext]
  = createContext<TagsInputItemContext>('TagsInputItem')
</script>

<script setup lang="ts">
import { Primitive, usePrimitiveElement } from '@/Primitive'

const props = defineProps<TagsInputItemProps>()
const { value } = toRefs(props)

const context = injectTagsInputRootContext()
const { primitiveElement, currentElement } = usePrimitiveElement()
const isElementSelected = computed(() => context.selectedElement.value === currentElement.value)

provideTagsInputItemContext({
  value,
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :aria-selected="isElementSelected"
    :data-state="isElementSelected ? 'active' : 'inactive'"
    data-radix-vue-collection-item
  >
    <slot />
  </Primitive>
</template>
