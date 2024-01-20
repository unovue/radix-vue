<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface SelectItemTextProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { computed, h, onBeforeUnmount, onMounted } from 'vue'
import { injectSelectNativeOptionsContext, injectSelectRootContext } from './SelectRoot.vue'
import { SelectContentDefaultContextValue, injectSelectContentContext } from './SelectContentImpl.vue'
import { injectSelectItemContext } from './SelectItem.vue'
import { Primitive } from '@/Primitive'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SelectItemTextProps>(), {
  as: 'span',
})

const rootContext = injectSelectRootContext()
const contentContext = injectSelectContentContext(SelectContentDefaultContextValue)
const nativeOptionContext = injectSelectNativeOptionsContext()
const itemContext = injectSelectItemContext()

const { forwardRef, currentElement: itemTextElement } = useForwardExpose()

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

onBeforeUnmount(() => {
  nativeOptionContext.onNativeOptionRemove(nativeOption.value)
})
</script>

<template>
  <Primitive :id="itemContext.textId" :ref="forwardRef" v-bind="{ ...props, ...$attrs }">
    <slot />
  </Primitive>

  <!-- Portal the select item text into the trigger value node -->
  <Teleport
    v-if="itemContext.isSelected.value && rootContext.valueElement.value && !rootContext.valueElementHasChildren.value" :to="rootContext.valueElement.value"
  >
    <slot />
  </Teleport>
</template>
