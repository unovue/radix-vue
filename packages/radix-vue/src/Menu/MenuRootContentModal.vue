<script setup lang="ts">
import MenuContentImpl, {
  type MenuContentImplEmits,
  type MenuRootContentProps,
} from './MenuContentImpl.vue'
import { injectMenuContext } from './MenuRoot.vue'
import { useForwardPropsEmits, useHideOthers } from '@/shared'
import { usePrimitiveElement } from '@/Primitive'

const props = defineProps<MenuRootContentModalProps>()
const emits = defineEmits<MenuRootContentModalEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const menuContext = injectMenuContext()

interface MenuRootContentModalProps extends MenuRootContentProps {}
type MenuRootContentModalEmits = MenuContentImplEmits

const { primitiveElement, currentElement } = usePrimitiveElement()
useHideOthers(currentElement)
</script>

<template>
  <MenuContentImpl
    ref="primitiveElement"
    v-bind="forwarded"
    :trap-focus="menuContext.open.value"
    :disable-outside-pointer-events="menuContext.open.value"
    :disable-outside-scroll="true"
    @dismiss="menuContext.onOpenChange(false)"
    @focus-outside.prevent="emits('focusOutside', $event)"
  >
    <slot />
  </MenuContentImpl>
</template>
