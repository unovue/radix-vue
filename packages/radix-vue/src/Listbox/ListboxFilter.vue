<script lang="ts">
import { Primitive, type PrimitiveProps } from '..'
import { injectListboxRootContext } from './ListboxRoot.vue'

export interface ListboxFilterProps extends PrimitiveProps {

}
</script>

<script setup lang="ts">
withDefaults(defineProps<ListboxFilterProps>(), {
  as: 'input',
})

const rootContext = injectListboxRootContext()
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    @keydown.down.up.home.end.prevent="rootContext.onKeydownNavigation"
    @keydown.enter="rootContext.onKeydownEnter"
  >
    <slot />
  </Primitive>
</template>
