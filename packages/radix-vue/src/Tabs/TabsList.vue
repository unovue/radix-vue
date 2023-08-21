<script lang="ts">
export interface TabsListProps extends PrimitiveProps {
  loop?: boolean
}
</script>

<script setup lang="ts">
import { inject, onMounted, toRefs } from 'vue'
import { TABS_INJECTION_KEY } from './TabsRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'

const props = withDefaults(defineProps<TabsListProps>(), {
  loop: true,
})
const { loop } = toRefs(props)

const injectedValue = inject(TABS_INJECTION_KEY)
const { primitiveElement, currentElement: parentElement }
  = usePrimitiveElement()

onMounted(() => {
  injectedValue!.parentElement.value = parentElement.value
  injectedValue!.loop = loop
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    role="tablist"
    :as-child="props.asChild"
    :as="as"
    :aria-orientation="injectedValue?.orientation"
    tabindex="0"
    :data-orientation="injectedValue?.orientation"
    style="outline: none"
  >
    <slot />
  </Primitive>
</template>
