<script setup lang="ts">
import { computed, h, onMounted } from 'vue'
import { injectSelectNativeOptionsContext } from './SelectRoot.vue'
import { injectSelectContentContext } from './SelectContentImpl.vue'
import { injectSelectItemContext } from './SelectItem.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'

export interface SelectItemTextProps extends PrimitiveProps {}

const props = withDefaults(defineProps<SelectItemTextProps>(), {
  as: 'span',
})

const contentContext = injectSelectContentContext()
const nativeOptionContext = injectSelectNativeOptionsContext()
const itemContext = injectSelectItemContext()

const { primitiveElement, currentElement: itemTextElement }
  = usePrimitiveElement()

const nativeOption = computed(() => {
  return h('option', {
    key: itemContext.value,
    value: itemContext.value,
    disabled: itemContext.disabled.value,
    innerHTML: itemTextElement.value.textContent,
  })
})

onMounted(() => {
  if (!itemTextElement.value)
    return
  itemContext.onItemTextChange(itemTextElement.value)
  contentContext.itemTextRefCallback(
    itemTextElement.value,
    itemContext.value,
    itemContext.disabled.value,
  )
  nativeOptionContext.onNativeOptionAdd(nativeOption.value)
})

// onBeforeUnmount(() => {
//   onNativeOptionRemove(nativeOption.value);
// });
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <Primitive :id="itemContext.textId" ref="primitiveElement" v-bind="props">
    <slot />
  </Primitive>
</template>
