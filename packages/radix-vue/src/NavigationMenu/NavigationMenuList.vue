<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
import { injectNavigationMenuContext } from './NavigationMenuRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'

export interface NavigationMenuListProps extends PrimitiveProps {}
const props = withDefaults(defineProps<NavigationMenuListProps>(), {
  as: 'ul',
})

const context = injectNavigationMenuContext()
const { primitiveElement, currentElement } = usePrimitiveElement()

onMounted(() => {
  context.onIndicatorTrackChange(currentElement.value)
})
</script>

<template>
  <Primitive ref="primitiveElement" style="position: relative">
    <Primitive
      v-bind="$attrs"
      :as-child="props.asChild"
      :as="as"
      :data-orientation="context.orientation"
    >
      <slot />
    </Primitive>
  </Primitive>
</template>
