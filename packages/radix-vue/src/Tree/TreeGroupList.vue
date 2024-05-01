<script lang="ts">
export interface TreeGroupListProps<T extends AcceptableValue> extends PrimitiveProps {
  value?: T
}
</script>

<script setup lang="ts" generic="T extends AcceptableValue">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import type { AcceptableValue } from '@/shared/types'
import { injectTreeGroupContext } from './TreeGroup.vue'

const props = withDefaults(defineProps<TreeGroupListProps<T>>(), {
  as: 'ul',
})

const groupContext = injectTreeGroupContext()
</script>

<template>
  <Primitive
    v-if="groupContext.isExpanded.value"
    role="group"
    :as="as"
    :as-child="asChild"
  >
    <slot />
  </Primitive>
</template>
