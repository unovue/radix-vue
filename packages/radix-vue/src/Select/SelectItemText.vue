<script setup lang="ts">
import { computed, h, onMounted } from 'vue'
import { injectSelectNativeOptionsContext, injectSelectRootContext } from './SelectRoot.vue'
import { SelectContentDefaultContextValue, injectSelectContentContext } from './SelectContentImpl.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { injectSelectItemContext } from './SelectItem.vue'

export interface SelectItemTextProps extends PrimitiveProps {}

const props = withDefaults(defineProps<SelectItemTextProps>(), {
  as: 'span',
})

const rootContext = injectSelectRootContext()
const contentContext = injectSelectContentContext(SelectContentDefaultContextValue)
const nativeOptionContext = injectSelectNativeOptionsContext()
const itemContext = injectSelectItemContext()

const { primitiveElement, currentElement: itemTextElement }
  = usePrimitiveElement()

const nativeOption = computed(() => {
  return h('option', {
    key: itemContext.value,
    value: itemContext.value,
    disabled: itemContext.disabled.value,
    innerHTML: itemTextElement.value?.textContent,
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
  <Primitive :id="itemContext.textId" ref="primitiveElement" v-bind="{ ...props, ...$attrs }">
    <slot />
  </Primitive>

  <!-- Portal the select item text into the trigger value node -->
  <Teleport v-if="itemContext.isSelected.value && rootContext.valueElement.value && !rootContext.valueElementHasChildren.value" :to="rootContext.valueElement.value">
    <slot />
  </Teleport>
</template>
